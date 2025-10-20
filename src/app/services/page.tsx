import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Investor Readiness & Funding Preparation",
      slug: "investor-readiness",
      description:
        "Transform your SME into an investment-ready business with comprehensive financial documentation and strategic positioning.",
      features: [
        "Investment-Grade Financial Statements",
        "Professional Pitch Deck",
        "Business Valuation",
        "Due Diligence Preparation",
        "Investor Relations Setup",
      ],
      price: "From ₦200,000",
    },
    {
      title: "Financial Statements Preparation",
      slug: "financial-statements",
      description:
        "Professional balance sheets, income statements, and cash flow reports prepared to international standards.",
      features: [
        "Balance Sheet",
        "Income Statement",
        "Cash Flow Statement",
        "Notes to Accounts",
      ],
      price: "From ₦50,000",
    },
    {
      title: "Performance Reporting & Analytics",
      slug: "performance-reporting",
      description:
        "Comprehensive business performance analysis with actionable insights and strategic recommendations.",
      features: [
        "KPI Dashboards",
        "Trend Analysis",
        "Benchmarking",
        "Strategic Insights",
      ],
      price: "From ₦75,000",
    },
    {
      title: "Tax Preparation & Planning",
      slug: "tax-preparation",
      description:
        "Expert tax planning and preparation services ensuring compliance with Nigerian tax regulations.",
      features: [
        "Corporate Tax",
        "VAT Returns",
        "PAYE Management",
        "Tax Planning",
      ],
      price: "From ₦40,000",
    },
    {
      title: "Financial Advisory Services",
      slug: "financial-advisory",
      description:
        "Strategic financial guidance to optimize cash flow, reduce costs, and drive sustainable growth.",
      features: [
        "Cash Flow Management",
        "Cost Optimization",
        "Growth Strategy",
        "Risk Assessment",
      ],
      price: "From ₦100,000",
    },
    {
      title: "Budgeting & Forecasting",
      slug: "budgeting-forecasting",
      description:
        "Detailed budget planning and financial forecasting to support informed business decisions.",
      features: [
        "Annual Budgets",
        "Cash Flow Forecasts",
        "Scenario Planning",
        "Variance Analysis",
      ],
      price: "From ₦60,000",
    },
    {
      title: "Compliance & Audit Support",
      slug: "compliance-audit",
      description:
        "Ensure regulatory compliance with comprehensive audit support and documentation management.",
      features: [
        "Regulatory Compliance",
        "Audit Preparation",
        "Documentation",
        "Risk Management",
      ],
      price: "From ₦80,000",
    },
  ];

  return (
    <>
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Services Hero Image */}
            <div className="w-full max-w-4xl mx-auto h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Professional financial services team" 
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">
              Professional CFO Services for African SMEs
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Comprehensive financial services designed to help your business
              thrive in the African market
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="block">
                <div className="card p-8 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <h3 className="text-2xl font-bold text-primary-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-500 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark-600">
                          <svg
                            className="w-5 h-5 text-success-500 mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary-500">
                      {service.price}
                    </span>
                    <span className="btn-primary">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
