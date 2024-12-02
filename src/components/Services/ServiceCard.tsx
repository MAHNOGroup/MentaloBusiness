import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Placeholder for actual icons or images
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-50 shadow-md rounded-xl p-8 hover:shadow-lg hover:scale-105 transform transition-all duration-300">
      {/* Icon */}
      <div className="text-5xl text-green-600 mb-6">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-green-900">{title}</h3>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
