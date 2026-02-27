import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="max-w-7xl mx-auto relative">
        <div className="cta-left">
          <span className="label section-label">Get in touch</span>
          <h2>
            Walk away with clarity on where your business stands financially,
            and a roadmap for what comes next.
          </h2>
          <p className="cta-sub">Schedule a consultation with our team.</p>
          <Link
            href="https://tidycal.com/thesmecfo/discovery-call"
            target="_blank"
            className="btn-primary"
          >
            Book a Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
