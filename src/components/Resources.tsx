const Resources = () => {
  return (
    <section className="section resources-section" id="resources">
      <div className="max-w-7xl mx-auto">
        <span className="label section-label">Resources</span>
        <h2 className="section-title" style={{ textAlign: "left" }}>
          Tools and insights for founders
          <br />
          who want to know their numbers.
        </h2>
        <div className="gold-rule gold-rule-left"></div>

        <div className="resources-grid">
          <div className="resource-featured">
            <span className="label">Featured download</span>
            <h3>SME Financial Health Checklist</h3>
            <p>
              Score your business across eight financial health dimensions in
              under 15 minutes. Interactive PDF with auto-scoring, traffic-light
              ratings, and personalised next steps.
            </p>
            <a href="#" className="btn-primary">
              Download the Checklist →
            </a>
            <div className="fine-print">Complimentary · Instant download</div>
          </div>

          <div className="resource-list">
            <div className="resource-item">
              <div className="resource-type">Template Pack</div>
              <h4>The SME Money Map</h4>
              <p>
                Five ready-to-use Excel templates: cash flow tracker, P&L,
                invoice, budget planner, and expense categorisation tool.
              </p>
            </div>
            <div className="resource-item">
              <div className="resource-type">Self-paced Course</div>
              <h4>"Know Your Numbers" Mini-Course</h4>
              <p>
                Learn to read a P&L, understand cash flow vs. profit, separate
                business and personal finances, and prepare for tax season
                without panic.
              </p>
            </div>
            <div className="resource-item">
              <div className="resource-type">Monthly Newsletter</div>
              <h4>The CFO Briefing</h4>
              <p>
                Original data, actionable frameworks, and the financial
                intelligence that matters to African founders. Monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
