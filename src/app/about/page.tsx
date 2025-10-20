"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { User, Star, CheckCircle, Users, Zap } from "lucide-react";

export default function AboutPage() {
  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      company: "TechFlow Solutions",
      text: "The SME CFO transformed our financial operations. Their expertise helped us secure ₦50M in funding and streamline our cash flow management.",
      rating: 5,
    },
    {
      name: "Fatima Al-Hassan",
      company: "Green Valley Farms",
      text: "Professional, reliable, and incredibly knowledgeable. They helped us navigate complex tax regulations and saved us over ₦2M annually.",
      rating: 5,
    },
    {
      name: "Chinedu Okoro",
      company: "Urban Logistics",
      text: "Outstanding service! Their financial planning strategies helped us scale from 5 to 50 employees while maintaining healthy profit margins.",
      rating: 5,
    },
    {
      name: "Amina Bello",
      company: "Creative Hub Agency",
      text: "The SME CFO team understands the Nigerian business landscape perfectly. Their insights have been invaluable for our growth strategy.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const existingStyle = document.getElementById("testimonial-scroll-style");
    if (!existingStyle) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "testimonial-scroll-style";
      styleSheet.textContent = `
        @keyframes testimonial-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .testimonial-carousel {
          animation: testimonial-scroll 30s linear infinite;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <>
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* About Hero Image */}
            <div className="w-full max-w-4xl mx-auto h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="About The SME CFO - Professional team"
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="section-heading mb-6">About The SME CFO</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Bridging the gap between small businesses and enterprise-level
              financial expertise across Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                To democratize access to professional CFO services for Small and
                Medium Enterprises across Africa, particularly in Nigeria, by
                providing swift, reliable, and affordable financial expertise
                that drives business growth.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                We believe every business, regardless of size, deserves access
                to enterprise-grade financial services that can help them make
                informed decisions, ensure compliance, and achieve sustainable
                growth.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our mission - empowering African SMEs"
                  width={800}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-dark-600">
                Experienced professionals dedicated to your financial success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-2">
                  Adebayo Ogundimu
                </h3>
                <p className="text-secondary-500 font-medium mb-3">
                  CEO & Founder
                </p>
                <p className="text-dark-600 text-sm leading-relaxed">
                  15+ years in financial consulting across Africa. Former Big 4
                  partner with expertise in SME growth strategies and investor
                  relations.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-secondary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-2">
                  Funmi Adebisi
                </h3>
                <p className="text-secondary-500 font-medium mb-3">
                  Commercial Lead
                </p>
                <p className="text-dark-600 text-sm leading-relaxed">
                  12+ years driving business growth in fintech and consulting.
                  Expert in client relationships and market expansion across
                  West Africa.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-2">
                  Kemi Okafor
                </h3>
                <p className="text-secondary-500 font-medium mb-3">
                  Legal & Compliance Lead
                </p>
                <p className="text-dark-600 text-sm leading-relaxed">
                  10+ years in corporate law and regulatory compliance.
                  Specialized in Nigerian business law and cross-border
                  transactions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">
                Trusted Partners
              </h2>
              <p className="text-lg text-dark-600">
                Working with leading organizations across Africa
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Partner 1</span>
                </div>
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Partner 2</span>
                </div>
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Partner 3</span>
                </div>
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Partner 4</span>
                </div>
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Partner 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-20 overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-dark-600">
                Trusted by SMEs across Africa
              </p>
            </div>

            <div className="relative">
              <div className="flex testimonial-carousel space-x-8">
                {[...testimonials, ...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-96 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-soft"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-dark-600 mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-primary-500">
                          {testimonial.name}
                        </h4>
                        <p className="text-secondary-600 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="text-center mb-20">
            <div className="bg-white rounded-2xl shadow-large p-12">
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                Ready to Transform Your Business Finance?
              </h2>
              <p className="text-xl text-dark-600 mb-8 max-w-3xl mx-auto">
                Join hundreds of successful African SMEs who trust us with their
                financial growth. Let's discuss how we can help your business
                thrive.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get in Touch Today
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">
                Professional Excellence
              </h3>
              <p className="text-dark-600">
                Delivering enterprise-grade financial services with the highest
                professional standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-500 mb-3">
                Local Expertise
              </h3>
              <p className="text-dark-600">
                Deep understanding of African business landscape and regulatory
                requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-accent-600 mb-3">
                Swift Delivery
              </h3>
              <p className="text-dark-600">
                Fast turnaround times without compromising on quality or
                accuracy
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-large p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">
                  500+
                </div>
                <div className="text-dark-600">SMEs Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">
                  ₦2B+
                </div>
                <div className="text-dark-600">Revenue Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">
                  98%
                </div>
                <div className="text-dark-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">
                  5+
                </div>
                <div className="text-dark-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
