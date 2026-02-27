import Link from "next/link";
import "../services.css";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero-content">
            <span className="label hero-label">Our Services</span>
            <h1>
              Strategic financial leadership,
              <br />
              tailored to your stage of growth.
            </h1>
            <p className="hero-sub">
              Every engagement includes a dedicated, ACA-qualified fractional
              CFO. Financial strategy built around your business, your market,
              and your stage of growth.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="service-detail" id="financial-health-audit">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(77,184,154,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#4DB89A" }}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Financial Health Audit</h3>
              <p className="service-detail-desc">
                A comprehensive assessment of your business's financial health
                across eight dimensions.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    2-3 hour deep-dive with founder or finance team
                  </li>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    12-month financial statements review
                  </li>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    Cash flow analysis and forward forecast
                  </li>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    Tax compliance and exposure assessment
                  </li>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    Financial Health Score with traffic-light ratings
                  </li>
                  <li
                    style={{ "--dot-color": "#4DB89A" } as React.CSSProperties}
                  >
                    Prioritised 90-day action plan
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>
              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">1-2 weeks</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  Businesses seeking clarity on their financial position before
                  making growth decisions
                </div>
              </div>
            </div>
          </div>
          <div className="service-detail" id="monthly-cfo-retainer">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(200,169,81,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#C8A951" }}>
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h3>Monthly CFO Retainer</h3>
              <p className="service-detail-desc">
                Your fractional CFO becomes a virtual member of your leadership
                team. Strategic financial oversight that turns your numbers into
                decisions you can act on with confidence.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    Monthly financial review meeting (60-90 mins)
                  </li>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    Management accounts preparation or review
                  </li>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    KPI dashboard with traffic-light indicators
                  </li>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    Rolling 13-week cash flow forecast
                  </li>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    Budget vs. actual variance analysis
                  </li>
                  <li
                    style={{ "--dot-color": "#C8A951" } as React.CSSProperties}
                  >
                    Strategic financial advice on demand
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>

              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">3-month minimum commitment</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  Growing businesses that need consistent financial leadership
                  without the cost of a full-time CFO
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail" id="investor-readiness">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(94,207,173,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#5ECFAD" }}>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Investor Readiness Package</h3>
              <p className="service-detail-desc">
                End-to-end financial preparation for a fundraising round. We
                build the model, prepare the data room, analyse unit economics,
                and coach you to present with the confidence investors expect.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    3-5 year financial model (Excel-based, auditable)
                  </li>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    Investor deck financial slides
                  </li>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    Due diligence data room preparation
                  </li>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    Unit economics analysis (CAC, LTV, payback)
                  </li>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    Founder coaching on presenting financials
                  </li>
                  <li
                    style={{ "--dot-color": "#5ECFAD" } as React.CSSProperties}
                  >
                    2 rounds of revisions from investor feedback
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>

              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">4-8 weeks</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  Businesses preparing for a seed, Series A, or growth equity
                  round
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail" id="diaspora-advisory">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(120,160,230,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#78A0E6" }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3>International and Diaspora Advisory</h3>
              <p className="service-detail-desc">
                For diaspora entrepreneurs running businesses in Nigeria from
                the UK, or operating UK-registered companies. Strategic
                financial oversight from a CFO who understands both environments
                and can bridge the gap between where you are and where your
                business operates.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    Monthly financial review (virtual)
                  </li>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    UK or Nigerian financial reporting and compliance readiness
                  </li>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    Remote financial controls and oversight framework
                  </li>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    Investor and stakeholder reporting
                  </li>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    Banking and payment infrastructure guidance
                  </li>
                  <li
                    style={{ "--dot-color": "#78A0E6" } as React.CSSProperties}
                  >
                    Quarterly strategic review
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>

              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">3-month minimum commitment</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  UK-based founders with Nigerian operations, or businesses
                  expanding internationally
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail" id="finance-infrastructure">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(200,169,81,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#D4B96A" }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>Finance Infrastructure Setup</h3>
              <p className="service-detail-desc">
                Many growing businesses lack the basic financial architecture
                required to make sound decisions, attract capital, or pass due
                diligence. We build it from the ground up.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Chart of accounts design and implementation
                  </li>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Accounting policies and procedures manual
                  </li>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Financial reporting framework and templates
                  </li>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Internal controls and approval workflows
                  </li>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Bookkeeping systems setup and staff training
                  </li>
                  <li
                    style={{ "--dot-color": "#D4B96A" } as React.CSSProperties}
                  >
                    Month-end close process design
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>

              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">4-8 weeks</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  Businesses with no formal financial infrastructure or those
                  outgrowing informal systems
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail" id="annual-statements">
            <div className="service-detail-content">
              <div
                className="service-detail-icon"
                style={{ background: "rgba(160,130,200,0.12)" }}
              >
                <svg viewBox="0 0 24 24" style={{ stroke: "#A082C8" }}>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Annual Financial Statements and Reporting</h3>
              <p className="service-detail-desc">
                Preparation of complete annual financial statements delivered to
                the standard expected by investors, regulators, and
                institutional partners.
              </p>
              <div className="service-detail-includes">
                <h4>What's included</h4>
                <ul>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Statement of financial position (balance sheet)
                  </li>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Statement of profit or loss and other comprehensive income
                  </li>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Statement of cash flows
                  </li>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Statement of changes in equity
                  </li>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Notes to the financial statements
                  </li>
                  <li
                    style={{ "--dot-color": "#A082C8" } as React.CSSProperties}
                  >
                    Director's report preparation
                  </li>
                </ul>
              </div>
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Book a Consultation →
              </Link>
            </div>
            <div className="service-detail-sidebar">
              <h4>At a glance</h4>

              <div className="sidebar-item">
                <div className="sidebar-label">Timeline</div>
                <div className="sidebar-value">
                  4-8 weeks from receipt of complete records
                </div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-label">Ideal for</div>
                <div className="sidebar-value">
                  Businesses requiring IFRS-compliant or FRS 102/105 financial
                  statements
                </div>
              </div>
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
          <Link
            href="https://tidycal.com/thesmecfo/discovery-call"
            className="btn-primary"
          >
            Book a Consultation &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
