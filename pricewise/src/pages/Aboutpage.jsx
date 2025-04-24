import React from 'react'
import Navbar from '../components/layout/Navbar'
import { FaBell, FaUserShield, FaCheckCircle, FaUsers } from 'react-icons/fa'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
      
      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">About PriceWise</h1>
        <p className="text-gray-600 text-center mb-16">
          We help shoppers make smarter purchasing decisions by tracking price history,Comparing products from different platforms and 
          alerting users when prices drop on their favorite products.
        </p>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            PriceWise was born out of a simple problem: research! As an avid online shopper and 
            price tracker, being a spreadsheet of products to watch is painful to purchase from different e-COMMERCE platfroms manually 
            checking prices every few days. After missing a flash sale on a laptop he had been waiting for 
            months, he decided there had to be a better way.
          </p>
          <p className="text-gray-600 mt-4">
            In 2024, PriceWise started as a simple tool for tracking product prices from different platforms. Today, we've 
            evolved into a comprehensive platform that helps thousands of shoppers make smarter purchasing 
            decisions by providing price history data, price drop alerts, and deal recommendations.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">How PriceWise Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBell className="text-blue-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">Track Products</h3>
              <p className="text-gray-600">Add any  product to your tracking list. We'll monitor the price changes automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">Get Notified</h3>
              <p className="text-gray-600">Set your target price and receive alerts when prices drop below your threshold.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-purple-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">Save Money</h3>
              <p className="text-gray-600">Buy at the perfect time and save money on your purchases every time.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUserShield className="text-orange-500 text-xl" />
              </div>
              <div>
                <h3 className="font-bold mb-2">User Privacy</h3>
                <p className="text-gray-600">We take your privacy seriously. We don't sell your data to third parties and only collect information necessary to provide our service.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaBell className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Timely Alerts</h3>
                <p className="text-gray-600">We check prices multiple times daily to ensure you never miss a price drop or limited-time offer on your tracked items.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you! Our team is always eager to help and improve Price Siren.
          </p>
          <Link to="/contactUs"><button className="bg-purple-800 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-all duration-200">
            Contact Us
          </button></Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Aboutpage