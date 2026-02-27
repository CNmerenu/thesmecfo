"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="section newsletter-section">
      <div className="max-w-7xl mx-auto">
        <div className="newsletter-inner">
          <div className="newsletter-content">
            <span className="label" style={{ color: "var(--gold)" }}>
              The CFO Briefing
            </span>
            <h2
              className="section-title"
              style={{ color: "#fff", textAlign: "left" }}
            >
              Original research, financial frameworks, and market intelligence
              for African founders. Monthly.
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.45)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginTop: "16px",
              }}
            >
              Join founders, investors, and ecosystem leaders who rely on The
              CFO Briefing to stay ahead of what matters in African SME finance.
            </p>
          </div>
          <div className="newsletter-form">
            <div className="email-input-group">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn-subscribe" onClick={handleSubmit}>
                Subscribe →
              </button>
            </div>
            <p className="newsletter-fine">
              Delivered monthly. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
