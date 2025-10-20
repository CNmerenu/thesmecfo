import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-dark-600 mb-8">
              <strong>Effective Date:</strong> August 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  1. Introduction
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  The SME CFO ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-500 mb-2">
                      Personal Information
                    </h3>
                    <p className="text-dark-600 leading-relaxed">
                      We may collect personal information such as your name,
                      email address, phone number, business information, and
                      financial data when you register for our services, make
                      purchases, or contact us.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-500 mb-2">
                      Usage Information
                    </h3>
                    <p className="text-dark-600 leading-relaxed">
                      We automatically collect information about how you use our
                      website, including your IP address, browser type, pages
                      visited, and time spent on our site.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-dark-600">
                  <li>Provide and maintain our CFO services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information and service updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  4. Information Sharing
                </h2>
                <p className="text-dark-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-dark-600">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>
                    With trusted service providers who assist in our operations
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  5. Data Security
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100%
                  secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-dark-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-dark-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  7. Cookies
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control cookie
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">
                  9. Contact Us
                </h2>
                <p className="text-dark-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-dark-600">
                    <strong>The SME CFO</strong>
                    <br />
                    Email: info@thesmecfo.co
                    <br />
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
