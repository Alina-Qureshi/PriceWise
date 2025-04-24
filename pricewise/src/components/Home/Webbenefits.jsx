import React from 'react'
import { FaChartLine, FaBell, FaSearch, FaMobile, FaSync, FaTag } from "react-icons/fa";

const Webbenefits = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-navy-900 mb-4">How PriceWise Helps You Save</h2>
        <p className="text-xl text-gray-600">
          Our comprehensive suite of tools ensures you never overpay for products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaChartLine />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Price History Tracking</h3>
          <p className="text-gray-600">
            View complete price history charts to identify trends and best times to buy.
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaBell />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Price Drop Alerts</h3>
          <p className="text-gray-600">
            Get notified instantly when prices drop below your target threshold.
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaTag />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Deal Detection</h3>
          <p className="text-gray-600">
            Automatically identify and highlight the best deals and discounts available.
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaSync />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Real-time Updates</h3>
          <p className="text-gray-600">
            Stay informed with live price updates and instant notifications on price changes.
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaMobile />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Mobile-Friendly</h3>
          <p className="text-gray-600">
            Access price tracking and alerts on any device with our responsive design.
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-800 text-4xl mb-6">
            <FaSearch />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Price Detection</h3>
          <p className="text-gray-600">
            Automatically detect and compare prices across multiple sellers and listings.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Webbenefits