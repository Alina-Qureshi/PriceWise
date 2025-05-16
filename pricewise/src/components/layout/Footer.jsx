import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold"> PriceWise</h2>
            <p className="text-gray-300">
              Monitor price changes and save more on your shopping. Never miss a deal again!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/alerts" className="text-gray-300 hover:text-white transition-colors">Alerts</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <a href="mailto:support@priceciren.com" className="text-gray-300 hover:text-white transition-colors">
              support@priceWise.com
            </a>
            <p className="mt-4 text-gray-300">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-gray-300">
          <p>© {new Date().getFullYear()} PriceWise. All rights reserved.</p>
          <p className="mt-2 text-sm"> All product names, logos, and brands are property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


