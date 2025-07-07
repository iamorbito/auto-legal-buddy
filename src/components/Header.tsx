
import React from 'react';
import { Scale, Car, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-full">
              <Scale className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AutoLegal Copilot</h1>
              <p className="text-blue-100 text-sm">Your AI Legal Assistant for Indian Roads</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
              <Car className="h-4 w-4" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Trusted Legal Help</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
