"use client";

import Header from "@/components/Header";
import "../legal.css";

export default function TermsPage() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(24px, 8vw, 120px)" }}>
          <div className="page-hero-content">
            <span className="label hero-label">Legal</span>
            <h1>Terms & Conditions</h1>
            <p className="hero-sub">
              Terms governing your use of our website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-inner">
          <p className="legal-meta">Last updated: February 2026</p>

          <h2>1. About these terms</h2>
          <p>
            These terms and conditions govern your use of the website operated
            by The SME CFO Ltd (RC 8307073), a company registered in Nigeria
            serving clients across Africa and internationally. By accessing or
            using our website, you agree to be bound by these terms. If you do
            not agree, please do not use our website.
          </p>

          <h2>2. Our services</h2>
          <p>
            We provide fractional CFO advisory services to SMEs and
            diaspora-owned businesses. The specific terms of any engagement,
            including scope, deliverables, timelines, and investment, are set
            out in a separate engagement letter or proposal agreed between us
            and the client. These website terms do not govern individual client
            engagements.
          </p>

          <h2>3. Website content</h2>
          <p>
            The content on this website is provided for general information
            purposes only. While we make reasonable efforts to ensure the
            information is accurate and current, we do not warrant its
            completeness, reliability, or suitability for any particular
            purpose.
          </p>
          <p>
            Nothing on this website constitutes financial, legal, tax, or
            investment advice. You should consult a qualified professional
            before making any financial decisions based on information found on
            our website.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of The SME CFO Ltd or its
            licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, modify, or create derivative
            works from any content on this website without our prior written
            consent.
          </p>

          <h2>5. Use of the website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of, or restrict or inhibit
            the use and enjoyment of, this website by any third party. You may
            not:
          </p>
          <ul>
            <li>
              Use the website in any way that could damage, disable, or impair
              its functionality
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the website or
              its systems
            </li>
            <li>
              Use automated tools to scrape, harvest, or extract data from the
              website
            </li>
            <li>
              Transmit any material that is unlawful, harmful, or otherwise
              objectionable
            </li>
          </ul>

          <h2>6. Third-party links</h2>
          <p>
            Our website may contain links to third-party websites. These links
            are provided for convenience only and do not imply endorsement. We
            are not responsible for the content, accuracy, or practices of any
            third-party websites.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, The SME CFO Ltd shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of, or inability to use, this
            website. Our total liability in connection with this website shall
            not exceed the amount you have paid to us, if any, for accessing the
            website.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless The SME CFO Ltd, its
            officers, directors, and agents from and against any claims,
            liabilities, damages, losses, and expenses arising from your use of
            this website or violation of these terms.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Any information shared with us through the website contact form or
            during consultations is treated as confidential and handled in
            accordance with our Privacy Policy and, where applicable, the terms
            of our engagement letter.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria. Any disputes arising from these terms shall be subject to
            the exclusive jurisdiction of the courts of Nigeria, without
            prejudice to our right to seek enforcement in any jurisdiction where
            you are located.
          </p>

          <h2>11. Changes to these terms</h2>
          <p>
            We reserve the right to update these terms at any time. Changes will
            be posted on this page with an updated revision date. Your continued
            use of the website following any changes constitutes acceptance of
            the revised terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            If you have questions about these terms, please contact us at{" "}
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
