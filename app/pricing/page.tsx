"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 99,
    description: "Perfect for getting started with mentorship",
    features: [
      "2 hours of 1:1 mentorship per month",
      "Access to mentor matching",
      "Basic resource library",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: 199,
    description: "Most popular for career acceleration",
    features: [
      "5 hours of 1:1 mentorship per month",
      "Priority mentor matching",
      "Full resource library access",
      "Career roadmap planning",
      "Resume review",
      "Priority email & chat support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 499,
    description: "For teams and organizations",
    features: [
      "15 hours of 1:1 mentorship per month",
      "Custom mentor matching",
      "Full resource library access",
      "Team workshops",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom training programs",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for your career goals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 ${plan.highlighted ? 'border-2 border-green-500 shadow-xl' : ''}`}>
                {plan.highlighted && (
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold">${plan.price}</div>
                  <div className="text-gray-600">per month</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need a custom plan?</h3>
          <p className="text-gray-600 mb-6">
            Contact us for custom pricing and plans for your organization
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </main>
  );
}