import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, HelpCircle, Calculator, FileText } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Free Training",
      description: "Expert-led training sessions on financial planning, tax compliance, cash flow management, and investor readiness.",
      icon: BookOpen,
      href: "/resources/free-training",
      features: ["4 Training Sessions", "Beginner to Advanced", "2,000+ Participants", "Certificate Available"],
      color: "primary"
    },
    {
      title: "FAQs",
      description: "Find answers to common questions about our CFO services, pricing, compliance, and technology solutions.",
      icon: HelpCircle,
      href: "/resources/faqs",
      features: ["10+ Categories", "Searchable Content", "Expert Answers", "Regular Updates"],
      color: "secondary"
    },
    {
      title: "Free Calculators",
      description: "Professional-grade financial calculators for cash flow analysis, break-even calculations, and business planning.",
      icon: Calculator,
      href: "/resources/calculators",
      features: ["Cash Flow Calculator", "Break-Even Analysis", "ROI Calculator", "Loan Calculator"],
      color: "accent"
    },
    {
      title: "Blog",
      description: "Expert insights, tips, and strategies to help African SMEs thrive financially with the latest industry knowledge.",
      icon: FileText,
      href: "/blog",
      features: ["12+ Articles", "Expert Insights", "Category Filters", "Regular Updates"],
      color: "success"
    }
  ];

  return (
    <>
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-full max-w-4xl mx-auto h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Financial resources and knowledge hub"
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Financial Resources Hub</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Access comprehensive financial resources designed to empower African SMEs with knowledge, tools, and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className="card p-8 hover:scale-105 transition-transform duration-200 group">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${resource.color}-500 rounded-full flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">{resource.title}</h3>
                      <p className="text-dark-600 leading-relaxed">{resource.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-500 mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {resource.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark-600 text-sm">
                          <div className={`w-2 h-2 bg-${resource.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={resource.href} className={`btn-${resource.color} w-full text-center block group-hover:scale-105 transition-transform`}>
                    Explore {resource.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-large p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Need More Support?
            </h2>
            <p className="text-lg text-dark-600 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our expert team is ready to provide personalized guidance and custom solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Experts
              </Link>
              <Link href="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}