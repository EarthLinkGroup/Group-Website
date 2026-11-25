# Earthlink Group Website

The public website for Earthlink Group, a business group connecting opportunities across education, sales development and business growth. Built with Next.js, React and TypeScript.

## Features

- Responsive homepage with group information, vision, brands and contact sections.
- Brand logo links open individual Earthlink brand pages.
- Brand pages show a description and link to the brand's external website.
- SEO and social sharing metadata, including an Open Graph image.
- Self-hosted font loading through Next.js font optimization.

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- Lucide React icons

## Requirements

- Node.js 20.9 or later
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are currently required. In the VS Code integrated terminal on Windows, this workspace defaults to Command Prompt so `npm` commands work when PowerShell's script execution policy blocks `npm.ps1`.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run typecheck` | Run the TypeScript compiler without emitting files. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. Run `npm run build` first. |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Earthlink Group homepage. |
| `/contact` | Contact form for sending an enquiry by email. |
| `/brands/earthlink-study` | Earthlink Study overview and website link. |
| `/brands/asosales` | ASOSales overview and website link. |
| `/brands/earthlink-ventures` | Earthlink Ventures overview and website link. |

Brand detail routes are generated from the company entries in `lib/constants.ts`.
The contact form opens the visitor's email application with the form details prefilled; it does not send messages to a server.

## Project Structure

```text
app/
  brands/[slug]/page.tsx  Dynamic brand detail page
  globals.css             Global styles and responsive layouts
  layout.tsx              Root layout, fonts and SEO metadata
  page.tsx                Homepage sections
components/
  Footer.tsx              Site footer
  Navbar.tsx              Responsive site navigation
lib/
  constants.ts            Site settings, navigation and brand information
public/                   Logos, photos and other static assets
```

## Updating Brand Information

1. Edit the matching entry in `lib/constants.ts`. Each brand has a unique `slug`, `name`, external `url`, `description`, `logoImage` and `logoBackground`.
2. Place or update its logo in `public/` and set `logoImage` to the corresponding public path, such as `/logo-study.png`.
3. Keep `logoBackground` set to a supported value (`transparent` or `asosales`). The brand detail route is generated for entries that have both a logo and a background.
4. Start the development server and check the homepage brand section and the resulting `/brands/<slug>` page.

External brand links open in a new tab.

## Site Settings and Metadata

- Update the canonical site URL and contact email in `lib/constants.ts`.
- Update page titles, descriptions and Open Graph/Twitter metadata in `app/layout.tsx`.
- Update global colors, typography, section layouts and responsive behavior in `app/globals.css`.
- Static images and logos are stored in `public/`.

## Production

Create and serve a production build:

```bash
npm run build
npm run start
```

The site can be deployed to a platform that supports Next.js. Configure the deployment's build and start commands to match the scripts above.

## VPS Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`. It builds a standalone Next.js release, transfers it over pinned SSH, and restarts the dedicated `earthlinkgroup-next` service. Releases are kept separately so a failed health check restores the previous release.

The workflow requires these GitHub Actions repository secrets:

| Secret | Purpose |
| --- | --- |
| `VPS_HOST` | VPS hostname or IP address. |
| `VPS_USER` | Restricted deployment account on the VPS. |
| `VPS_SSH_PRIVATE_KEY` | Private key for that deployment account. |
| `VPS_KNOWN_HOSTS` | Pinned SSH host key for the VPS. |

Nginx remains the public reverse proxy. Its existing `/api/` and `/media/` routes must be preserved when configuring the site host.
