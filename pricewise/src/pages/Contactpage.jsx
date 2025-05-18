import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { FaEnvelope, FaComments, FaUsers } from 'react-icons/fa'
import Faqs from './Faqs'

const Contactpage = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-2">Get In <span className="text-purple-800">Touch</span></h1>
        <p className="text-gray-600 text-center mb-12">
          Have questions about price tracking or need assistance with your account? Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button className="w-full bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-purple-800 p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>support@pricesiren.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaComments className="text-2xl" />
                <div>
                  <h3 className="font-bold">Live Chat</h3>
                  <p>Available 9 AM - 5 PM,<br/>Monday to Friday</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-2xl" />
                <div>
                  <h3 className="font-bold">Support Team</h3>
                  <p>Our dedicated team is here to help you</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-purple-200 transition-colors">Facebook</a>
                <a href="#" className="hover:text-purple-200 transition-colors">Instagram</a>
                <a href="#" className="hover:text-purple-200 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
       <Faqs/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contactpage