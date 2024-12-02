import React from 'react';

interface HeroButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, variant }) => {
  const buttonClasses =
    variant === 'primary'
      ? 'bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md font-medium'
      : 'bg-transparent border border-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-medium';

  return <button className={`transition-all duration-300 ${buttonClasses}`}>{label}</button>;
};

export default HeroButton;
