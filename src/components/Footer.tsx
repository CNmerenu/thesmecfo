import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  const footerSections = {
    services: [
      { href: "/services/investor-readiness", label: "Investor Readiness" },
      { href: "/services/financial-statements", label: "Financial Statements" },
      {
        href: "/services/performance-reporting",
        label: "Performance Reporting",
      },
      { href: "/services/tax-preparation", label: "Tax Preparation" },
    ],
    products: [
      { href: "/shop?category=templates", label: "Financial Templates" },
      { href: "/shop?category=courses", label: "Online Courses" },
      { href: "/shop?category=tools", label: "Business Tools" },
      { href: "/shop?category=guides", label: "Expert Guides" },
    ],
    resources: [
      { href: "/blog", label: "Blog" },
      { href: "/resources/free-training", label: "Free Training" },
      { href: "/resources/faqs", label: "FAQs" },
      { href: "/resources/calculators", label: "Free Calculators" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  };

  return (
    <footer className="bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/assets/logo-light.svg"
                alt="The SME CFO logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-dark-300 mb-6 max-w-md">
              Empowering African SMEs with enterprise-grade financial services.
              Professional CFO expertise made accessible and affordable.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/thesmecfo/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/thesmecfo/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </Link>
              <a
                href="https://www.instagram.com/thesmecfo/"
                target="_blank"
                className="text-dark-400 hover:text-secondary-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
            </div>
          </div>

          {Object.entries(footerSections).map(([sectionName, links]) => (
            <div key={sectionName}>
              <h3 className="font-semibold text-lg mb-4 capitalize">
                {sectionName}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-dark-300 hover:text-secondary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            © 2025 The SME CFO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-dark-400 hover:text-secondary-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-dark-400 hover:text-secondary-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
