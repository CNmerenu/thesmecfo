"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { use, useState } from "react";
import { ArrowLeft, Upload, User, Mail, Phone, MapPin } from "lucide-react";

const jobData = {
  "senior-financial-analyst": {
    title: "Senior Financial Analyst",
    location: "Lagos, Nigeria",
    type: "Full-time",
    department: "Finance",
    description: "Lead financial analysis and reporting for our growing portfolio of SME clients across West Africa.",
    requirements: ["5+ years financial analysis experience", "CPA or ACCA qualification", "Advanced Excel skills", "SME experience preferred"],
    responsibilities: [
      "Conduct comprehensive financial analysis for SME clients",
      "Prepare detailed financial reports and presentations",
      "Develop financial models and forecasting tools",
      "Collaborate with client teams to improve financial processes",
      "Mentor junior analysts and support team development"
    ]
  },
  "business-development-manager": {
    title: "Business Development Manager",
    location: "Abuja, Nigeria",
    type: "Full-time",
    department: "Sales",
    description: "Drive business growth by identifying and developing relationships with potential SME clients.",
    requirements: ["3+ years B2B sales experience", "Strong network in Nigerian business community", "Excellent communication skills", "Results-driven mindset"],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain relationships with key stakeholders",
      "Develop and execute sales strategies",
      "Collaborate with delivery teams to ensure client satisfaction",
      "Achieve monthly and quarterly sales targets"
    ]
  },
  "tax-compliance-specialist": {
    title: "Tax Compliance Specialist",
    location: "Remote",
    type: "Contract",
    department: "Tax",
    description: "Provide expert tax compliance services to our SME clients, ensuring adherence to Nigerian tax regulations.",
    requirements: ["Tax qualification (CITN)", "5+ years tax compliance experience", "Knowledge of Nigerian tax laws", "Detail-oriented approach"],
    responsibilities: [
      "Prepare and review tax returns for SME clients",
      "Ensure compliance with Nigerian tax regulations",
      "Provide tax advisory services and planning",
      "Stay updated on tax law changes and implications",
      "Support clients during tax audits and investigations"
    ]
  }
};

export default function JobApplicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const job = jobData[id as keyof typeof jobData];
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    expectedSalary: "",
    startDate: "",
    coverLetter: "",
    linkedIn: ""
  });

  if (!job) {
    return (
      <>
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-primary-500 mb-4">Job Not Found</h1>
          <Link href="/careers" className="btn-primary">Back to Careers</Link>
        </div>
      </>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll be in touch soon.");
  };

  return (
    <>
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/careers" className="flex items-center text-primary-500 hover:text-primary-600 font-medium mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers
            </Link>
            
            <div className="bg-white rounded-2xl shadow-large p-8 mb-8">
              <h1 className="text-3xl font-bold text-primary-500 mb-4">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full">
                  {job.department}
                </span>
              </div>
              
              <p className="text-dark-600 mb-6 leading-relaxed">{job.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-primary-500 mb-3">Requirements:</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-dark-600 text-sm">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-primary-500 mb-3">Responsibilities:</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-dark-600 text-sm">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-large p-8">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">Apply for this Position</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Current Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="City, Country"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Years of Experience *</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Expected Salary (₦)</label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., 500,000 - 800,000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Available Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <Upload className="w-4 h-4 inline mr-1" />
                    Upload CV/Resume *
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  <p className="text-xs text-dark-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Upload Cover Letter</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  <p className="text-xs text-dark-500 mt-1">Optional - PDF, DOC, or DOCX</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Cover Letter / Why are you interested in this role? *</label>
                <textarea
                  name="coverLetter"
                  required
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us why you're the perfect fit for this role..."
                />
              </div>

              <div className="flex items-center justify-between pt-6">
                <p className="text-sm text-dark-500">* Required fields</p>
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}