import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Start Saving on Your Shopping Today
        </h2>
        <p className="text-white text-lg mb-8">
          Join thousands of smart shoppers who never miss a deal and always get the best price.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 bg-white text-purple-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
        >
          Start Tracking Prices
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;