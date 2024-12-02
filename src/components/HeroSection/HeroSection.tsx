import React from 'react';
import HeroContent from './HeroContent';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-500 via-green-400 to-teal-500 text-white min-h-screen flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1920x1080" // Replace with a relevant healthcare image
          alt="Healthcare"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start">
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroSection;
