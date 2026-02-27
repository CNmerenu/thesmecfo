import Image from "next/image";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="about-hero-block">
          <div className="about-hero-left">
            <span className="label" style={{ color: "var(--teal)" }}>
              About Us
            </span>
            <h2
              className="section-title"
              style={{
                textAlign: "left",
                color: "var(--navy)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              The SME CFO.
              <br />
              Laying the foundation for Africa's next unicorns.
            </h2>
          </div>
          <div className="about-hero-right">
            <p className="body-text">
              The SME CFO is a CFO advisory firm built on a single conviction:
              that African businesses deserve the same calibre of financial
              leadership that powers the world's most successful companies.
            </p>
            <p className="body-text">
              We provide world-class CFO advisory services that help founders
              make better financial decisions, grow sustainably, and raise
              capital with confidence. We are building the financial
              infrastructure on which Africa's next generation of great
              businesses will scale.
            </p>
          </div>
        </div>

        {/* FOUNDER PROFILE */}
        <div className="about-grid" style={{ marginTop: "80px" }}>
          <div className="about-photo" style={{ background: "none" }}>
            <Image
              src="/assets/images/cfo-headshot.png"
              alt="Olubunmi Nmerenu, ACA - Founder, The SME CFO"
              width={1000}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "4px",
              }}
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
              world's leading financial institutions, advising on treasury
              strategy, structuring and executing complex, high-value
              transactions, and managing strategic priorities across global
              markets.
            </p>
            <p className="body-text">
              Over the course of her career, she has executed
              multi-billion-pound transactions, including a £2.3 billion
              acquisition and a £750 million share buyback programme.
            </p>
            <p className="body-text">
              Through The SME CFO, she now partners with African and
              diaspora-owned businesses to build the financial systems,
              controls, and strategic discipline required to grow, scale
              sustainably, raise capital, and compete on a global stage.
            </p>
            <div className="pull-quote">
              <p>
                African businesses deserve the same calibre of financial
                leadership and capital that powers Silicon Valley. We're
                building the bridge to make that happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
