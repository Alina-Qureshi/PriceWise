import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Faqs = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:border-purple-800 hover:border transition-all duration-200">
              <h3 className="font-bold mb-4 text-lg">How often are prices updated?</h3>
              <p className="text-gray-600">We update prices multiple times daily to ensure you get the most accurate information.</p>
            </div>
            {/* Apply same styling to all FAQ boxes */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:border-purple-800 hover:border transition-all duration-200">
              <h3 className="font-bold mb-4 text-lg">Can I track products from other stores?</h3>
              <p className="text-gray-600">Currently, we only support tracking products from Daraz, but we're working on expanding to more stores.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:border-purple-800 hover:border transition-all duration-200">
              <h3 className="font-bold mb-4 text-lg">Is this service free to use?</h3>
              <p className="text-gray-600">Yes, our basic price tracking service is completely free to use. We also offer premium features for power users.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:border-purple-800 hover:border transition-all duration-200">
              <h3 className="font-bold mb-4 text-lg">How do I set up price alerts?</h3>
              <p className="text-gray-600">Simply search for a product, set your desired price, and we'll notify you when the price drops to your target.</p>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Faqs