"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

interface ServiceData {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  price: string;
  duration: string;
  image: string;
}

const servicesData: Record<string, ServiceData> = {
  "investor-readiness": {
    title: "Investor Readiness & Funding Preparation",
    slug: "investor-readiness",
    description:
      "Transform your SME into an investment-ready business with comprehensive financial documentation and strategic positioning.",
    longDescription:
      "Our investor readiness service prepares your business for funding opportunities by creating professional financial documentation, compelling pitch materials, and strategic positioning that attracts investors. We work with you to present your business in the best possible light while ensuring all financial data is accurate and compelling.",
    features: [
      "Investment-Grade Financial Statements",
      "Professional Pitch Deck",
      "Business Valuation",
      "Due Diligence Preparation",
      "Investor Relations Setup",
      "Financial Projections",
      "Market Analysis",
      "Competitive Positioning",
    ],
    benefits: [
      "Increase funding success rate by 300%",
      "Professional presentation to investors",
      "Accurate business valuation",
      "Streamlined due diligence process",
      "Enhanced credibility with investors",
    ],
    process: [
      "Initial business assessment and gap analysis",
      "Financial statements preparation and audit",
      "Business valuation and market analysis",
      "Pitch deck creation and refinement",
      "Due diligence documentation preparation",
      "Investor presentation coaching",
    ],
    price: "From ₦200,000",
    duration: "4-6 weeks",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  "financial-statements": {
    title: "Financial Statements Preparation",
    slug: "financial-statements",
    description:
      "Professional balance sheets, income statements, and cash flow reports prepared to international standards.",
    longDescription:
      "Our financial statements preparation service ensures your business maintains accurate, compliant, and professional financial records. We prepare comprehensive financial statements that meet international accounting standards and regulatory requirements.",
    features: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Notes to Accounts",
      "Management Reports",
      "Ratio Analysis",
      "Compliance Checks",
    ],
    benefits: [
      "IFRS compliant financial statements",
      "Enhanced business credibility",
      "Better decision-making insights",
      "Regulatory compliance assurance",
      "Improved access to financing",
    ],
    process: [
      "Data collection and verification",
      "Account reconciliation",
      "Financial statements preparation",
      "Review and quality assurance",
      "Management reporting",
      "Compliance verification",
    ],
    price: "From ₦50,000",
    duration: "2-3 weeks",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
  "performance-reporting": {
    title: "Performance Reporting & Analytics",
    slug: "performance-reporting",
    description:
      "Comprehensive business performance analysis with actionable insights and strategic recommendations.",
    longDescription:
      "Our performance reporting service provides deep insights into your business operations through comprehensive analytics, KPI tracking, and strategic recommendations that drive growth and efficiency.",
    features: [
      "KPI Dashboards",
      "Trend Analysis",
      "Benchmarking",
      "Strategic Insights",
      "Performance Metrics",
      "Variance Analysis",
      "Forecasting Models",
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Early problem identification",
      "Strategic growth insights",
      "Competitive advantage",
    ],
    process: [
      "KPI identification and setup",
      "Data collection and analysis",
      "Dashboard creation",
      "Performance benchmarking",
      "Insights generation",
      "Strategic recommendations",
    ],
    price: "From ₦75,000",
    duration: "3-4 weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
  "tax-preparation": {
    title: "Tax Preparation & Planning",
    slug: "tax-preparation",
    description:
      "Expert tax planning and preparation services ensuring compliance with Nigerian tax regulations.",
    longDescription:
      "Our tax preparation and planning service ensures your business remains compliant with all Nigerian tax obligations while optimizing your tax position through strategic planning and efficient processes.",
    features: [
      "Corporate Tax",
      "VAT Returns",
      "PAYE Management",
      "Tax Planning",
      "Compliance Monitoring",
      "Tax Optimization",
      "Audit Support",
    ],
    benefits: [
      "100% tax compliance",
      "Optimized tax position",
      "Reduced tax liabilities",
      "Penalty avoidance",
      "Peace of mind",
    ],
    process: [
      "Tax position assessment",
      "Compliance gap analysis",
      "Tax return preparation",
      "Strategic tax planning",
      "Filing and submission",
      "Ongoing monitoring",
    ],
    price: "From ₦40,000",
    duration: "2-3 weeks",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
  "financial-advisory": {
    title: "Financial Advisory Services",
    slug: "financial-advisory",
    description:
      "Strategic financial guidance to optimize cash flow, reduce costs, and drive sustainable growth.",
    longDescription:
      "Our financial advisory service provides strategic guidance to help your business optimize financial performance, manage risks, and achieve sustainable growth through expert financial planning and analysis.",
    features: [
      "Cash Flow Management",
      "Cost Optimization",
      "Growth Strategy",
      "Risk Assessment",
      "Financial Planning",
      "Investment Analysis",
      "Strategic Consulting",
    ],
    benefits: [
      "Improved cash flow",
      "Reduced operational costs",
      "Strategic growth planning",
      "Risk mitigation",
      "Enhanced profitability",
    ],
    process: [
      "Financial health assessment",
      "Strategy development",
      "Implementation planning",
      "Performance monitoring",
      "Continuous optimization",
      "Regular reviews",
    ],
    price: "From ₦100,000",
    duration: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
  "budgeting-forecasting": {
    title: "Budgeting & Forecasting",
    slug: "budgeting-forecasting",
    description:
      "Detailed budget planning and financial forecasting to support informed business decisions.",
    longDescription:
      "Our budgeting and forecasting service helps you plan for the future with accurate financial projections, comprehensive budgets, and scenario planning that supports strategic decision-making.",
    features: [
      "Annual Budgets",
      "Cash Flow Forecasts",
      "Scenario Planning",
      "Variance Analysis",
      "Rolling Forecasts",
      "Budget Monitoring",
      "Strategic Planning",
    ],
    benefits: [
      "Better financial planning",
      "Improved cash management",
      "Strategic decision support",
      "Risk mitigation",
      "Performance tracking",
    ],
    process: [
      "Historical analysis",
      "Budget preparation",
      "Forecast modeling",
      "Scenario development",
      "Review and approval",
      "Ongoing monitoring",
    ],
    price: "From ₦60,000",
    duration: "3-4 weeks",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
  "compliance-audit": {
    title: "Compliance & Audit Support",
    slug: "compliance-audit",
    description:
      "Ensure regulatory compliance with comprehensive audit support and documentation management.",
    longDescription:
      "Our compliance and audit support service ensures your business meets all regulatory requirements while providing comprehensive audit preparation and ongoing compliance monitoring.",
    features: [
      "Regulatory Compliance",
      "Audit Preparation",
      "Documentation",
      "Risk Management",
      "Compliance Monitoring",
      "Internal Controls",
      "Audit Support",
    ],
    benefits: [
      "Full regulatory compliance",
      "Audit readiness",
      "Risk mitigation",
      "Improved controls",
      "Peace of mind",
    ],
    process: [
      "Compliance assessment",
      "Gap analysis",
      "Documentation preparation",
      "Control implementation",
      "Audit support",
      "Ongoing monitoring",
    ],
    price: "From ₦80,000",
    duration: "4-5 weeks",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",

  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-500 mb-4">
              Service Not Found
            </h1>
            <Link href="/services" className="btn-primary">
              Back to Services
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary">
                  Get Started Today
                </Link>
                <Link href="/contact" className="btn-outline">
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-dark-600">
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

            {/* Benefits */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-dark-600">
                    <svg
                      className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & Duration */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">
                Service Details
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark-700 mb-2">
                    Investment
                  </h3>
                  <p className="text-2xl font-bold text-secondary-500">
                    {service.price}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-700 mb-2">Timeline</h3>
                  <p className="text-lg text-dark-600">{service.duration}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/get-started"
                    className="btn-primary w-full text-center"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-dark-600">
              How we deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-dark-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Transform your business with professional{" "}
            {service.title.toLowerCase()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
