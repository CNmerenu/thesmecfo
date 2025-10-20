"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cart, getTotalPrice, updateQuantity, removeFromCart, clearCart } =
    useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    country: "Nigeria",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const steps = [
    { number: 1, title: "Cart Review", completed: false },
    { number: 2, title: "Information", completed: false },
    { number: 3, title: "Payment", completed: false },
    { number: 4, title: "Confirmation", completed: false },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 3) {
        clearCart();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (cart.length === 0 && currentStep === 1) {
    return (
      <>
        <Header />
        <section className="py-20 bg-white flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-primary-500 mb-6">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-dark-600 mb-8">
              Add some products to get started
            </p>
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-primary-500 border-primary-500 text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-primary-500"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 ml-4 ${
                        currentStep > step.number
                          ? "bg-primary-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`grid gap-8 ${
              currentStep === 4 ? "lg:grid-cols-1" : "lg:grid-cols-3"
            }`}
          >
            {/* Main Content */}
            <div className={currentStep === 4 ? "" : "lg:col-span-2"}>
              <div className="bg-white rounded-lg shadow-soft p-8">
                {/* Step 1: Cart Review */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-6">
                      Review Your Order
                    </h2>
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-dark-700">
                              {item.title}
                            </h3>
                            <p className="text-secondary-500 font-medium">
                              ₦{item.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-3 py-1 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-3 py-1 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-8">
                      <Link href="/shop" className="btn-outline">
                        Continue Shopping
                      </Link>
                      <button onClick={nextStep} className="btn-primary">
                        Proceed to Information
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Customer Information */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-6">
                      Delivery Information
                    </h2>

                    <>
                      <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        nextStep();
                      }}>
                        <div>
                          <label className="block text-sm font-medium text-dark-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={customerInfo.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={customerInfo.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-dark-700 mb-2">
                            Company (Optional)
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={customerInfo.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-dark-700 mb-2">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>
                        <div className="flex justify-between mt-8">
                          <button type="button" onClick={prevStep} className="btn-outline">
                            Back to Cart
                          </button>
                          <button
                            type="submit"
                            className="btn-primary"
                          >
                            Continue to Payment
                          </button>
                        </div>
                      </form>
                    </>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-6">
                      Payment Method
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div className="border border-gray-300 rounded-lg p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="mr-3"
                          />
                          <div className="flex items-center">
                            <span className="font-medium">
                              Credit/Debit Card
                            </span>
                            <div className="ml-4 flex space-x-2">
                              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                                VISA
                              </div>
                              <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">
                                MC
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="border border-gray-300 rounded-lg p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="payment"
                            value="bank"
                            checked={paymentMethod === "bank"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="mr-3"
                          />
                          <span className="font-medium">Bank Transfer</span>
                        </label>
                      </div>

                      <div className="border border-gray-300 rounded-lg p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="payment"
                            value="paystack"
                            checked={paymentMethod === "paystack"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="mr-3"
                          />
                          <span className="font-medium">
                            Paystack (Recommended)
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-success-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-success-700 text-sm">
                          Your payment information is secure and encrypted
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button onClick={prevStep} className="btn-outline">
                        Back to Information
                      </button>
                      <button onClick={nextStep} className="btn-primary">
                        Complete Order
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-success-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-4">
                      Order Confirmed!
                    </h2>
                    <p className="text-lg text-dark-600 mb-6">
                      Thank you for your purchase. You will receive an email
                      with your download links shortly.
                    </p>
                    <div className="space-y-4">
                      <Link href="/shop" className="btn-primary">
                        Continue Shopping
                      </Link>
                      <Link href="/contact" className="btn-outline ml-4">
                        Contact Support
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar - Hidden on confirmation page */}
            {currentStep !== 4 && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-soft p-6 sticky top-8">
                  <h3 className="text-lg font-bold text-primary-500 mb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-dark-600">
                          {item.title} × {item.quantity}
                        </span>
                        <span className="font-medium">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₦{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT (7.5%)</span>
                      <span>
                        ₦{Math.round(getTotalPrice() * 0.075).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total</span>
                      <span className="text-secondary-500">
                        ₦{Math.round(getTotalPrice() * 1.075).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center text-sm text-dark-500 mb-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Secure Checkout
                    </div>
                    <p className="text-xs text-dark-400">
                      30-day money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
