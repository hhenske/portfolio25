import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldpnnop";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // null | "sending" | "success" | "error"
  const statusRef = useRef(null);
  const redirectTimerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitStatus === "success" && statusRef.current) {
      statusRef.current.focus();
      redirectTimerRef.current = setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, [submitStatus, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }
  };

  return (
    <main className="contact" id="main-content">
      <h2 tabIndex={-1}>Contact</h2>

      {submitStatus === "success" ? (
        <div
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={statusRef}
          className="contact-success"
        >
          Thank you — your message was sent. You will be redirected shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-describedby="form-help">
          <div id="form-help" className="sr-only">
            All fields are required.
          </div>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" required aria-required="true" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required aria-required="true" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required aria-required="true"></textarea>

          <button type="submit" aria-label="Send message" disabled={submitStatus === "sending"}>
            {submitStatus === "sending" ? "Sending…" : "Send"}
          </button>

          <div role="status" aria-live="polite" className="sr-only" id="submit-status">
            {submitStatus === "sending" ? "Sending…" : submitStatus === "error" ? "Error sending form" : ""}
          </div>
        </form>
      )}
    </main>
  );
};

export default Contact;
