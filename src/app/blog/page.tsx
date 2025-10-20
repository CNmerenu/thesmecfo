"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const allBlogPosts = [
    {
      title: "Understanding Financial Statements for Nigerian SMEs",
      slug: "understanding-financial-statements-nigerian-smes",
      excerpt:
        "A comprehensive guide to reading and interpreting financial statements for small business owners in Nigeria. Learn to analyze balance sheets, income statements, and cash flow reports to make informed business decisions.",
      date: "August 15, 2025",
      category: "Financial Education",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tax Planning Strategies for African Businesses",
      slug: "tax-planning-strategies-african-businesses",
      excerpt:
        "Essential tax planning tips to help your SME stay compliant while optimizing your tax burden. Navigate Nigerian tax regulations with confidence and maximize your business profitability.",
      date: "August 10, 2025",
      category: "Tax Planning",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cash Flow Management in Volatile Markets",
      slug: "cash-flow-management-volatile-markets",
      excerpt:
        "How to maintain healthy cash flow during economic uncertainty and market volatility. Proven strategies to protect your business liquidity and ensure operational continuity.",
      date: "August 5, 2025",
      category: "Cash Flow",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Transformation in African Finance",
      slug: "digital-transformation-african-finance",
      excerpt:
        "Leveraging technology to streamline financial processes and improve business efficiency. Discover the latest fintech solutions transforming African business operations.",
      date: "September 30, 2025",
      category: "Technology",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Preparing for Business Growth: Financial Readiness",
      slug: "preparing-business-growth-financial-readiness",
      excerpt:
        "Key financial preparations every SME should make before scaling their operations. Build a solid foundation for sustainable growth and investor confidence.",
      date: "September 25, 2025",
      category: "Growth Strategy",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Regulatory Compliance for Nigerian Businesses",
      slug: "regulatory-compliance-nigerian-businesses",
      excerpt:
        "Stay up-to-date with the latest regulatory requirements and compliance best practices. Navigate Nigerian business regulations with expert guidance and avoid costly penalties.",
      date: "September 20, 2025",
      category: "Compliance",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Building Financial Resilience in African SMEs",
      slug: "building-financial-resilience-african-smes",
      excerpt:
        "Learn how to build financial resilience and weather economic storms in the African business landscape. Strategies for risk management and sustainable growth.",
      date: "September 15, 2025",
      category: "Financial Education",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "VAT Management for Nigerian Businesses",
      slug: "vat-management-nigerian-businesses",
      excerpt:
        "Complete guide to Value Added Tax compliance and optimization for Nigerian SMEs. Master VAT registration, filing, and strategic planning for your business.",
      date: "September 10, 2025",
      category: "Tax Planning",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Working Capital Optimization Strategies",
      slug: "working-capital-optimization-strategies",
      excerpt:
        "Maximize your working capital efficiency with proven strategies for African businesses. Improve cash conversion cycles and enhance operational performance.",
      date: "September 5, 2025",
      category: "Cash Flow",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fintech Solutions for SME Growth",
      slug: "fintech-solutions-sme-growth",
      excerpt:
        "Discover how fintech innovations are transforming SME operations across Africa. Leverage digital payment solutions, lending platforms, and financial management tools.",
      date: "May 30, 2025",
      category: "Technology",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Strategic Financial Planning for Scale",
      slug: "strategic-financial-planning-scale",
      excerpt:
        "Develop robust financial strategies that support sustainable business scaling. Create comprehensive financial models and growth projections for long-term success.",
      date: "May 25, 2025",
      category: "Growth Strategy",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Governance for Growing SMEs",
      slug: "corporate-governance-growing-smes",
      excerpt:
        "Implement strong governance structures as your SME grows and attracts investors. Build transparent processes and accountability frameworks for sustainable growth.",
      date: "May 20, 2025",
      category: "Compliance",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "All",
    "Financial Education",
    "Tax Planning",
    "Cash Flow",
    "Technology",
    "Growth Strategy",
    "Compliance",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = (
    selectedCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === selectedCategory)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(6);
  };

  return (
    <>
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Blog Hero Image */}
            <div className="w-full max-w-3xl mx-auto h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Financial knowledge and insights"
                width={1000}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="section-heading mb-6">Financial Knowledge Hub</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help African SMEs thrive
              financially
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-2 rounded-full border-2 border-primary-500 transition-colors ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "text-primary-500 hover:bg-primary-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <article
                key={index}
                className="card overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                {/* Blog Card Image */}
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={192}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-dark-500 text-sm">
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-primary-500 mb-3 hover:text-primary-600 cursor-pointer line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-dark-600 mb-6 leading-relaxed text-sm line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-dark-500 text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {hasMorePosts && (
            <div className="text-center mt-12">
              <button onClick={loadMorePosts} className="btn-primary">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-6">
            Stay Updated with Financial Insights
          </h2>
          <p className="text-lg text-dark-600 mb-8">
            Subscribe to our newsletter for the latest financial tips and
            industry updates
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
