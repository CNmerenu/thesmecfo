"use client";

import Header from "@/components/Header";
import "../legal.css";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero-content">
            <span className="label hero-label">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="hero-sub">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-inner">
          <p className="legal-meta">Last updated: February 2026</p>

          <h2>1. Who we are</h2>
          <p>
            The SME CFO Ltd (RC 8307073) is a CFO advisory firm registered in
            Nigeria, serving businesses across Africa and the diaspora from our
            base in Lagos. For the purposes of applicable data protection
            legislation, The SME CFO Ltd is the data controller responsible for
            your personal data.
          </p>
          <p>
            If you have questions about this policy or how we handle your data,
            please contact us at{" "}
            <a
              href="mailto:hello@thesmecfo.co"
              style={{ color: "var(--teal)" }}
            >
              hello@thesmecfo.co
            </a>
            .
          </p>

          <h2>2. Information we collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>
              Name, email address, phone number, and business name when you
              complete our contact form or book a consultation
            </li>
            <li>
              Business and financial information you share during consultations
              or engagements
            </li>
            <li>
              Payment and billing information when you engage our services
            </li>
            <li>
              Communications you send to us, including email correspondence
            </li>
          </ul>
          <p>
            We also collect certain information automatically when you visit our
            website:
          </p>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and approximate location</li>
            <li>Pages viewed and interactions with our website</li>
            <li>Referring website or source</li>
          </ul>

          <h2>3. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Respond to your enquiries and provide the services you have
              requested
            </li>
            <li>
              Manage our client relationships and deliver our advisory services
            </li>
            <li>
              Send you relevant communications about our services, where you
              have consented or where we have a legitimate interest to do so
            </li>
            <li>Improve our website, services, and client experience</li>
            <li>
              Comply with legal and regulatory obligations in the jurisdictions
              where we and our clients operate
            </li>
          </ul>

          <h2>4. Legal basis for processing</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul>
            <li>
              <strong>Contractual necessity:</strong> where processing is
              required to deliver services you have engaged us for
            </li>
            <li>
              <strong>Legitimate interest:</strong> where processing is
              necessary for our business operations, provided your rights do not
              override those interests
            </li>
            <li>
              <strong>Consent:</strong> where you have given explicit consent,
              such as subscribing to our newsletter
            </li>
            <li>
              <strong>Legal obligation:</strong> where we are required to
              process data to comply with applicable law
            </li>
          </ul>

          <h2>5. How we share your information</h2>
          <p>
            We do not sell your personal data. We may share your information
            with:
          </p>
          <ul>
            <li>
              Professional advisors and service providers who assist us in
              delivering our services, subject to appropriate confidentiality
              obligations
            </li>
            <li>Regulatory bodies or law enforcement where required by law</li>
            <li>
              Third-party tools and platforms we use to operate our business
              (such as email, scheduling, and accounting software), each bound
              by their own data protection obligations
            </li>
          </ul>

          <h2>6. Data retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil
            the purposes for which it was collected, including to satisfy legal,
            regulatory, accounting, or reporting requirements. Client engagement
            records are typically retained for a minimum of seven years
            following the end of the engagement, in line with professional
            standards.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Depending on your location and applicable law, you may have the
            right to:
          </p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict certain processing activities</li>
            <li>
              Withdraw consent at any time, where consent is the basis for
              processing
            </li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:hello@thesmecfo.co"
              style={{ color: "var(--teal)" }}
            >
              hello@thesmecfo.co
            </a>
            .
          </p>

          <h2>8. International transfers</h2>
          <p>
            As we serve clients across multiple jurisdictions, your data may be
            transferred internationally. We take appropriate measures to ensure
            your data is protected in accordance with applicable data protection
            laws when transferred between jurisdictions.
          </p>

          <h2>9. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically.
          </p>
        </div>
      </section>
    </>
  );
}
