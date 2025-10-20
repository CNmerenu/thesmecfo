import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-6">
                Empowering African SMEs with
                <span className="text-gradient"> Professional Finance</span>
              </h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                The SME CFO bridges the gap between small businesses and
                enterprise-level financial expertise. We understand the unique
                challenges facing African SMEs and provide tailored solutions
                that drive growth.
              </p>
              <p className="text-lg text-dark-600 mb-8 leading-relaxed">
                Our platform combines cutting-edge technology with deep local
                market knowledge to deliver swift, reliable, and affordable CFO
                services across Nigeria and beyond.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-500 mb-1">
                      Local Expertise
                    </h4>
                    <p className="text-dark-600 text-sm">
                      Deep understanding of African business landscape
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-500 mb-1">
                      Swift Delivery
                    </h4>
                    <p className="text-dark-600 text-sm">
                      Fast turnaround times without compromising quality
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-500 mb-1">
                      Enterprise Grade
                    </h4>
                    <p className="text-dark-600 text-sm">
                      Professional standards for businesses of all sizes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-500 mb-1">
                      Affordable Access
                    </h4>
                    <p className="text-dark-600 text-sm">
                      CFO expertise at SME-friendly pricing
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>

            <div className="relative">
              {/* Team Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional team collaborating on financial solutions"
                  width={800}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-large p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">
                    Why Choose Us?
                  </h3>
                  <p className="text-dark-600">Trusted by SMEs across Africa</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="font-medium text-primary-500">
                      Response Time
                    </span>
                    <span className="text-xl font-bold text-primary-500">
                      24hrs
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="font-medium text-secondary-500">
                      Client Satisfaction
                    </span>
                    <span className="text-xl font-bold text-secondary-500">
                      98%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                    <span className="font-medium text-accent-600">
                      Countries Served
                    </span>
                    <span className="text-xl font-bold text-accent-600">
                      5+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// Add custom CSS for the scroll animation
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
