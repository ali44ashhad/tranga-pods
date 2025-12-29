import React from 'react';
import { Package, CreditCard, PackageOpen, MapPin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Find a Pod",
      description: "Locate a Tranga Pod machine in your area using our location finder."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Select Product",
      description: "Choose your desired product from the touchscreen interface."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Make Payment",
      description: "Complete your purchase using the card reader."
    },
    {
      icon: <PackageOpen className="w-6 h-6" />,
      title: "Collect Product",
      description: "Retrieve your product from the dispensing area."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            How Tranga Pods Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tranga Pods are self-service machines that provide products in convenient locations. 
            Here's what you need to know about using them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                <div className="text-blue-600">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium text-center mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-4 text-gray-900">
            Important Notes About Using Tranga Pods
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Machines are fully automated with no on-site staff</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>All transactions are processed electronically</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Products are dispensed immediately after payment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>If a product doesn't dispense, contact support with transaction details</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;