#!/usr/bin/env bash
set -Eeuo pipefail

readonly base_dir="/home/earthlink-deploy"
readonly releases_dir="$base_dir/releases"
readonly incoming_dir="$base_dir/incoming"
readonly current_link="$base_dir/current"
readonly release_id="${1:-}"

if [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
  printf 'Invalid release identifier.\n' >&2
  exit 2
fi

readonly archive="$incoming_dir/earthlinkgroup-${release_id}.tar.gz"
readonly release_dir="$releases_dir/$release_id"

if [[ ! -f "$archive" ]]; then
  printf 'Release archive not found.\n' >&2
  exit 1
fi

mkdir -p "$releases_dir"
previous_release="$(readlink -f "$current_link" 2>/dev/null || true)"

if [[ ! -d "$release_dir" ]]; then
  staging_dir="$releases_dir/.${release_id}.tmp.$$"
  mkdir -m 0755 "$staging_dir"
  trap 'rm -rf -- "$staging_dir"' EXIT

  if tar -tzf "$archive" | grep -Eq '(^/|(^|/)\.\.(/|$))'; then
    printf 'Release archive contains an unsafe path.\n' >&2
    exit 1
  fi

  tar -xzf "$archive" -C "$staging_dir"
  if [[ ! -f "$staging_dir/server.js" || ! -d "$staging_dir/.next/static" || ! -d "$staging_dir/public" ]]; then
    printf 'Release archive is missing required Next.js files.\n' >&2
    exit 1
  fi

  mv "$staging_dir" "$release_dir"
  trap - EXIT
else
  if [[ ! -f "$release_dir/server.js" || ! -d "$release_dir/.next/static" || ! -d "$release_dir/public" ]]; then
    printf 'Existing release is incomplete; refusing to replace it.\n' >&2
    exit 1
  fi
fi

switch_release() {
  local target="$1"
  local temporary_link="$base_dir/.current-$$"
  ln -s "$target" "$temporary_link"
  mv -Tf "$temporary_link" "$current_link"
}

rollback() {
  if [[ -n "$previous_release" && -d "$previous_release" ]]; then
    switch_release "$previous_release"
    sudo -n /usr/bin/systemctl restart earthlinkgroup-next.service
  else
    sudo -n /usr/bin/systemctl stop earthlinkgroup-next.service || true
    rm -f -- "$current_link"
  fi
}

switch_release "$release_dir"
if ! sudo -n /usr/bin/systemctl restart earthlinkgroup-next.service; then
  rollback
  printf 'Could not restart the website service; previous release restored.\n' >&2
  exit 1
fi

healthy=false
for _ in {1..20}; do
  if curl --fail --silent --output /dev/null --max-time 3 http://127.0.0.1:3001/; then
    healthy=true
    break
  fi
  sleep 1
done

if [[ "$healthy" != true ]]; then
  rollback
  printf 'Health check failed; previous release restored.\n' >&2
  exit 1
fi

rm -f -- "$archive"
printf 'Deployed release %s successfully.\n' "$release_id"
