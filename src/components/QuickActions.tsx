
import React, { useState } from 'react';
import { AlertTriangle, FileText, Zap, HelpCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const QuickActions = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [challanNumber, setChallanNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleEmergency = () => {
    setActiveService('emergency');
  };

  const handleChallanCheck = () => {
    if (!challanNumber.trim()) return;
    // Mock challan analysis
    setActiveService('challan-result');
  };

  const handleEVSubsidy = () => {
    setActiveService('ev-subsidy');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quick Legal Actions</h2>
          <p className="text-gray-600">Get instant help with your legal needs</p>
        </div>

        {!activeService && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmergency}>
              <CardHeader className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Emergency Help</CardTitle>
                <CardDescription>Accident, theft, or urgent legal assistance</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Traffic Fine Helper</CardTitle>
                <CardDescription>Check, understand, and appeal traffic violations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    placeholder="Enter challan number"
                    value={challanNumber}
                    onChange={(e) => setChallanNumber(e.target.value)}
                  />
                  <Button onClick={handleChallanCheck} className="w-full bg-orange-600 hover:bg-orange-700">
                    Check Fine Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEVSubsidy}>
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">EV Subsidy Checker</CardTitle>
                <CardDescription>Check eligibility for electric vehicle benefits</CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}

        {activeService === 'emergency' && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Emergency Legal Assistance
              </CardTitle>
              <CardDescription>We're here to help you through this difficult time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Immediate Actions:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• If injured, call 108 (ambulance) immediately</li>
                    <li>• For police assistance, call 100</li>
                    <li>• Take photos of the scene if safe to do so</li>
                    <li>• Do not admit fault or sign any documents</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Services
                  </Button>
                  <Button variant="outline" onClick={() => setActiveService(null)}>
                    Generate FIR Draft
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeService === 'challan-result' && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-orange-600">Fine Analysis Results</CardTitle>
              <CardDescription>Challan Number: {challanNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Violation:</strong> Over-speeding</p>
                      <p><strong>Fine Amount:</strong> ₹1,000</p>
                      <p><strong>Location:</strong> MG Road, Bangalore</p>
                    </div>
                    <div>
                      <p><strong>Date:</strong> 15 Dec 2024</p>
                      <p><strong>Vehicle:</strong> KA01AB1234</p>
                      <p><strong>Status:</strong> Pending Payment</p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Pay Fine Online
                  </Button>
                  <Button variant="outline">
                    Generate Appeal Letter
                  </Button>
                </div>
                <Button variant="ghost" onClick={() => setActiveService(null)} className="w-full">
                  Check Another Fine
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeService === 'ev-subsidy' && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-green-600">EV Subsidy Eligibility</CardTitle>
              <CardDescription>Check your eligibility for electric vehicle benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your state (e.g., Delhi, Maharashtra)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Available Subsidies:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Central Govt: Up to ₹15,000 for 2-wheelers</li>
                    <li>• State Subsidy: Up to ₹5,000 additional</li>
                    <li>• Road Tax Exemption: 100% waiver</li>
                    <li>• Registration Fee: Waived</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Check Full Eligibility
                  </Button>
                  <Button variant="outline" onClick={() => setActiveService(null)}>
                    Back to Services
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuickActions;
