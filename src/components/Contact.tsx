import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/_contact.scss";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // 1️⃣ Send the contact message to yourself
    emailjs
      .sendForm(
        "default_service", // replace with your EmailJS service ID
        "template_wk56lg2", // replace with your EmailJS template ID
        formRef.current,
        "v5MO9bIVO4sA4c-kW" // replace with your EmailJS public key   
      )
      .then(
        (result) => {
          console.log("Contact message sent:", result.text);
          setStatusMessage("Message sent successfully!");
          formRef.current?.reset();

          // 2️⃣ Send auto-reply to the user
          emailjs
            .send(
              "Portfolio-autoreply",                   // Service ID for auto-reply
              "template_u0fdyhg",   // Template ID for auto-reply
              {
                email: formRef.current?.email.value,  // matches {{email}} in template
              },
              "v5MO9bIVO4sA4c-kW"
            )
            .then(
              () => console.log("Auto-reply sent"),
              (err) => console.error("Auto-reply failed:", err)
            );
        },
        (error) => {
          console.error("Contact message failed:", error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2 className="section-title">Get in touch.</h2>
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
              name="email"            // Must match {{email}} in EmailJS templates
              placeholder="Enter your email address here."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea
              id="message"
              name="message"          // Must match {{message}} in EmailJS templates
              placeholder="Write your message here."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
