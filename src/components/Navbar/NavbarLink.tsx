import React from 'react';

interface NavbarLinkProps {
  label: string;
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium"
    >
      {label}
    </a>
  );
};

export default NavbarLink;
