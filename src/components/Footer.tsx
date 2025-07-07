
import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">AutoLegal Copilot</h3>
                <p className="text-gray-400 text-sm">AI Legal Assistant for Indian Roads</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Making legal help accessible for gig workers, drivers, and vehicle owners across India. 
              Get instant assistance with traffic fines, accidents, and compliance issues.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@autolegal.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-LEGAL-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available across India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Traffic Fine Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accident Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EV Subsidies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Motor Vehicle Act</a></li>
              <li><a href="#" className="hover:text-white transition-colors">State Traffic Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance Claims</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Contacts</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 AutoLegal Copilot. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2">
            <strong>Disclaimer:</strong> This service provides legal information and assistance. 
            For complex legal matters, please consult with a qualified lawyer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
