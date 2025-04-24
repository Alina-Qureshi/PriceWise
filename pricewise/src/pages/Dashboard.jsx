import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBell, FaPiggyBank, FaPause, FaPlus, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Dashboard = () => {
  // Sample data - replace with actual data
  const stats = {
    trackedProducts: 12,
    triggeredAlerts: 5,
    potentialSavings: 15000,
    inactiveAlerts: 3
  };

  const recentActivity = [
    {
      id: 1,
      product: "Redmi Note 12",
      oldPrice: 54000,
      newPrice: 49999,
      timestamp: "2 hours ago"
    }
  ];

  const trackedProducts = [
    {
      id: 1,
      title: "Samsung Galaxy A54 5G",
      image: "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg",
      currentPrice: 64999,
      targetPrice: 60000,
      status: "active",
      priceChange: -5.2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Alina!</p>
            </div>
            <Link to="/settings" className="text-purple-800 hover:text-purple-600">Account Settings</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <FaShoppingCart className="text-3xl text-purple-800" />
              <div>
                <p className="text-gray-600">Tracked Products</p>
                <h3 className="text-2xl font-bold">{stats.trackedProducts}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <FaBell className="text-3xl text-purple-800" />
              <div>
                <p className="text-gray-600">Alerts Triggered</p>
                <h3 className="text-2xl font-bold">{stats.triggeredAlerts}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <FaPiggyBank className="text-3xl text-purple-800" />
              <div>
                <p className="text-gray-600">Potential Savings</p>
                <h3 className="text-2xl font-bold">Rs. {stats.potentialSavings}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <FaPause className="text-3xl text-purple-800" />
              <div>
                <p className="text-gray-600">Inactive Alerts</p>
                <h3 className="text-2xl font-bold">{stats.inactiveAlerts}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Tracked Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            {recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{activity.product}</p>
                      <p className="text-sm text-gray-600">
                        Price dropped from Rs. {activity.oldPrice} to Rs. {activity.newPrice}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                    <FaChevronRight className="text-gray-400" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No recent activity</p>
            )}
          </div>

          {/* Tracked Products */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Tracked Products</h2>
            {trackedProducts.length > 0 ? (
              <div className="space-y-4">
                {trackedProducts.map(product => (
                  <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium line-clamp-1">{product.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">Rs. {product.currentPrice}</span>
                        <span className="text-xs text-green-600">{product.priceChange}%</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'active' ? 'bg-green-100 text-green-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <Link 
                      to={`/alerts/${product.id}`}
                      className="text-purple-800 hover:text-purple-600"
                    >
                      View Alert
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">You haven't tracked any products yet.</p>
                <Link
                  to="/alerts/new"
                  className="inline-flex items-center gap-2 bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaPlus /> Track Your First Product
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            to="/alerts/new"
            className="inline-flex items-center gap-2 bg-purple-800 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            <FaPlus /> Track New Product
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;