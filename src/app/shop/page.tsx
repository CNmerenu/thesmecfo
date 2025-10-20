"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const capitalizedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      const validCategories = ["All", "Templates", "Guides", "Tools", "Courses"];
      if (validCategories.includes(capitalizedCategory)) {
        setSelectedCategory(capitalizedCategory);
      }
    }
  }, [searchParams]);
  const products: Product[] = [
    {
      id: "1",
      title: "Financial Planning Template Bundle",
      slug: "financial-planning-template-bundle",
      description:
        "Comprehensive Excel templates for budgeting, cash flow forecasting, and financial planning.",
      price: 15000,
      originalPrice: 25000,
      features: [
        "Budget Templates",
        "Cash Flow Models",
        "Financial Dashboards",
        "KPI Trackers",
      ],
      category: "Templates",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "2",
      title: "SME Tax Compliance Guide",
      slug: "sme-tax-compliance-guide",
      description:
        "Complete guide to Nigerian tax compliance for small and medium enterprises.",
      price: 8000,
      features: [
        "Tax Calendar",
        "Compliance Checklist",
        "Form Templates",
        "Expert Tips",
      ],
      category: "Guides",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "3",
      title: "Business Financial Health Audit",
      slug: "business-financial-health-audit",
      description:
        "Self-assessment tool to evaluate your business's financial health and identify improvement areas.",
      price: 12000,
      features: [
        "Assessment Framework",
        "Scoring System",
        "Action Plan Template",
        "Best Practices",
      ],
      category: "Tools",
      rating: 4.7,
      reviews: 67,
    },
    {
      id: "4",
      title: "Investor Pitch Deck Template",
      slug: "investor-pitch-deck-template",
      description:
        "Professional presentation template designed for African SMEs seeking investment.",
      price: 10000,
      features: [
        "PowerPoint Template",
        "Financial Slides",
        "Market Analysis",
        "Design Guidelines",
      ],
      category: "Templates",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: "5",
      title: "Cash Flow Management Masterclass",
      slug: "cash-flow-management-masterclass",
      description:
        "Video course on mastering cash flow management for sustainable business growth.",
      price: 35000,
      originalPrice: 50000,
      features: [
        "4 Hours of Video",
        "Workbook Included",
        "Case Studies",
        "Certificate",
      ],
      category: "Courses",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: "6",
      title: "Financial Ratios Calculator",
      slug: "financial-ratios-calculator",
      description:
        "Excel-based calculator for analyzing key financial ratios and business performance.",
      price: 6000,
      features: [
        "Automated Calculations",
        "Ratio Analysis",
        "Benchmarking",
        "Visual Charts",
      ],
      category: "Tools",
      rating: 4.5,
      reviews: 78,
    },
  ];

  const categories = ["All", "Templates", "Guides", "Tools", "Courses"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      slug: product.slug,
      price: product.price,
      originalPrice: product.originalPrice,
    });
  };

  return (
    <>
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Shop Hero Image */}
            <div className="w-full max-w-3xl mx-auto h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Financial resources and business tools" 
                width={1000}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Financial Resources Shop</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Professional templates, guides, and tools to empower your business
              financial management
            </p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border-2 border-primary-500 transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-500 text-white"
                      : "text-primary-500 hover:bg-primary-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {getTotalItems() > 0 && (
              <div className="bg-primary-500 text-white px-4 py-2 rounded-lg">
                Cart: {getTotalItems()} items - ₦
                {getTotalPrice().toLocaleString()}
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-transform duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-sm text-dark-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    {product.originalPrice && (
                      <span className="bg-danger-100 text-danger-700 px-2 py-1 rounded text-xs font-medium">
                        SALE
                      </span>
                    )}
                  </div>
                </div>

                <Link href={`/shop/${product.slug}`} className="block">
                  <h3 className="text-xl font-bold text-primary-500 mb-3 group-hover:text-primary-600 cursor-pointer">
                    {product.title}
                  </h3>

                  <p className="text-dark-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-500 mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-dark-600 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-success-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-secondary-500">
                        ₦{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-dark-400 line-through ml-2">
                          ₦{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="mt-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="btn-primary hover:scale-105 transition-transform w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded-lg shadow-large p-6 max-w-md">
            <h3 className="font-bold text-primary-500 mb-4">Shopping Cart</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex-1">
                    <p className="font-medium text-dark-700 truncate">
                      {item.title}
                    </p>
                    <p className="text-secondary-500">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-gray-200 rounded text-xs hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-gray-200 rounded text-xs hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span className="text-secondary-500">
                  ₦{getTotalPrice().toLocaleString()}
                </span>
              </div>
              <div className="space-y-2">
                <Link
                  href="/checkout"
                  className="w-full btn-primary text-center block"
                >
                  Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full btn-outline text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-dark-600 mb-8">
            Can't find what you're looking for? We create custom financial
            templates and tools tailored to your specific business needs.
          </p>

          <a href="/contact" className="btn-secondary">
            Request Custom Solution
          </a>
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
