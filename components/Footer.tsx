import { Linkedin } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-panel">
        <h2 className="footer-title">Stay in Touch</h2>
        <p className="footer-description">
          If you have any questions, you can contact us anytime.{" "}
          <a className="footer-email-link" href={`mailto:${CONTACT_EMAIL}`}>
            We&apos;re one email away.
          </a>
        </p>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Earthlink Group. All rights reserved.
          </p>
          <a
            className="footer-social-link"
            href="https://www.linkedin.com/company/earthlink-group/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Earthlink Group on LinkedIn"
          >
            <Linkedin size={21} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
