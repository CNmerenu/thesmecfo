import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Users, Briefcase, Heart, Zap } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      id: "senior-financial-analyst",
      title: "Senior Financial Analyst",
      location: "Lagos, Nigeria",
      type: "Full-time",
      department: "Finance",
      description: "Lead financial analysis and reporting for our growing portfolio of SME clients across West Africa.",
      requirements: ["5+ years financial analysis experience", "CPA or ACCA qualification", "Advanced Excel skills", "SME experience preferred"],
      posted: "2 days ago"
    },
    {
      id: "business-development-manager",
      title: "Business Development Manager",
      location: "Abuja, Nigeria",
      type: "Full-time", 
      department: "Sales",
      description: "Drive business growth by identifying and developing relationships with potential SME clients.",
      requirements: ["3+ years B2B sales experience", "Strong network in Nigerian business community", "Excellent communication skills", "Results-driven mindset"],
      posted: "1 week ago"
    },
    {
      id: "tax-compliance-specialist",
      title: "Tax Compliance Specialist",
      location: "Remote",
      type: "Contract",
      department: "Tax",
      description: "Provide expert tax compliance services to our SME clients, ensuring adherence to Nigerian tax regulations.",
      requirements: ["Tax qualification (CITN)", "5+ years tax compliance experience", "Knowledge of Nigerian tax laws", "Detail-oriented approach"],
      posted: "3 days ago"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family"
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement paths"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive, inclusive environment"
    },
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Hybrid work options and flexible schedules to support work-life balance"
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Join our team at The SME CFO"
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Join Our Team</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Help us empower African SMEs with world-class financial expertise. Build your career while making a meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Why Work With Us?</h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                At The SME CFO, you'll be part of a mission-driven team that's transforming how African businesses access financial expertise. We're building the future of SME finance, and we want passionate professionals to join us.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                Whether you're an experienced financial professional or an ambitious graduate, we offer opportunities to grow, learn, and make a real difference in the African business ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="card p-6 text-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-primary-500 mb-2">{benefit.title}</h3>
                    <p className="text-dark-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">Current Openings</h2>
              <p className="text-lg text-dark-600">
                Explore opportunities to join our growing team
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="card p-8 hover:scale-105 transition-transform duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <span className="text-secondary-500">Posted {job.posted}</span>
                      </div>
                    </div>
                    <Link href={`/careers/${job.id}`} className="btn-primary mt-4 lg:mt-0">
                      Apply Now
                    </Link>
                  </div>

                  <p className="text-dark-600 mb-6 leading-relaxed">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-primary-500 mb-3">Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-dark-600 text-sm">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-large p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-dark-600 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for empowering African SMEs. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Link href="/contact" className="btn-secondary">
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}