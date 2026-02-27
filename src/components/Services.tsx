const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="services-header">
          <span
            className="label section-label"
            style={{ color: "var(--gold)" }}
          >
            Our Services
          </span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Strategic financial leadership, tailored to your stage of growth.
          </h2>
          <div className="gold-rule"></div>
          <p>
            Every engagement is led by a dedicated, ACA-qualified fractional
            CFO. Bespoke financial strategy, rigorous analytical frameworks, and
            the institutional discipline your business deserves.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="service-name">Financial Health Audit</div>
            <div className="service-desc">
              A comprehensive assessment of your business's financial health
              across eight dimensions. You receive a detailed report showing
              what's working, what's broken, and what to fix first.
            </div>
            <ul className="service-includes">
              <li>2-3 hour deep-dive with founder or finance team</li>
              <li>12-month financial statements review</li>
              <li>Cash flow analysis and forward forecast</li>
              <li>Financial Health Score with traffic-light ratings</li>
              <li>Prioritised 90-day action plan</li>
            </ul>
            {/* <a
              href="services.html#financial-health-audit"
              className="service-link"
            >
              Learn more &rarr;
            </a> */}
          </div>

          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
            </div>
            <div className="service-name">Monthly CFO Retainer</div>
            <div className="service-desc">
              Your fractional CFO becomes a virtual member of your leadership
              team. Strategic financial oversight that turns your numbers into
              decisions you can act on with confidence.
            </div>
            <ul className="service-includes">
              <li>Monthly financial review meeting</li>
              <li>Management accounts preparation or review</li>
              <li>KPI dashboard with traffic-light indicators</li>
              <li>Rolling 13-week cash flow forecast</li>
              <li>Budget vs. actual variance analysis</li>
              <li>Strategic financial advice on demand</li>
            </ul>
            {/* <a
              href="services.html#monthly-cfo-retainer"
              className="service-link"
            >
              Learn more &rarr;
            </a> */}
          </div>

          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="service-name">Investor Readiness Package</div>
            <div className="service-desc">
              End-to-end financial preparation for a fundraising round. We build
              the model, prepare the data room, analyse unit economics, and
              coach you to present with the confidence investors expect.
            </div>
            <ul className="service-includes">
              <li>3-5 year financial model (Excel-based, auditable)</li>
              <li>Investor deck financial slides</li>
              <li>Due diligence data room preparation</li>
              <li>Unit economics analysis (CAC, LTV, payback)</li>
              <li>Founder coaching on presenting financials</li>
              <li>2 rounds of revisions from investor feedback</li>
            </ul>
            {/* <a href="services.html#investor-readiness" className="service-link">
              Learn more &rarr;
            </a> */}
          </div>

          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <div className="service-name">
              International and Diaspora Advisory
            </div>
            <div className="service-desc">
              For diaspora entrepreneurs running businesses in Nigeria from the
              UK, or operating UK-registered companies. Strategic financial
              oversight from a CFO who understands both environments and can
              bridge the gap between where you are and where your business
              operates.
            </div>
            <ul className="service-includes">
              <li>Monthly financial review (virtual)</li>
              <li>
                UK or Nigerian financial reporting and compliance readiness
              </li>
              <li>Remote financial controls and oversight framework</li>
              <li>Investor and stakeholder reporting</li>
              <li>Banking and payment infrastructure guidance</li>
              <li>Quarterly strategic review</li>
            </ul>
            {/* <a href="services.html#diaspora-advisory" className="service-link">
              Learn more &rarr;
            </a> */}
          </div>

          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="service-name">Finance Infrastructure Setup</div>
            <div className="service-desc">
              Many growing businesses lack the basic financial architecture
              required to make sound decisions, attract capital, or pass due
              diligence. We build it from the ground up: chart of accounts,
              accounting policies, reporting frameworks, and internal controls
              that give your business a credible financial foundation.
            </div>
            <ul className="service-includes">
              <li>Chart of accounts design and implementation</li>
              <li>Accounting policies and procedures manual</li>
              <li>Financial reporting framework and templates</li>
              <li>Internal controls and approval workflows</li>
              <li>Bookkeeping systems setup and staff training</li>
              <li>Month-end close process design</li>
            </ul>
            {/* <a
              href="services.html#finance-infrastructure"
              className="service-link"
            >
              Learn more &rarr;
            </a> */}
          </div>

          <div className="service-card">
            <div className="service-number">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="service-name">
              Annual Financial Statements and Reporting
            </div>
            <div className="service-desc">
              Preparation of complete annual financial statements: statement of
              financial position, statement of profit or loss, statement of cash
              flows, and full notes to the accounts. Delivered to the standard
              expected by investors, regulators, and institutional partners.
            </div>
            <ul className="service-includes">
              <li>Statement of financial position (balance sheet)</li>
              <li>
                Statement of profit or loss and other comprehensive income
              </li>
              <li>Statement of cash flows</li>
              <li>Statement of changes in equity</li>
              <li>Notes to the financial statements</li>
              <li>Director's report preparation</li>
            </ul>
            {/* <a href="services.html#annual-statements" className="service-link">
              Learn more &rarr;
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
