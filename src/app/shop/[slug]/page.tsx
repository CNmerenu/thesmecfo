"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useState, use } from "react";
import { notFound, useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

const products = {
  "financial-planning-template-bundle": {
    id: "1",
    title: "Financial Planning Template Bundle",
    price: 15000,
    originalPrice: 25000,
    rating: 4.8,
    reviews: 124,
    category: "Templates",
    description:
      "Comprehensive Excel templates for budgeting, cash flow forecasting, and financial planning designed specifically for African SMEs.",
    features: [
      "Budget Templates",
      "Cash Flow Models",
      "Financial Dashboards",
      "KPI Trackers",
    ],
    detailedFeatures: [
      "Annual and Monthly Budget Templates",
      "12-Month Cash Flow Forecasting Model",
      "Interactive Financial Dashboard with Charts",
      "KPI Tracking Templates for 20+ Metrics",
      "Scenario Planning Tools",
      "Financial Ratio Analysis Templates",
    ],
    whatYouGet: [
      "6 Excel Template Files",
      "User Guide and Instructions",
      "Video Tutorial (30 minutes)",
      "Email Support for 30 Days",
    ],
    requirements:
      "Microsoft Excel 2016 or newer, Basic Excel knowledge recommended",
  },
  "sme-tax-compliance-guide": {
    id: "2",
    title: "SME Tax Compliance Guide",
    price: 8000,
    originalPrice: undefined,
    rating: 4.9,
    reviews: 89,
    category: "Guides",
    description:
      "Complete guide to Nigerian tax compliance for small and medium enterprises, updated for 2025 regulations.",
    features: [
      "Tax Calendar",
      "Compliance Checklist",
      "Form Templates",
      "Expert Tips",
    ],
    detailedFeatures: [
      "2025 Nigerian Tax Calendar",
      "Monthly Compliance Checklist",
      "Pre-filled Tax Form Templates",
      "Expert Tips from Certified Tax Professionals",
      "Common Mistakes to Avoid",
      "Penalty Avoidance Strategies",
    ],
    whatYouGet: [
      "50-Page Comprehensive Guide (PDF)",
      "Tax Calendar (Excel)",
      "Form Templates (Word/PDF)",
      "Quick Reference Cards",
    ],
    requirements: "PDF reader, Microsoft Office or equivalent",
  },
  "business-financial-health-audit": {
    id: "3",
    title: "Business Financial Health Audit",
    price: 12000,
    originalPrice: undefined,
    rating: 4.7,
    reviews: 67,
    category: "Tools",
    description:
      "Self-assessment tool to evaluate your business financial health and identify improvement areas.",
    features: [
      "Assessment Framework",
      "Scoring System",
      "Action Plan Template",
      "Best Practices",
    ],
    detailedFeatures: [
      "Comprehensive Financial Health Assessment",
      "Automated Scoring System",
      "Personalized Action Plan Generator",
      "Industry Benchmarking",
      "Risk Assessment Matrix",
      "Improvement Recommendations",
    ],
    whatYouGet: [
      "Excel-based Assessment Tool",
      "Scoring Dashboard",
      "Action Plan Template",
      "Best Practices Guide (PDF)",
    ],
    requirements: "Microsoft Excel 2016 or newer",
  },
  "investor-pitch-deck-template": {
    id: "4",
    title: "Investor Pitch Deck Template",
    price: 10000,
    originalPrice: undefined,
    rating: 4.6,
    reviews: 45,
    category: "Templates",
    description:
      "Professional presentation template designed for African SMEs seeking investment.",
    features: [
      "PowerPoint Template",
      "Financial Slides",
      "Market Analysis",
      "Design Guidelines",
    ],
    detailedFeatures: [
      "Professional PowerPoint Template",
      "Pre-designed Financial Slides",
      "Market Analysis Framework",
      "Investor-focused Content Structure",
      "Design Guidelines and Tips",
      "Sample Pitch Deck Examples",
    ],
    whatYouGet: [
      "PowerPoint Template (20 slides)",
      "Design Guidelines (PDF)",
      "Sample Content Examples",
      "Icon and Image Library",
    ],
    requirements: "Microsoft PowerPoint 2016 or newer",
  },
  "cash-flow-management-masterclass": {
    id: "5",
    title: "Cash Flow Management Masterclass",
    price: 35000,
    originalPrice: 50000,
    rating: 4.9,
    reviews: 156,
    category: "Courses",
    description:
      "Video course on mastering cash flow management for sustainable business growth.",
    features: [
      "4 Hours of Video",
      "Workbook Included",
      "Case Studies",
      "Certificate",
    ],
    detailedFeatures: [
      "4 Hours of High-Quality Video Content",
      "Comprehensive Workbook with Exercises",
      "Real African SME Case Studies",
      "Certificate of Completion",
      "Lifetime Access to Content",
      "Monthly Q&A Sessions",
    ],
    whatYouGet: [
      "8 Video Modules (4 hours total)",
      "Downloadable Workbook (PDF)",
      "Case Study Materials",
      "Certificate of Completion",
      "Access to Private Community",
    ],
    requirements:
      "Internet connection, any device with video playback capability",
  },
  "financial-ratios-calculator": {
    id: "6",
    title: "Financial Ratios Calculator",
    price: 6000,
    originalPrice: undefined,
    rating: 4.5,
    reviews: 78,
    category: "Tools",
    description:
      "Excel-based calculator for analyzing key financial ratios and business performance.",
    features: [
      "Automated Calculations",
      "Ratio Analysis",
      "Benchmarking",
      "Visual Charts",
    ],
    detailedFeatures: [
      "Automated Financial Ratio Calculations",
      "Comprehensive Ratio Analysis",
      "Industry Benchmarking Data",
      "Visual Charts and Graphs",
      "Trend Analysis Tools",
      "Performance Indicators",
    ],
    whatYouGet: [
      "Excel Calculator Tool",
      "User Manual (PDF)",
      "Industry Benchmark Data",
      "Video Tutorial (15 minutes)",
    ],
    requirements: "Microsoft Excel 2016 or newer",
  },
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { slug } = use(params);
  const product = products[slug as keyof typeof products];
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        slug: slug,
        price: product.price,
        originalPrice: product.originalPrice,
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        slug: slug,
        price: product.price,
        originalPrice: product.originalPrice,
      },
      quantity
    );
    router.push("/checkout");
  };

  return (
    <>
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="text-primary-500 hover:text-primary-600 font-medium mb-6 inline-block"
          >
            ← Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center text-primary-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z" />
                  </svg>
                  <p className="text-lg font-medium">{product.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-full h-24 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-dark-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-primary-500 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-secondary-500">
                  ₦{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-dark-400 line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-danger-100 text-danger-700 px-3 py-1 rounded-full text-sm font-medium">
                    Save ₦
                    {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-primary-500 mb-3">
                  Key Features:
                </h3>
                <ul className="space-y-2">
                  {product.detailedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-dark-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <label className="font-medium text-dark-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full btn-primary text-lg py-4"
                >
                  Add to Cart - ₦{(product.price * quantity).toLocaleString()}
                </button>
                <button
                  className="w-full btn-secondary text-lg py-4"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-primary-500 mb-2">
                  System Requirements:
                </h4>
                <p className="text-dark-600 text-sm">{product.requirements}</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary-500 mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-2">
                  {product.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-center">
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
                      <span className="text-dark-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary-500 mb-4">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-dark-600">5.0 out of 5</span>
                  </div>
                  <p className="text-dark-600 italic">
                    "Excellent templates that saved me hours of work. Highly
                    recommended for any SME!"
                  </p>
                  <p className="text-sm text-dark-500">- Adebayo O., Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
