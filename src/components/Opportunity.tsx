"use client";

const Opportunity = () => {
  return (
    <section className="section opportunity-section" id="opportunity">
      <div className="max-w-7xl mx-auto">
        <div className="opportunity-content">
          <span className="label section-label">The Challenge</span>
          <h2 className="section-title">
            Africa's most promising businesses are making critical financial
            decisions without strategic oversight.
          </h2>
          <div className="gold-rule"></div>
          <p className="body-text">
            Every day, founders who have built exceptional products are held
            back by financial blind spots. Cash flow crises that could have been
            predicted. Investor meetings lost to poor financial storytelling.
            Growth decisions made on intuition instead of data.
          </p>
          <p className="body-text">
            We exist to change that. We bring institutional-grade financial
            leadership to the businesses that are building Africa's future: the
            strategic clarity, the rigour, and the foresight that transforms
            growing companies into investable enterprises.
          </p>
        </div>

        <div className="infographic-grid">
          <div className="infographic-card">
            <div className="info-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="42" />
                <circle
                  className="ring-fill"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--teal)"
                  strokeDasharray="264"
                  strokeDashoffset="53"
                />
              </svg>
              <div className="ring-value">80%</div>
            </div>
            <h4>Cash Flow Blind Spots</h4>
            <p>
              of SME failures are linked to poor cash flow management, not poor
              products
            </p>
            <div className="info-source">CB Insights</div>
          </div>
          <div className="infographic-card">
            <div className="info-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="42" />
                <circle
                  className="ring-fill"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--gold)"
                  strokeDasharray="264"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="ring-value">$4.5B</div>
            </div>
            <h4>African VC Funding</h4>
            <p>
              invested in African startups, yet most founders aren't financially
              ready for due diligence
            </p>
            <div className="info-source">Africa: The Big Deal, 2024</div>
          </div>
          <div className="infographic-card">
            <div className="info-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="42" />
                <circle
                  className="ring-fill"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--teal)"
                  strokeDasharray="264"
                  strokeDashoffset="132"
                />
              </svg>
              <div className="ring-value">50%</div>
            </div>
            <h4>Fail Within 5 Years</h4>
            <p>
              of African SMEs don't survive their first five years. Financial
              mismanagement is a leading cause.
            </p>
            <div className="info-source">AfDB, SMEDAN</div>
          </div>
          <div className="infographic-card">
            <div className="info-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="42" />
                <circle
                  className="ring-fill"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--gold)"
                  strokeDasharray="264"
                  strokeDashoffset="26"
                />
              </svg>
              <div className="ring-value">90%</div>
            </div>
            <h4>No Financial Strategy</h4>
            <p>
              of African SMEs operate without any form of strategic financial
              planning or CFO-level oversight
            </p>
            <div className="info-source">SMEDAN, 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
