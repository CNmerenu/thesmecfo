"use client";
import React from "react";
import "./about.css";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero-content">
            <span className="label hero-label">About Us</span>
            <h1>
              The financial leadership layer Africa&apos;s SMEs have been
              missing.
            </h1>
            <p className="hero-sub">
              We are building the financial infrastructure that Africa&apos;s
              next generation of scaled businesses will be built on.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="label section-label">What Drives Us</span>
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: "56px" }}
          >
            Vision. Mission. Purpose.
          </h2>
          <div
            className="gold-rule gold-rule-left"
            style={{ marginBottom: "56px" }}
          ></div>

          <div
            className="vmp-grid"
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "0",
                padding: "44px 0",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: "600",
                  }}
                >
                  Our Vision
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: "var(--navy)",
                    lineHeight: "1.4",
                    marginBottom: "14px",
                  }}
                >
                  Building the financial infrastructure that unlocks capital for
                  Africa.
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#555", maxWidth: "600px" }}
                >
                  To build the financial infrastructure that unlocks capital for
                  African enterprises and accelerates the continent&apos;s
                  emergence as a defining force in the global economy.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "0",
                padding: "44px 0",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: "600",
                  }}
                >
                  Our Mission
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: "var(--navy)",
                    lineHeight: "1.4",
                    marginBottom: "14px",
                  }}
                >
                  Closing Africa&apos;s SME funding gap.
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#555", maxWidth: "600px" }}
                >
                  We close Africa&apos;s SME funding gap by equipping
                  enterprises with institutional-grade financial systems,
                  governance, and strategic clarity, transforming high-potential
                  businesses into investment-ready enterprises that attract
                  capital, scale sustainably, and contribute to the
                  continent&apos;s long-term economic transformation.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "0",
                padding: "44px 0",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: "600",
                  }}
                >
                  Our Purpose
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: "var(--navy)",
                    lineHeight: "1.4",
                    marginBottom: "14px",
                  }}
                >
                  Infrastructure problems have solutions.
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#555", maxWidth: "600px" }}
                >
                  We exist because the gap between African business potential
                  and global capital is not a talent problem. It is a financial
                  infrastructure problem. And infrastructure problems have
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="label section-label">Our Values</span>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            What we believe. How we work.
          </h2>
          <div className="gold-rule gold-rule-left"></div>
          <div className="values-grid" style={{ marginTop: "40px" }}>
            <div className="value-item">
              <h4>African-centric.</h4>
              <p>
                We centre the African business experience in everything we do.
                Our frameworks, our references, and our understanding of the
                market are rooted in the realities of building on the continent
                and across the diaspora.
              </p>
            </div>
            <div className="value-item">
              <h4>Partnership.</h4>
              <p>
                We work alongside founders and leadership teams as strategic
                partners. We are invested in outcomes, not transactions. Your
                growth is our measure of success.
              </p>
            </div>
            <div className="value-item">
              <h4>Excellence.</h4>
              <p>
                Every deliverable, every recommendation, every financial model
                is built to institutional standards and designed to withstand
                the scrutiny of investors, regulators, and boards. We do not
                compromise on quality.
              </p>
            </div>
            <div className="value-item">
              <h4>Forward-thinking.</h4>
              <p>
                We build financial strategy for where your business is going,
                not where it has been. Every engagement is oriented toward
                sustainable scaling, investor readiness, and laying the
                foundation for Africa&apos;s next unicorns.
              </p>
            </div>
            <div className="value-item">
              <h4>Integrity.</h4>
              <p>
                We are evidence-based, transparent, and honest. We tell you what
                the numbers say, not what you want to hear. Our advice is
                grounded in data and built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="about-grid">
            <div className="about-photo" style={{ background: "none" }}>
              <Image
                src="/assets/images/cfo-headshot.png"
                alt="Founder"
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="photo-name">Olubunmi Nmerenu, ACA</div>
            </div>
            <div className="about-content">
              <span className="label section-label">Founder</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Meet the Founder
              </h2>
              <div className="gold-rule gold-rule-left"></div>
              <p className="body-text">
                Olubunmi is a Chartered Accountant and corporate finance
                strategist with nearly a decade of experience at one of the
                world&apos;s leading financial institutions, advising on
                treasury strategy, structuring and executing complex, high-value
                transactions, and managing strategic priorities across global
                markets.
              </p>
              <p className="body-text">
                Over the course of her career, she has executed
                multi-billion-pound transactions, including a GBP 2.3 billion
                acquisition and a GBP 750 million share buyback programme.
              </p>
              <p className="body-text">
                She founded The SME CFO to bring institutional-grade financial
                leadership to the businesses that are building Africa&apos;s
                future, because the continent&apos;s most promising enterprises
                deserve the same calibre of financial thinking that powers the
                world&apos;s largest corporations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="label section-label">Credentials</span>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            Grounded in institutional excellence.
          </h2>
          <div className="gold-rule gold-rule-left"></div>
          <div className="credential-grid">
            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" stroke="var(--teal)">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h4>ACA Qualified</h4>
              <p>
                Institute of Chartered Accountants in England and Wales (ICAEW)
              </p>
            </div>
            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" stroke="var(--gold)">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a4 4 0 00-8 0v2" />
                  <circle cx="12" cy="14" r="2" />
                </svg>
              </div>
              <h4>Global Investment Banking</h4>
              <p>
                Nearly a decade in treasury, structuring, and corporate finance
                at a global institution
              </p>
            </div>
            <div className="credential-card">
              <div className="credential-icon">
                <svg viewBox="0 0 24 24" stroke="#78A0E6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h4>HBR Advisory Council</h4>
              <p>Member, Harvard Business Review Advisory Council</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-inner">
          <span
            className="label"
            style={{
              color: "var(--teal)",
              display: "block",
              marginBottom: "20px",
            }}
          >
            Get Started
          </span>
          <h2>Clarity. Structure. Strategic direction.</h2>
          <p>
            Every engagement begins with a complimentary 15-minute discovery
            call. Tell us where your business is today, and we will tell you
            honestly whether we can help.
          </p>
          <a href="/contact" className="btn-primary">
            Book a Consultation →
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
