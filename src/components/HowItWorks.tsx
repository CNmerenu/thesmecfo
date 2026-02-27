const HowItWorks = () => {
  return (
    <section className="section how-section">
      <div className="max-w-7xl mx-auto">
        <span className="label section-label">How It Works</span>
        <h2 className="section-title">
          Three steps to your financial clarity.
        </h2>
        <div className="gold-rule gold-rule-left"></div>
        <div className="how-steps space-x-2">
          <div className="how-step">
            <div className="how-step-number">01</div>
            <h4>Free Discovery Call</h4>
            <p>
              A 15-minute consultation to understand your business, identify
              your most pressing financial challenges, and outline the scope of
              a potential engagement.
            </p>
            <div className="step-detail">
              15 minutes · Virtual · Complimentary
            </div>
          </div>
          <div className="how-step">
            <div className="how-step-number">02</div>
            <h4>Financial Health Audit</h4>
            <p>
              We assess your financial position across eight dimensions and
              deliver a comprehensive report with traffic-light scoring and a
              prioritised 90-day action plan.
            </p>
            <div className="step-detail">1-2 weeks</div>
          </div>
          <div className="how-step">
            <div className="how-step-number">03</div>
            <h4>Ongoing CFO Support</h4>
            <p>
              Monthly strategic oversight: dashboards, cash flow forecasts,
              variance analysis, and a CFO in your corner for every financial
              decision that matters.
            </p>
            <div className="step-detail">Monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
