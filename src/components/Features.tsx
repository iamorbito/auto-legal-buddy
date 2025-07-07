
import React from 'react';
import { FileText, Shield, Smartphone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Instant Legal Drafts",
      description: "Generate FIR reports, appeal letters, and legal documents in minutes, not hours."
    },
    {
      icon: Shield,
      title: "Expert Legal Knowledge",
      description: "Access to comprehensive Indian traffic laws, motor vehicle acts, and state-specific regulations."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Use our service on the go - perfect for drivers, delivery partners, and fleet operators."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Legal emergencies don't wait for business hours. Neither do we."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AutoLegal Copilot?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering India's mobility ecosystem with accessible, accurate legal assistance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
