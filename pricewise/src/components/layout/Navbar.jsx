
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaTag } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-purple-950 shadow-2xl px-6 py-4 relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative group">
              <FaShoppingCart className="text-3xl text-white hover:text-gray-200 transition-colors duration-200" />
              <FaTag className="text-xl text-white hover:text-gray-200 transition-colors duration-200 absolute -top-1 -right-1 transform rotate-12" />
            </div>
            <div className="text-3xl font-bold text-white">PriceWise</div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between items-center flex-grow ml-10">
            <ul className="flex space-x-9 items-center">
              <Link to="/" className="text-white hover:text-white hover:underline transition-all duration-200"><li>Home</li></Link>
              <Link to="/Dashboard" className="text-white hover:text-white hover:underline transition-all duration-200"><li>Dashboard</li></Link>
              <Link to="/alerts" className="text-white hover:text-white hover:underline transition-all duration-200"><li>Alerts</li></Link>
              <li className="relative group">
                <button 
                  className="text-white hover:text-white hover:underline transition-all duration-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Categories
                </button>
                {isDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link to="/electronics" className="block px-4 py-2 text-white hover:bg-purple-950">Electronics</Link>
                    <Link to="/beauty" className="block px-4 py-2 text-white hover:bg-purple-950">Beauty Products</Link>
                    <Link to="/fashion" className="block px-4 py-2 text-white hover:bg-purple-950">Fashion</Link>
                    <Link to="/home" className="block px-4 py-2 text-white hover:bg-purple-950">Home & Living</Link>
                    <Link to="/sports" className="block px-4 py-2 text-white hover:bg-purple-950">Sports & Outdoor</Link>
                  </div>
                )}
              </li>
              <Link to="/about" className="text-white hover:text-white hover:underline transition-all duration-200"><li>About Us</li></Link>
              <Link to="/Contactus" className="text-white hover:text-white hover:underline transition-all duration-200"><li>Contact us</li></Link>
            </ul>
            
            <div className="flex gap-2">
              <Link to="/signup"><button className="border text-white hover:bg-white hover:text-black font-medium px-4 py-2 transition-all duration-200 border-white rounded-3xl">signup</button></Link>
              <Link to="/login"><button className="border text-white hover:bg-white hover:text-black font-medium px-4 py-2 transition-all duration-200 border-white rounded-3xl">login</button></Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <ul className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gray-200"><li>Home</li></Link>
            <Link to="/Dashboard" className="text-white hover:text-gray-200"><li>Dashboard</li></Link>
            <Link to="/alerts" className="text-white hover:text-gray-200"><li>Alerts</li></Link>
            <li>
              <button 
                className="text-white hover:text-gray-200 w-full text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories
              </button>
              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/electronics" className="block text-white hover:text-gray-200">Electronics</Link>
                  <Link to="/beauty" className="block text-white hover:text-gray-200">Beauty Products</Link>
                  <Link to="/fashion" className="block text-white hover:text-gray-200">Fashion</Link>
                  <Link to="/home" className="block text-white hover:text-gray-200">Home & Living</Link>
                  <Link to="/sports" className="block text-white hover:text-gray-200">Sports & Outdoor</Link>
                </div>
              )}
            </li>
            <Link to="/about" className="text-white hover:text-gray-200"><li>About Us</li></Link>
            <Link to="/Contactus" className="text-white hover:text-gray-200"><li>Contact us</li></Link>
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/signup"><button className="w-full border text-white hover:bg-white hover:text-black font-medium px-4 py-2 transition-all duration-200 border-white rounded-3xl">signup</button></Link>
              <Link to="/login"><button className="w-full border text-white hover:bg-white hover:text-black font-medium px-4 py-2 transition-all duration-200 border-white rounded-3xl">login</button></Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
