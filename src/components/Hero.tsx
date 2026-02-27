import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between gap-12">
          <div className="hero-content">
            <span className="label hero-label">
              Fractional CFO for African SMEs
            </span>
            <h1>
              Your business deserves <em>a CFO.</em>
            </h1>
            <p className="hero-sub">
              We provide the strategic financial leadership that transforms
              ambitious African businesses into investor-ready, globally
              competitive enterprises.
            </p>
            <div className="hero-ctas">
              <Link
                href="https://tidycal.com/thesmecfo/discovery-call"
                className="btn-primary"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-8">
            <div
              className="hero-arcs"
              style={{ position: "relative", flexShrink: 0 }}
            >
              <div className="arc-ring" style={{ position: "absolute" }}></div>
              <div className="arc-ring" style={{ position: "absolute" }}></div>
              <div className="arc-ring" style={{ position: "absolute" }}></div>
              <div
                className="hero-image-circle"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/assets/images/hero-image.png"
                  alt="Professional CFO"
                  width={380}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-right max-w-[200px]">
              <div
                className="number"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "5rem",
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 0.07)",
                  lineHeight: 1,
                }}
              >
                39M+
              </div>
              <div
                className="caption"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255, 255, 255, 0.3)",
                }}
              >
                MSMEs in Nigeria. Most operate without any strategic financial
                oversight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
