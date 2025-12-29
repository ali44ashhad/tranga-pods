import React from 'react';

const PageIntro = () => {
  return (
    <section id="intro" className="pt-20 pb-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Tranga Pods Information & Support
          </h1>
          <div className="h-1 w-20 bg-blue-500 mb-6"></div>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            This page provides guidance, safety information, and support for people who 
            encounter Tranga Pods in real life. Here you can understand how the system works, 
            find nearby locations, and get assistance if needed.
          </p>
          
          <div className="bg-blue-50 border border-blue-100 p-4 rounded">
            <p className="text-blue-800 font-medium">
              Important: This is not a sales or marketing page. The goal is to provide 
              clarity and guidance for users of Tranga Pod machines.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded">
            <div className="text-blue-600 font-medium mb-1">Guidance</div>
            <div className="text-sm text-gray-600">How to use Tranga Pods</div>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded">
            <div className="text-blue-600 font-medium mb-1">Safety</div>
            <div className="text-sm text-gray-600">Important information</div>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded">
            <div className="text-blue-600 font-medium mb-1">Support</div>
            <div className="text-sm text-gray-600">Get assistance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;