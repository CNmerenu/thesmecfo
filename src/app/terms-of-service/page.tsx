import Header from "@/components/Header";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-dark-600 mb-8">
              <strong>Effective Date:</strong> August 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  By accessing and using The SME CFO website and services, you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-dark-600 leading-relaxed mb-4">
                  The SME CFO provides professional financial services including
                  but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-dark-600">
                  <li>Financial statement preparation and analysis</li>
                  <li>Tax planning and compliance services</li>
                  <li>Business performance reporting</li>
                  <li>Financial advisory and consulting</li>
                  <li>Investor readiness preparation</li>
                  <li>Digital financial resources and templates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-dark-600 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-dark-600">
                  <li>Provide accurate and complete information</li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  4. Payment Terms
                </h2>
                <div className="space-y-4">
                  <p className="text-dark-600 leading-relaxed">
                    Payment for services is due as specified in your service
                    agreement. We accept various payment methods as indicated on
                    our website.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    All fees are non-refundable unless otherwise specified. We
                    reserve the right to suspend or terminate services for
                    non-payment.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  All content, materials, and intellectual property on our
                  website and in our services remain the property of The SME
                  CFO. You may not reproduce, distribute, or create derivative
                  works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  6. Confidentiality
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  We maintain strict confidentiality regarding all client
                  information and business data. We will not disclose your
                  confidential information to third parties without your
                  consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  The SME CFO shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  8. Professional Standards
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  Our services are provided in accordance with generally
                  accepted accounting principles and professional standards.
                  However, you acknowledge that business and financial decisions
                  remain your responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  9. Termination
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  Either party may terminate the service agreement with
                  appropriate notice as specified in your service contract. Upon
                  termination, you remain responsible for all fees incurred up
                  to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  10. Governing Law
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  These terms shall be governed by and construed in accordance
                  with the laws of Nigeria. Any disputes arising under these
                  terms shall be subject to the exclusive jurisdiction of
                  Nigerian courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes via email or website
                  notice. Continued use of our services constitutes acceptance
                  of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  12. Contact Information
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  For questions regarding these Terms of Service, please contact
                  us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-dark-600">
                    <strong>The SME CFO</strong>
                    <br />
                    Email: info@thesmecfo.co
                    <br />
                    Address: Lagos, Nigeria
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
