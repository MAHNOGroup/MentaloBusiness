import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-green-600">Your Company</h2>
            <p className="text-gray-600 mt-2 max-w-sm">
              Empowering businesses with innovative solutions. We’re here to help you grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="text-gray-600">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-green-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12C22 5.373 17.627 1 12 1S2 5.373 2 12c0 5.989 4.388 10.95 10 11.875V14.5H8.5v-3H12V9.5c0-3.5 2.143-5.5 5.246-5.5 1.5 0 2.754.112 3.124.163v3.624h-2.15c-1.692 0-2.03.805-2.03 1.985v2.124h4.06l-.531 3H16.19v9.375c5.612-.925 10-5.886 10-11.875z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-green-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.902 9.902 0 01-2.828.775 4.936 4.936 0 002.165-2.723 9.862 9.862 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.952 13.952 0 01-10.141-5.145 4.822 4.822 0 00-.665 2.475c0 1.708.869 3.216 2.191 4.096a4.906 4.906 0 01-2.231-.616v.061a4.92 4.92 0 003.946 4.827 4.9 4.9 0 01-2.224.084 4.93 4.93 0 004.6 3.417 9.868 9.868 0 01-6.102 2.105c-.396 0-.79-.023-1.175-.067a13.945 13.945 0 007.548 2.213c9.057 0 14.001-7.496 14.001-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-green-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.452 20.452H16.905V14.768c0-1.356-.028-3.104-1.893-3.104-1.896 0-2.186 1.482-2.186 3.008v5.78h-3.545V9h3.4v1.561h.049c.474-.898 1.635-1.843 3.367-1.843 3.602 0 4.267 2.371 4.267 5.457v6.277zM5.337 7.432c-1.141 0-2.063-.923-2.063-2.063S4.196 3.305 5.337 3.305c1.141 0 2.063.923 2.063 2.063S6.478 7.432 5.337 7.432zM6.766 20.452H3.909V9h2.857v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.728v20.543c0 .957.792 1.728 1.771 1.728h20.451c.98 0 1.772-.771 1.772-1.728V1.728C23.997.771 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
