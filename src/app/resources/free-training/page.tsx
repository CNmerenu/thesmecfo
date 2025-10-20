import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Play, Clock, Users, Award } from "lucide-react";

export default function FreeTrainingPage() {
  const trainingSessions = [
    {
      title: "Financial Planning Fundamentals for SMEs",
      duration: "45 minutes",
      participants: "2,340",
      description: "Learn the basics of financial planning tailored for African small and medium enterprises.",
      topics: ["Budget Creation", "Cash Flow Forecasting", "Financial Goal Setting", "Risk Assessment"],
      level: "Beginner",
    },
    {
      title: "Tax Compliance Made Simple",
      duration: "60 minutes", 
      participants: "1,890",
      description: "Navigate Nigerian tax regulations with confidence and avoid costly penalties.",
      topics: ["VAT Registration", "Income Tax Filing", "Compliance Calendar", "Record Keeping"],
      level: "Intermediate",
    },
    {
      title: "Cash Flow Management Strategies",
      duration: "50 minutes",
      participants: "3,120",
      description: "Master cash flow management techniques to ensure business continuity.",
      topics: ["Working Capital", "Payment Terms", "Collection Strategies", "Emergency Planning"],
      level: "Intermediate",
    },
    {
      title: "Investor Readiness Workshop",
      duration: "75 minutes",
      participants: "1,560",
      description: "Prepare your business for investment opportunities and funding rounds.",
      topics: ["Financial Statements", "Pitch Preparation", "Valuation Basics", "Due Diligence"],
      level: "Advanced",
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Free financial training sessions"
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Free Financial Training</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Access expert-led training sessions designed to empower African SMEs with essential financial knowledge
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingSessions.map((session, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    session.level === 'Beginner' ? 'bg-success-100 text-success-700' :
                    session.level === 'Intermediate' ? 'bg-accent-100 text-accent-700' :
                    'bg-danger-100 text-danger-700'
                  }`}>
                    {session.level}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-dark-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {session.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {session.participants}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary-500 mb-4">{session.title}</h3>
                <p className="text-dark-600 mb-6 leading-relaxed">{session.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-500 mb-3">What You'll Learn:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {session.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-dark-600 text-sm">
                        <Award className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Training
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-large p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Need Personalized Training?
            </h2>
            <p className="text-lg text-dark-600 mb-8 max-w-3xl mx-auto">
              Our team can create custom training programs tailored to your business needs and industry requirements.
            </p>
            <Link href="/contact" className="btn-secondary">
              Request Custom Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}