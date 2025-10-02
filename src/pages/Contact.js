import React, { useState, useEffect } from "react";
import "../App.css";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

// Formspree endpoint provided by user
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldpnnop";

const Contact = () => {
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const navigate = useNavigate();

  useEffect(() => {
    let t;
    if (status === "success") {
      t = setTimeout(() => navigate("/"), 3000);
    }
    return () => clearTimeout(t);
  }, [status, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="contact">
      <h2>Contact</h2>

      <div className="contact-links">
        <a href="mailto:hcover3333@gmail.com">hcover3333@gmail.com</a>
        <span className="separator" aria-hidden="true">  •  </span>
        <a href="https://www.linkedin.com/in/hollyhenske" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      {status === "success" ? (
        <div className="form-status success">
          <h3>Thanks — your message was sent.</h3>
          <p>Redirecting to the homepage…</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a message</h2>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="How can I help?" required />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "error" && <div className="form-status error">Sorry — there was a problem. Please try again later.</div>}
        </form>
      )}

      
    </main>
  );
};

export default Contact;