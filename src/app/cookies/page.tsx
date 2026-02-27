"use client";

import "../legal.css";

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero-content">
            <span className="label hero-label">Legal</span>
            <h1>Cookie Policy</h1>
            <p className="hero-sub">
              How we use cookies and similar technologies on our website.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-inner">
          <p className="legal-meta">Last updated: February 2026</p>

          <h2>1. What are cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They are widely used to make websites function efficiently,
            improve user experience, and provide information to website
            operators.
          </p>

          <h2>2. How we use cookies</h2>
          <p>We use the following types of cookies on our website:</p>

          <h3>Strictly necessary cookies</h3>
          <p>
            These cookies are essential for the website to function properly.
            They enable basic features such as page navigation and access to
            secure areas. The website cannot function properly without these
            cookies, and they cannot be switched off.
          </p>

          <h3>Analytics cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our
            website by collecting information about pages visited, time spent on
            the site, and any errors encountered. This data is aggregated and
            anonymous, and is used solely to improve how our website works.
          </p>

          <h3>Functional cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalisation,
            such as remembering your preferences or the region you are in. If
            you do not allow these cookies, some or all of these features may
            not function properly.
          </p>

          <h2>3. Third-party cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our
            pages. We do not control these cookies. Third-party cookies on our
            website may include those set by analytics providers and social
            media platforms. Each third party operates under its own cookie and
            privacy policies.
          </p>

          <h2>4. Managing cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            Most browsers allow you to:
          </p>
          <ul>
            <li>
              View what cookies are stored on your device and delete them
              individually or in bulk
            </li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may affect the
            functionality of our website and your experience when using it.
          </p>

          <h2>5. Changes to this policy</h2>
          <p>
            We may update this cookie policy from time to time to reflect
            changes in technology, legislation, or our business practices. Any
            changes will be posted on this page with an updated revision date.
          </p>

          <h2>6. Contact</h2>
          <p>
            If you have questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:hello@thesmecfo.co"
              style={{ color: "var(--teal)" }}
            >
              hello@thesmecfo.co
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
