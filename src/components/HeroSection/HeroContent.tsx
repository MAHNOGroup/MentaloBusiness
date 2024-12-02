import React from 'react';
import HeroButton from './HeroButton';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-2xl space-y-6">
      {/* Title */}
      <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
        Compassionate Healthcare <br /> Tailored for You
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg lg:text-xl text-gray-100 leading-relaxed">
        We are committed to providing top-quality care and services that put
        your well-being first. Discover how we can make a difference in your
        life today.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <HeroButton label="Book an Appointment" variant="primary" />
        <HeroButton label="Learn More" variant="secondary" />
      </div>
    </div>
  );
};

export default HeroContent;
