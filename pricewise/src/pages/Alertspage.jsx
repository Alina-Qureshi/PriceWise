import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaEdit, FaTrash, FaBell, FaPause, FaPlay, FaPlus } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Alertspage = () => {
  const [alerts, setAlerts] = useState([]);
  const [sortBy, setSortBy] = useState('date');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample alert data
  const sampleAlerts = [
    {
      id: 1,
      productTitle: "Samsung Galaxy A54 5G",
      productImage: "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg",
      currentPrice: 64999,
      targetPrice: 60000,
      status: "active",
      createdAt: "2024-01-15",
      notificationType: "email"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-purple-800">Home</Link>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900">Price Alerts</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-purple-800">Price Alerts</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search alerts..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="triggered">Triggered</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            className="bg-purple-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors w-full md:w-auto justify-center"
            onClick={() => {/* Handle new alert */}}
          >
            <FaPlus /> Create New Alert
          </button>
        </div>

        {/* Alerts Grid */}
        {alerts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <FaBell className="mx-auto text-6xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Price Alerts Yet</h3>
            <p className="text-gray-500 mb-6">Start tracking prices by creating your first alert</p>
            <button
              className="bg-purple-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors mx-auto"
              onClick={() => {/* Handle new alert */}}
            >
              <FaPlus /> Create New Alert
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAlerts.map((alert) => (
              <div key={alert.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={alert.productImage}
                    alt={alert.productTitle}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{alert.productTitle}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-500">Current: Rs. {alert.currentPrice}</p>
                      <p className="text-sm text-gray-500">Target: Rs. {alert.targetPrice}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.status === 'active' ? 'bg-green-100 text-green-800' :
                    alert.status === 'triggered' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:text-purple-800 transition-colors">
                      <FaEdit />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
                      <FaTrash />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-purple-800 transition-colors">
                      {alert.status === 'active' ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Alertspage;