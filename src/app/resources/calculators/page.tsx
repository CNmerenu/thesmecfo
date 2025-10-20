"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, PieChart } from "lucide-react";

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculators = [
    {
      id: "cash-flow",
      title: "Cash Flow Calculator",
      description: "Project your business cash flow and identify potential shortfalls",
      icon: TrendingUp,
      color: "primary"
    },
    {
      id: "break-even",
      title: "Break-Even Analysis",
      description: "Calculate how much you need to sell to cover all your costs",
      icon: DollarSign,
      color: "secondary"
    },
    {
      id: "loan-calculator",
      title: "Business Loan Calculator",
      description: "Calculate monthly payments and total interest for business loans",
      icon: Calculator,
      color: "accent"
    },
    {
      id: "roi-calculator",
      title: "ROI Calculator",
      description: "Measure the return on investment for your business projects",
      icon: PieChart,
      color: "success"
    }
  ];

  const CashFlowCalculator = () => {
    const [revenue, setRevenue] = useState("");
    const [expenses, setExpenses] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
      const rev = parseFloat(revenue) || 0;
      const exp = parseFloat(expenses) || 0;
      setResult(rev - exp);
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-soft">
        <h3 className="text-xl font-bold text-primary-500 mb-4">Cash Flow Calculator</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">Monthly Revenue (₦)</label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="Enter monthly revenue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">Monthly Expenses (₦)</label>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="Enter monthly expenses"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">
            Calculate Cash Flow
          </button>
          {result !== null && (
            <div className={`p-4 rounded-lg ${result >= 0 ? 'bg-success-100 text-success-700' : 'bg-danger-100 text-danger-700'}`}>
              <p className="font-semibold">
                Net Cash Flow: ₦{result.toLocaleString()}
              </p>
              <p className="text-sm mt-1">
                {result >= 0 ? 'Positive cash flow - your business is generating cash!' : 'Negative cash flow - review your expenses or increase revenue.'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const BreakEvenCalculator = () => {
    const [fixedCosts, setFixedCosts] = useState("");
    const [variableCost, setVariableCost] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
      const fixed = parseFloat(fixedCosts) || 0;
      const variable = parseFloat(variableCost) || 0;
      const price = parseFloat(sellingPrice) || 0;
      
      if (price > variable) {
        setResult(fixed / (price - variable));
      } else {
        setResult(null);
      }
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-soft">
        <h3 className="text-xl font-bold text-secondary-500 mb-4">Break-Even Analysis</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">Fixed Costs (₦)</label>
            <input
              type="number"
              value={fixedCosts}
              onChange={(e) => setFixedCosts(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500"
              placeholder="Rent, salaries, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">Variable Cost per Unit (₦)</label>
            <input
              type="number"
              value={variableCost}
              onChange={(e) => setVariableCost(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500"
              placeholder="Materials, labor per unit"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">Selling Price per Unit (₦)</label>
            <input
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500"
              placeholder="Price you sell each unit"
            />
          </div>
          <button onClick={calculate} className="btn-secondary w-full">
            Calculate Break-Even Point
          </button>
          {result !== null && (
            <div className="p-4 rounded-lg bg-secondary-100 text-secondary-700">
              <p className="font-semibold">
                Break-Even Point: {Math.ceil(result)} units
              </p>
              <p className="text-sm mt-1">
                You need to sell {Math.ceil(result)} units to cover all costs.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-full max-w-4xl mx-auto h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Free financial calculators"
                width={1200}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="section-heading mb-6">Free Financial Calculators</h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Use our professional-grade calculators to make informed financial decisions for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(activeCalculator === calc.id ? null : calc.id)}
                  className={`card p-6 text-center hover:scale-105 transition-transform duration-200 ${
                    activeCalculator === calc.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <div className={`w-16 h-16 bg-${calc.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-2">{calc.title}</h3>
                  <p className="text-dark-600 text-sm">{calc.description}</p>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activeCalculator === 'cash-flow' && <CashFlowCalculator />}
            {activeCalculator === 'break-even' && <BreakEvenCalculator />}
            {activeCalculator === 'loan-calculator' && (
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-bold text-accent-600 mb-4">Business Loan Calculator</h3>
                <p className="text-dark-600">Coming soon - Calculate loan payments and interest.</p>
              </div>
            )}
            {activeCalculator === 'roi-calculator' && (
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-bold text-success-500 mb-4">ROI Calculator</h3>
                <p className="text-dark-600">Coming soon - Measure return on investment.</p>
              </div>
            )}
          </div>

          {!activeCalculator && (
            <div className="text-center py-12">
              <p className="text-dark-500 text-lg">Select a calculator above to get started</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}