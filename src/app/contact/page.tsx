"use client";
import { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero-content">
            <span className="label hero-label">Get in Touch</span>
            <h1>Every great partnership starts with a conversation.</h1>
            <p className="hero-sub">
              Tell us about your business. We will listen, ask the right
              questions, and help you understand exactly where you stand
              financially and what comes next.
            </p>
          </div>
        </div>
      </section>

      <section className="section expect-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="expect-inner">
            <span className="label section-label">How it works</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              From first conversation to financial clarity.
            </h2>
            <div className="gold-rule gold-rule-left"></div>
            <p className="body-text" style={{ maxWidth: "600px" }}>
              Whether you are a founder preparing to raise capital, a diaspora
              entrepreneur expanding into Africa, or a growing business that has
              outgrown its current financial setup, here is what happens when
              you reach out.
            </p>

            <div className="expect-grid space-x-5">
              <div className="expect-step">
                <div className="expect-step-number">01</div>
                <h4>You reach out</h4>
                <p>
                  Fill in the form below or book a call directly. Tell us a
                  little about your business, where you are, and what you are
                  trying to achieve. No preparation needed.
                </p>
                <div className="step-detail">Takes 2 minutes</div>
              </div>
              <div className="expect-step">
                <div className="expect-step-number">02</div>
                <h4>We have a conversation</h4>
                <p>
                  A 30-minute discovery call where we listen, ask targeted
                  questions about your financial position, and identify the most
                  pressing areas of focus for your business.
                </p>
                <div className="step-detail">30-minute call</div>
              </div>
              <div className="expect-step">
                <div className="expect-step-number">03</div>
                <h4>You get a clear plan</h4>
                <p>
                  We follow up with a clear recommendation: the right service
                  for your stage, a defined scope of work, and a tailored
                  investment proposal.
                </p>
                <div className="step-detail">Proposal within 48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="contact-grid">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <h3 className="form-heading">Send us a message</h3>
              <p className="form-intro">
                Tell us about your business and what you need. The more detail
                you share, the more useful our first conversation will be.
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 or +44"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Business Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your business name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Where is your business based?</label>
                  <select name="location" onChange={handleInputChange}>
                    <option value="">Select a region</option>
                    <option>Nigeria</option>
                    <option>United Kingdom</option>
                    <option>Other African country</option>
                    <option>Other (international)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Annual Revenue (approximate)</label>
                  <select name="revenue" onChange={handleInputChange}>
                    <option value="">Select a range</option>
                    <option>Pre-revenue / Early stage</option>
                    <option>Under ₦50M / Under £50K</option>
                    <option>₦50M - ₦200M / £50K - £200K</option>
                    <option>₦200M - ₦1B / £200K - £1M</option>
                    <option>₦1B+ / £1M+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>What can we help with?</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <optgroup label="Advisory Services">
                    <option>Financial Health Audit</option>
                    <option>Monthly CFO Retainer</option>
                    <option>Cash Flow Rescue</option>
                    <option>Finance Infrastructure Setup</option>
                  </optgroup>
                  <optgroup label="Premium Services">
                    <option>Investor Readiness Package</option>
                    <option>CFO-as-a-Service (Embedded)</option>
                  </optgroup>
                  <optgroup label="International / Diaspora">
                    <option>UK Company Accounting</option>
                    <option>Diaspora Business Advisory</option>
                    <option>Annual Financial Statements</option>
                  </optgroup>
                  <option>Not sure yet / General enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tell us about your business</label>
                <textarea
                  name="message"
                  placeholder="What does your business do? What stage are you at? What financial challenges are you facing right now?"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="form-submit" disabled={true}>
                Send Message →
              </button>
            </form>

            <div>
              <div className="contact-info-card">
                <h3>Contact details</h3>
                <div className="contact-info-item">
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href="mailto:hello@thesmecfo.co">hello@thesmecfo.co</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-label">Hours</div>
                  <div className="contact-info-value">
                    Monday to Friday
                    <br />
                    9:00 AM to 5:00 PM (GMT / WAT)
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-label">Office</div>
                  <div className="contact-info-value">Lagos, Nigeria</div>
                </div>
              </div>

              <div className="book-card">
                <h4>Prefer to book directly?</h4>
                <p>
                  Schedule a complimentary 30-minute discovery call at a time
                  that works for you.
                </p>
                <a
                  href="https://tidycal.com/thesmecfo/discovery-call"
                  target="_blank"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Book a Consultation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="faq-inner">
            <span className="label section-label">Working with us</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              What you should know.
            </h2>
            <div className="gold-rule gold-rule-left"></div>

            <details className="faq-item">
              <summary>Is the discovery call really free?</summary>
              <p className="faq-answer">
                Yes. The 30-minute discovery call is complimentary and comes
                with no obligations. It is designed for us to understand your
                business and for you to understand how we work. If there is a
                fit, we will recommend the right service and send you a clear
                proposal.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                I am not sure which service I need. Can you help me decide?
              </summary>
              <p className="faq-answer">
                Absolutely. Most of our clients start with a discovery call
                where we assess your situation and recommend the best starting
                point. For many businesses, the Financial Health Audit is the
                ideal entry point because it gives us (and you) a clear picture
                of where things stand before committing to ongoing work.
              </p>
            </details>

            <details className="faq-item">
              <summary>Do you work with businesses outside Nigeria?</summary>
              <p className="faq-answer">
                Yes. We serve businesses across Africa and diaspora
                entrepreneurs based in the UK, Europe, and North America who are
                building or investing in African businesses. We are experienced
                in both Nigerian and UK regulatory environments, and we work
                remotely as standard.
              </p>
            </details>

            <details className="faq-item">
              <summary>How quickly can we get started?</summary>
              <p className="faq-answer">
                For most engagements, we can begin within one to two weeks of
                signing the engagement letter. For urgent matters such as a Cash
                Flow Rescue or time-sensitive investor preparation, we can often
                move faster. Let us know your timeline during the discovery
                call.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                What makes The SME CFO different from a regular accountant?
              </summary>
              <p className="faq-answer">
                We are not an accounting firm. We are a CFO advisory practice.
                That means we focus on strategic financial leadership: helping
                you make better decisions with your numbers, not just recording
                them. Our founder is ACA-qualified with institutional finance
                experience across treasury, financial control, and corporate
                banking, and we bring that calibre of thinking to every
                engagement.
              </p>
            </details>

            <details className="faq-item">
              <summary>How is the engagement priced?</summary>
              <p className="faq-answer">
                Every business is different, and our engagements are scoped to
                reflect the complexity and requirements of each client. During
                the discovery call, we take the time to understand your
                business, the work involved, and the outcomes you need. From
                there, we provide a detailed proposal with a clear investment
                figure tailored to your specific situation.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="cta-banner-inner">
            <span
              className="label"
              style={{
                color: "var(--gold)",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Ready?
            </span>
            <h2>
              Walk away from your first call with clarity on where your business
              stands and a roadmap for what comes next.
            </h2>
            <p>
              The right financial partner changes everything. Let&apos;s start
              with a conversation.
            </p>
            <a
              href="https://tidycal.com/thesmecfo/discovery-call"
              target="_blank"
              className="btn-primary"
              style={{ fontSize: "0.95rem", padding: "16px 36px" }}
            >
              Book a Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
