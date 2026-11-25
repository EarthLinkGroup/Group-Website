import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <div className="page-container contact-page-content">
          <div className="contact-page-copy">
            <h1>Contact Earthlink Group</h1>
            <p>
              For questions, partnerships or information about one of our
              brands, send us a message. We&apos;d be glad to hear from you.
            </p>
            <ContactForm />
            <p className="contact-page-email">
              Prefer email?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
