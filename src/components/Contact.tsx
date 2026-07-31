import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

// EmailJS IDs. These are dashboard IDs, not display names — service IDs look
// like "service_xxxxxxx" (or "default_service" for the first one you create).
const SERVICE_ID = "default_service";
const TEMPLATE_CONTACT = "template_wk56lg2";
const TEMPLATE_AUTOREPLY = "template_u0fdyhg";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form || sending) return;

    // Without the key every send fails with an opaque error. This is the usual
    // cause on a deployed build, where .env.local isn't present.
    if (!PUBLIC_KEY) {
      console.error(
        "REACT_APP_EMAILJS_PUBLIC_KEY is not set — add it to .env.local for " +
          "local dev, and to the build environment of whatever hosts the site."
      );
      setStatusMessage("Message couldn’t be sent — email isn’t configured.");
      return;
    }

    // Read the address *before* resetting the form, otherwise the auto-reply
    // below is sent to an empty recipient.
    const emailField = form.elements.namedItem("email") as HTMLInputElement | null;
    const senderEmail = emailField?.value ?? "";

    setSending(true);
    setStatusMessage("");

    try {
      // 1️⃣ Send the contact message to Sasmi
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_CONTACT, form, PUBLIC_KEY);
      setStatusMessage("Message sent successfully!");
      form.reset();
    } catch (error: any) {
      console.error(
        "Contact message failed:",
        error?.text || error?.message || error
      );
      setStatusMessage("Failed to send message. Please try again.");
      setSending(false);
      return;
    }

    setSending(false);

    // 2️⃣ Auto-reply to the sender. Best-effort: the message above already
    // went through, so a failure here shouldn't be shown to the visitor.
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTOREPLY,
        { email: senderEmail }, // matches {{email}} in the template
        PUBLIC_KEY
      );
    } catch (error: any) {
      console.error("Auto-reply failed:", error?.text || error?.message || error);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-info">
          <h2 className="contact-title">Get in touch.</h2>
          <p className="contact-text">
            If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat – you can find me on social media or you can send me a message here!
          </p>
        </div>

        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address here."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (required)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </button>

            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
