import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  const impactData = [
    {
      title: "SMEs Served",
      value: "500",
      sign: "+",
    },
    {
      title: "Revenue Managed",
      value: "2",
      sign: "B+",
    },
    {
      title: "Support Availalable",
      value: "24/7",
      sign: "",
    },
  ];

  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Business growth and success"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
          Ready to Transform Your Business Finance?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of African SMEs who trust The SME CFO for their
          financial needs. Get started today and experience professional CFO
          services tailored for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/get-started"
            className="bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-medium"
          >
            Get Started Now
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {
            // Impact Data
            impactData.map((data, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-secondary-400 mb-2">
                  {data.value}
                  {data.sign}
                </div>
                <div className="text-primary-200">{data.title}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default CTA;
