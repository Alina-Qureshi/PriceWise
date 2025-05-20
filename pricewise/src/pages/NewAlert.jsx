import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBell } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NewAlert = () => {
  const [productUrl, setProductUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [alertName, setAlertName] = useState('');
  const [notificationType, setNotificationType] = useState('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-purple-800 hover:text-purple-600">
              <FaArrowLeft className="text-xl" />
            </Link>
            <h1 className="text-3xl font-bold text-purple-800">Create New Alert</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <FaBell className="text-5xl text-purple-800" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product URL
              </label>
              <input
                type="url"
                placeholder="Paste product URL here"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Alert Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Give your alert a name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={alertName}
                onChange={(e) => setAlertName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Target Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">Rs.</span>
                <input
                  type="number"
                  placeholder="Enter your desired price"
                  className="w-full px-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Notification Type
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={notificationType}
                onChange={(e) => setNotificationType(e.target.value)}
              >
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="both">Both Email & SMS</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Create Alert
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>We'll notify you when the price drops to your target price</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewAlert;