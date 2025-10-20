"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const blogPosts = {
  "understanding-financial-statements-nigerian-smes": {
    title: "Understanding Financial Statements for Nigerian SMEs",
    date: "August 15, 2025",
    category: "Financial Education",
    readTime: "5 min read",
    content: `
      <p>Financial statements are the backbone of any successful business, yet many Nigerian SMEs struggle to understand and utilize them effectively. This comprehensive guide will help you master the art of reading and interpreting financial statements.</p>
      
      <h2>The Three Core Financial Statements</h2>
      
      <h3>1. Balance Sheet</h3>
      <p>Your balance sheet provides a snapshot of your company's financial position at a specific point in time. It shows what you own (assets), what you owe (liabilities), and your ownership equity.</p>
      
      <h3>2. Income Statement</h3>
      <p>Also known as the Profit & Loss statement, this shows your revenue, expenses, and profit over a specific period. It's crucial for understanding your business's profitability.</p>
      
      <h3>3. Cash Flow Statement</h3>
      <p>This tracks the actual cash moving in and out of your business. Remember, profit doesn't always equal cash in the bank.</p>
      
      <h2>Key Ratios for Nigerian SMEs</h2>
      <p>Understanding financial ratios helps you benchmark your performance and identify areas for improvement. Focus on liquidity ratios, profitability ratios, and efficiency ratios.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Many SMEs in Nigeria make critical errors when preparing financial statements. Avoid mixing personal and business expenses, ensure proper documentation, and maintain consistent accounting practices.</p>
    `,
  },
  "tax-planning-strategies-african-businesses": {
    title: "Tax Planning Strategies for African Businesses",
    date: "August 10, 2025",
    category: "Tax Planning",
    readTime: "7 min read",
    content: `
      <p>Effective tax planning is crucial for African businesses looking to optimize their financial performance while staying compliant with local regulations.</p>
      
      <h2>Understanding Nigerian Tax Structure</h2>
      <p>Nigeria operates a complex tax system with federal, state, and local government taxes. Key taxes include Company Income Tax, Value Added Tax, and various state taxes.</p>
      
      <h2>Strategic Tax Planning Tips</h2>
      
      <h3>1. Proper Record Keeping</h3>
      <p>Maintain detailed records of all business transactions. This not only ensures compliance but also helps identify legitimate deductions.</p>
      
      <h3>2. Timing of Income and Expenses</h3>
      <p>Strategic timing of income recognition and expense payments can significantly impact your tax liability.</p>
      
      <h3>3. Take Advantage of Incentives</h3>
      <p>Nigeria offers various tax incentives for businesses in certain sectors or locations. Research and leverage these opportunities.</p>
      
      <h2>Common Tax Compliance Issues</h2>
      <p>Avoid penalties by understanding filing deadlines, maintaining proper documentation, and seeking professional advice when needed.</p>
    `,
  },
  "cash-flow-management-volatile-markets": {
    title: "Cash Flow Management in Volatile Markets",
    date: "August 5, 2025",
    category: "Cash Flow",
    readTime: "6 min read",
    content: `
      <p>In today's volatile economic environment, effective cash flow management is more critical than ever for African SMEs. Learn how to maintain financial stability during uncertain times.</p>
      
      <h2>Understanding Cash Flow Cycles</h2>
      <p>Cash flow is the lifeblood of your business. Understanding your cash conversion cycle helps predict and manage cash needs effectively.</p>
      
      <h2>Strategies for Volatile Markets</h2>
      
      <h3>1. Build Cash Reserves</h3>
      <p>Maintain 3-6 months of operating expenses in reserve to weather unexpected downturns.</p>
      
      <h3>2. Diversify Revenue Streams</h3>
      <p>Reduce dependency on single customers or markets by diversifying your revenue sources.</p>
      
      <h3>3. Optimize Working Capital</h3>
      <p>Improve collection periods, negotiate better payment terms with suppliers, and optimize inventory levels.</p>
      
      <h2>Technology Solutions</h2>
      <p>Leverage digital tools for better cash flow forecasting and management. Modern accounting software can provide real-time insights into your financial position.</p>
    `,
  },
  "digital-transformation-african-finance": {
    title: "Digital Transformation in African Finance",
    date: "September 30, 2025",
    category: "Technology",
    readTime: "8 min read",
    content: `
      <p>Digital transformation is revolutionizing how African businesses manage their finances. Discover how technology can streamline your financial processes and drive growth.</p>
      
      <h2>The Digital Finance Landscape in Africa</h2>
      <p>Africa is experiencing rapid digital adoption in financial services. From mobile money to cloud-based accounting, technology is making financial management more accessible.</p>
      
      <h2>Key Technologies for SMEs</h2>
      
      <h3>1. Cloud-Based Accounting</h3>
      <p>Move beyond spreadsheets to professional accounting software that provides real-time insights and automated processes.</p>
      
      <h3>2. Digital Payment Solutions</h3>
      <p>Implement digital payment systems to improve cash flow and reduce transaction costs.</p>
      
      <h3>3. Financial Analytics</h3>
      <p>Use data analytics to gain deeper insights into your business performance and make informed decisions.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Start small, train your team, and gradually expand your digital capabilities. Focus on solutions that address your specific business needs.</p>
    `,
  },
  "preparing-business-growth-financial-readiness": {
    title: "Preparing for Business Growth: Financial Readiness",
    date: "September 25, 2025",
    category: "Growth Strategy",
    readTime: "6 min read",
    content: `
      <p>Scaling your business requires careful financial preparation. Learn the essential steps to ensure your SME is financially ready for growth.</p>
      
      <h2>Financial Foundation for Growth</h2>
      <p>Before scaling, ensure your financial systems can handle increased complexity and volume. This includes robust accounting systems and financial controls.</p>
      
      <h2>Key Preparation Areas</h2>
      
      <h3>1. Financial Systems and Processes</h3>
      <p>Implement scalable financial systems that can grow with your business. Automate routine processes to free up resources for strategic activities.</p>
      
      <h3>2. Capital Requirements</h3>
      <p>Accurately forecast your capital needs for growth. Consider both working capital and investment capital requirements.</p>
      
      <h3>3. Risk Management</h3>
      <p>Identify and mitigate financial risks associated with growth. This includes credit risk, operational risk, and market risk.</p>
      
      <h2>Funding Options</h2>
      <p>Explore various funding sources including bank loans, equity investment, and alternative financing options available to African SMEs.</p>
    `,
  },
  "regulatory-compliance-nigerian-businesses": {
    title: "Regulatory Compliance for Nigerian Businesses",
    date: "September 20, 2025",
    category: "Compliance",
    readTime: "9 min read",
    content: `
      <p>Staying compliant with Nigerian business regulations is crucial for long-term success. This comprehensive guide covers key compliance requirements for SMEs.</p>
      
      <h2>Regulatory Landscape Overview</h2>
      <p>Nigeria's regulatory environment involves multiple agencies including CAC, FIRS, PENCOM, and various state agencies. Understanding their requirements is essential.</p>
      
      <h2>Key Compliance Areas</h2>
      
      <h3>1. Corporate Affairs Commission (CAC)</h3>
      <p>Ensure proper company registration, annual returns filing, and maintenance of statutory records.</p>
      
      <h3>2. Tax Compliance</h3>
      <p>Meet all federal and state tax obligations including timely filing and payment of taxes.</p>
      
      <h3>3. Employment Regulations</h3>
      <p>Comply with labor laws, pension contributions, and other employment-related requirements.</p>
      
      <h2>Best Practices</h2>
      <p>Maintain a compliance calendar, conduct regular internal audits, and seek professional advice when needed. Prevention is always better than cure when it comes to regulatory issues.</p>
    `,
  },
  "building-financial-resilience-african-smes": {
    title: "Building Financial Resilience in African SMEs",
    date: "September 15, 2025",
    category: "Financial Education",
    readTime: "7 min read",
    content: `
      <p>Financial resilience is the ability to withstand and recover from financial shocks. For African SMEs operating in volatile environments, building this resilience is crucial for long-term survival and growth.</p>
      
      <h2>Understanding Financial Resilience</h2>
      <p>Financial resilience encompasses multiple dimensions: liquidity management, diversification, risk management, and adaptive capacity. Each plays a vital role in your business's ability to weather storms.</p>
      
      <h2>Building Blocks of Resilience</h2>
      
      <h3>1. Emergency Fund Management</h3>
      <p>Maintain 6-12 months of operating expenses in readily accessible funds. This buffer provides breathing room during unexpected downturns.</p>
      
      <h3>2. Revenue Diversification</h3>
      <p>Avoid over-dependence on single customers, products, or markets. Diversification reduces vulnerability to sector-specific shocks.</p>
      
      <h3>3. Flexible Cost Structure</h3>
      <p>Maintain a balance between fixed and variable costs. Higher variable cost ratios provide more flexibility during downturns.</p>
      
      <h2>Risk Management Strategies</h2>
      <p>Implement comprehensive risk assessment processes, maintain appropriate insurance coverage, and develop contingency plans for various scenarios.</p>
    `,
  },
  "vat-management-nigerian-businesses": {
    title: "VAT Management for Nigerian Businesses",
    date: "September 10, 2025",
    category: "Tax Planning",
    readTime: "6 min read",
    content: `
      <p>Value Added Tax (VAT) is a significant component of Nigeria's tax system. Proper VAT management can improve cash flow and ensure compliance while avoiding penalties.</p>
      
      <h2>Understanding Nigerian VAT</h2>
      <p>Nigeria operates a 7.5% VAT system with specific rules for registration, collection, and remittance. Understanding these rules is crucial for compliance.</p>
      
      <h2>VAT Registration Requirements</h2>
      
      <h3>Mandatory Registration</h3>
      <p>Businesses with annual turnover exceeding ₦25 million must register for VAT. Registration provides access to input VAT credits.</p>
      
      <h3>Voluntary Registration</h3>
      <p>Smaller businesses can voluntarily register to claim input VAT and appear more credible to larger clients.</p>
      
      <h2>VAT Optimization Strategies</h2>
      
      <h3>1. Input VAT Management</h3>
      <p>Maintain proper records of all input VAT to maximize credits and reduce overall VAT liability.</p>
      
      <h3>2. Timing Strategies</h3>
      <p>Optimize the timing of purchases and sales to manage VAT cash flow effectively.</p>
      
      <h2>Common Pitfalls</h2>
      <p>Avoid late filing, inadequate record keeping, and incorrect VAT treatment of transactions. These can result in penalties and interest charges.</p>
    `,
  },
  "working-capital-optimization-strategies": {
    title: "Working Capital Optimization Strategies",
    date: "September 5, 2025",
    category: "Cash Flow",
    readTime: "8 min read",
    content: `
      <p>Working capital optimization is crucial for maintaining healthy cash flow and supporting business growth. Learn proven strategies to maximize your working capital efficiency.</p>
      
      <h2>Understanding Working Capital</h2>
      <p>Working capital is the difference between current assets and current liabilities. It represents the short-term financial health of your business.</p>
      
      <h2>Key Components</h2>
      
      <h3>1. Accounts Receivable Management</h3>
      <p>Implement efficient collection processes, offer early payment discounts, and consider factoring for immediate cash flow.</p>
      
      <h3>2. Inventory Optimization</h3>
      <p>Balance inventory levels to meet demand while minimizing carrying costs. Use just-in-time principles where applicable.</p>
      
      <h3>3. Accounts Payable Strategy</h3>
      <p>Negotiate favorable payment terms with suppliers while maintaining good relationships. Take advantage of early payment discounts when beneficial.</p>
      
      <h2>Technology Solutions</h2>
      <p>Leverage ERP systems, automated invoicing, and digital payment platforms to streamline working capital management processes.</p>
      
      <h2>Measuring Success</h2>
      <p>Track key metrics like Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payable Outstanding (DPO) to monitor performance.</p>
    `,
  },
  "fintech-solutions-sme-growth": {
    title: "Fintech Solutions for SME Growth",
    date: "May 30, 2025",
    category: "Technology",
    readTime: "5 min read",
    content: `
      <p>Fintech innovations are revolutionizing how SMEs access financial services, manage operations, and drive growth across Africa. Discover the solutions transforming the landscape.</p>
      
      <h2>The African Fintech Revolution</h2>
      <p>Africa leads global fintech adoption, with mobile money, digital lending, and blockchain solutions addressing traditional banking gaps.</p>
      
      <h2>Key Fintech Solutions for SMEs</h2>
      
      <h3>1. Digital Payment Platforms</h3>
      <p>Accept payments through mobile money, cards, and digital wallets. Reduce transaction costs and improve customer experience.</p>
      
      <h3>2. Alternative Lending</h3>
      <p>Access quick funding through peer-to-peer lending, invoice financing, and AI-driven credit assessment platforms.</p>
      
      <h3>3. Financial Management Tools</h3>
      <p>Use cloud-based accounting software, expense management apps, and automated bookkeeping solutions.</p>
      
      <h2>Implementation Strategy</h2>
      <p>Start with basic payment solutions, gradually integrate more sophisticated tools, and ensure staff training for maximum adoption.</p>
      
      <h2>Future Trends</h2>
      <p>Watch for developments in blockchain, AI-powered financial advisory, and embedded finance solutions that will further transform SME operations.</p>
    `,
  },
  "strategic-financial-planning-scale": {
    title: "Strategic Financial Planning for Scale",
    date: "May 25, 2025",
    category: "Growth Strategy",
    readTime: "9 min read",
    content: `
      <p>Scaling a business requires sophisticated financial planning that goes beyond basic budgeting. Develop robust strategies that support sustainable growth.</p>
      
      <h2>The Scaling Challenge</h2>
      <p>Many SMEs struggle with the financial complexities of scaling. Success requires strategic planning, adequate funding, and robust financial controls.</p>
      
      <h2>Financial Planning Framework</h2>
      
      <h3>1. Growth Scenario Modeling</h3>
      <p>Develop multiple growth scenarios with corresponding financial projections. Plan for best-case, worst-case, and most likely outcomes.</p>
      
      <h3>2. Capital Requirements Planning</h3>
      <p>Accurately forecast capital needs for growth including working capital, fixed assets, and strategic investments.</p>
      
      <h3>3. Funding Strategy</h3>
      <p>Evaluate funding options including debt, equity, and hybrid instruments. Consider timing, cost, and control implications.</p>
      
      <h2>Financial Controls for Scale</h2>
      <p>Implement robust financial controls, regular reporting systems, and performance monitoring to maintain visibility during rapid growth.</p>
      
      <h2>Risk Management</h2>
      <p>Identify and mitigate risks associated with scaling including operational risk, market risk, and financial risk.</p>
    `,
  },
  "corporate-governance-growing-smes": {
    title: "Corporate Governance for Growing SMEs",
    date: "May 20, 2025",
    category: "Compliance",
    readTime: "7 min read",
    content: `
      <p>As SMEs grow and attract investors, implementing strong corporate governance becomes crucial for maintaining stakeholder confidence and ensuring sustainable growth.</p>
      
      <h2>Why Governance Matters</h2>
      <p>Good governance reduces risk, improves decision-making, enhances credibility with stakeholders, and creates value for all parties involved.</p>
      
      <h2>Key Governance Elements</h2>
      
      <h3>1. Board Structure</h3>
      <p>Establish an effective board with appropriate mix of skills, experience, and independence. Consider advisory boards for smaller companies.</p>
      
      <h3>2. Financial Reporting</h3>
      <p>Implement robust financial reporting systems with regular board reporting, external audits, and transparent disclosure practices.</p>
      
      <h3>3. Risk Management</h3>
      <p>Develop comprehensive risk management frameworks with regular assessment, monitoring, and mitigation strategies.</p>
      
      <h2>Stakeholder Management</h2>
      <p>Balance the interests of various stakeholders including shareholders, employees, customers, and the broader community.</p>
      
      <h2>Implementation Roadmap</h2>
      <p>Start with basic governance structures and gradually enhance sophistication as the company grows and attracts external investment.</p>
    `,
  },
};

function ShareButton({ title }: { title: string }) {
  const [showButtons, setShowButtons] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        <span>Share</span>
      </button>

      {showButtons && (
        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col space-y-1">
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-blue-500 hover:bg-blue-50 rounded transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
            <span className="text-sm">Twitter</span>
          </a>
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-blue-700 hover:bg-blue-50 rounded transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{copied ? "Copied!" : "Copy Link"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 font-medium mb-4 inline-block"
            >
              ← Back to Blog
            </Link>

            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
                alt={post.title}
                width={1200}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-dark-500 text-sm">{post.readTime}</span>
              <span className="text-dark-500 text-sm">{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-6 font-display">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div
              className="text-dark-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="btn-outline">
                ← More Articles
              </Link>
              <ShareButton title={post.title} />
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-6">
            Need Professional Financial Guidance?
          </h2>
          <p className="text-lg text-dark-600 mb-8">
            Our expert CFO services can help implement these strategies in your
            business
          </p>
          <Link href="/get-started" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
