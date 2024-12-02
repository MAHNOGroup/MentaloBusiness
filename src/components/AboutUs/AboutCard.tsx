import React from 'react';

interface AboutCardProps {
  title: string;
  description: string;
  icon: string; // Placeholder for actual icons or images
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon */}
      <div className="text-5xl text-green-600">{icon}</div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold text-green-900">{title}</h3>
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
