import { Star, CreditCard, BarChart3, FileText, CheckCircle, Layout, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Investor Readiness & Funding Preparation",
      description: "Transform your SME into an investment-ready business with professional financial documentation, pitch decks, and strategic positioning for funding success."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Financial Statements",
      description: "Professional balance sheets, income statements, and cash flow reports prepared to international standards."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Reporting",
      description: "Comprehensive business performance analysis with actionable insights and strategic recommendations."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Tax Preparation",
      description: "Expert tax planning and preparation services ensuring compliance with Nigerian tax regulations."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Financial Advisory",
      description: "Strategic financial guidance to optimize cash flow, reduce costs, and drive sustainable growth."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Budgeting & Forecasting",
      description: "Detailed budget planning and financial forecasting to support informed business decisions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with comprehensive audit support and documentation management."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Services Header Image */}
          <div className="w-full max-w-2xl mx-auto h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-soft overflow-hidden mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Financial services and business analytics" 
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="section-heading mb-4">
            Comprehensive CFO Services
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Everything your SME needs to maintain professional financial standards and drive growth across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 hover:scale-105 transition-transform duration-200">
              <div className="text-primary-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                {service.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;