import React from "react";
import "../styles/_contact.scss";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2 className="section-title">Get in touch.</h2>
        <p className="contact-text">
          If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat – you can find me on social media or you can send me a message here!
        </p>
      </div>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input type="email" id="email" placeholder="Enter Your mail address here." required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea id="message" placeholder="Write your message here." required></textarea>
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>       
      </div>
    </section>
  );
};

export default Contact;
