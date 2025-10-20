"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Services",
      question: "What CFO services do you offer to SMEs?",
      answer: "We provide comprehensive CFO services including financial planning, cash flow management, investor readiness, tax compliance, performance reporting, and strategic financial advisory tailored specifically for African SMEs."
    },
    {
      category: "Services",
      question: "How quickly can you deliver financial reports?",
      answer: "Our standard turnaround time is 24-48 hours for most financial reports. For urgent requests, we offer same-day delivery with our express service at no additional cost for existing clients."
    },
    {
      category: "Pricing",
      question: "What are your pricing models?",
      answer: "We offer flexible pricing including monthly retainers, project-based fees, and hourly consultations. Pricing starts from ₦50,000 per month for basic CFO services, with custom packages available based on your specific needs."
    },
    {
      category: "Pricing",
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans including quarterly and annual payment options with discounts. We also provide customized payment schedules for long-term engagements."
    },
    {
      category: "Getting Started",
      question: "How do I get started with your services?",
      answer: "Simply contact us through our website or call our team. We'll schedule a free consultation to understand your needs, then provide a customized proposal with clear timelines and deliverables."
    },
    {
      category: "Getting Started",
      question: "What information do I need to provide?",
      answer: "We'll need your basic business information, recent financial statements (if available), bank statements, and details about your specific challenges or goals. Our team will guide you through the process."
    },
    {
      category: "Compliance",
      question: "Do you help with tax compliance?",
      answer: "Absolutely! We provide comprehensive tax compliance services including VAT registration, income tax filing, tax planning strategies, and ongoing compliance monitoring to ensure you meet all regulatory requirements."
    },
    {
      category: "Compliance",
      question: "Are you familiar with Nigerian regulations?",
      answer: "Yes, our team has deep expertise in Nigerian business regulations, tax laws, and compliance requirements. We stay updated with the latest regulatory changes to ensure your business remains compliant."
    },
    {
      category: "Technology",
      question: "What accounting software do you work with?",
      answer: "We work with all major accounting platforms including QuickBooks, Xero, Sage, and local Nigerian software. We can also help you choose and implement the best solution for your business."
    },
    {
      category: "Technology",
      question: "Do you provide training on financial tools?",
      answer: "Yes, we offer training sessions on various financial tools and software. This includes both free group training sessions and personalized one-on-one training for your team."
    }
  ];

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-full max-w-3xl mx-auto h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Frequently asked questions"
                width={1000}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Find answers to common questions about our CFO services and how we can help your business grow
            </p>
          </div>

          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border-2 border-primary-500 transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-500 text-white"
                      : "text-primary-500 hover:bg-primary-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-xs font-medium text-secondary-500 uppercase tracking-wide">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-500 mt-1">
                      {faq.question}
                    </h3>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-dark-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-500 text-lg">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}