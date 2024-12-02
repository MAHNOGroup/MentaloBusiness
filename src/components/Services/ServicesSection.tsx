import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Primary Care',
    description:
      'Comprehensive medical care for individuals and families, ensuring your health is our priority.',
    icon: '🩺', // Placeholder for a stethoscope icon
  },
  {
    title: 'Specialist Consultation',
    description:
      'Expert consultations across various specialties to address your unique healthcare needs.',
    icon: '👨‍⚕️', // Placeholder for a healthcare professional icon
  },
  {
    title: 'Diagnostics',
    description:
      'Accurate and timely diagnostic services to guide effective treatment plans.',
    icon: '🔬', // Placeholder for a microscope icon
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-green-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-700">
          Providing top-quality healthcare solutions designed to meet your needs.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
