import React from 'react';
import AboutCard from './AboutCard';

const aboutDetails = [
  {
    title: 'Our Mission',
    description:
      'To provide compassionate, innovative healthcare solutions for individuals and families worldwide.',
    icon: '🩺',
  },
  {
    title: 'Our Vision',
    description:
      'A healthier tomorrow driven by cutting-edge medical care and patient-centered services.',
    icon: '🌍',
  },
  {
    title: 'Our Values',
    description:
      'Empathy, Integrity, and Excellence are the principles that guide our every step.',
    icon: '💚',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-green-900">About Us</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Discover our commitment to providing exceptional healthcare services
            and making a meaningful impact on the communities we serve.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Text Section */}
          <div className="flex-1 space-y-8">
            {aboutDetails.map((detail, index) => (
              <AboutCard
                key={index}
                title={detail.title}
                description={detail.description}
                icon={detail.icon}
              />
            ))}
          </div>

          {/* Image Section */}
          <div className="flex-1 mt-12 lg:mt-0">
            <img
              src="https://via.placeholder.com/600x400" // Replace with relevant healthcare image
              alt="Healthcare professionals"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
