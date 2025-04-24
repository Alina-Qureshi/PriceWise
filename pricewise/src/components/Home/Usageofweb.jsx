import React from 'react'
import { FaSearch, FaChartLine, FaBell, FaCheckCircle } from "react-icons/fa";

const Usageofweb = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Search Products */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-md">
            <FaSearch className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Search Products</h3>
          <p className="text-gray-600">
            Find your favorite products by searching or pasting product URLs
          </p>
        </div>

        {/* Track Prices */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-md">
            <FaChartLine className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Track Prices</h3>
          <p className="text-gray-600">
            Add products to your tracking list to monitor price changes over time
          </p>
        </div>

        {/* Set Alerts */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mb-6 shadow-md">
            <FaBell className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Set Alerts</h3>
          <p className="text-gray-600">
            Create custom price alerts and get notified when prices drop
          </p>
        </div>

        {/* Save Money */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md">
            <FaCheckCircle className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Save Money</h3>
          <p className="text-gray-600">
            Buy at the perfect time and save money on your purchases
          </p>
        </div>
      </div>
    </section>
  )
}

export default Usageofweb