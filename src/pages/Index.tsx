
import React from 'react';
import Header from '@/components/Header';
import QuickActions from '@/components/QuickActions';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Legal Rights,
              <span className="text-blue-600"> Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant legal help for traffic fines, accidents, EV subsidies, and compliance issues. 
              Built for India's drivers, gig workers, and vehicle owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-sm text-gray-600">✅ Available in Hindi & English</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-sm text-gray-600">⚡ Instant Legal Drafts</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-sm text-gray-600">🛡️ Expert Legal Knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickActions />
      <Features />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don't Let Legal Issues Slow You Down
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of drivers and gig workers who trust AutoLegal Copilot 
              for their legal needs. Get started in seconds.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">50,000+</h3>
                <p className="text-blue-100">Legal Documents Generated</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">₹2.5 Cr+</h3>
                <p className="text-blue-100">Fines Successfully Appealed</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">Emergency Legal Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
