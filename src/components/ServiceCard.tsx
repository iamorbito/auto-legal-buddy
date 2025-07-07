
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  onClick: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, bgColor, textColor, onClick }: ServiceCardProps) => {
  return (
    <div 
      className={`${bgColor} ${textColor} p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="opacity-90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
