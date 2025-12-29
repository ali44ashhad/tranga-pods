import React from 'react';
import { AlertTriangle, Shield, Users, Clock } from 'lucide-react';

const SafetyGuidance = () => {
  return (
    <section id="safety" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-light text-gray-900">
            Safety & Responsibility
          </h2>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Important Safety Information
              </h3>
              <p className="text-blue-800 mb-3">
                For your safety and the safety of others, please follow these guidelines.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Product Safety</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep all products out of reach of children</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow all product instructions and warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Store products appropriately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Products are for personal use only</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Machine Safety</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Do not attempt to tamper with machines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Report damaged machines immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use machines only as intended</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Be aware of your surroundings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-gray-700" />
              <h3 className="font-medium text-gray-900">Public Locations</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Tranga Pods are placed in publicly accessible locations. 
              Machines are installed only in authorized venues with proper permissions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-700" />
              <h3 className="font-medium text-gray-900">Maintenance</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All machines are monitored and serviced regularly. 
              If you encounter a machine that needs attention, please report it through our support system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuidance;