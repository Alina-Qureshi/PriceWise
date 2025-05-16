import React from 'react';
import { useParams } from 'react-router-dom';
import { FaBell, FaChartLine, FaHistory } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Productpage = () => {
  const { productId } = useParams();

  // Sample product data - replace with actual data fetching
  const product = {
    id: 1,
    title: "Samsung Galaxy A54 5G",
    image: "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg",
    currentPrice: 64999,
    originalPrice: 84999,
    discount: 24,
    description: "The Samsung Galaxy A54 5G brings awesome mobile experiences to everyone. Shoot high-resolution pics and super-smooth videos in stunning detail with the 50MP camera. Watch content come alive on the 6.4-inch FHD+ Super AMOLED display.",
    priceHistory: [
      { date: '2024-01-01', price: 84999 },
      { date: '2024-01-15', price: 74999 },
      { date: '2024-02-01', price: 64999 },
    ],
    lowestPrice: 64999,
    highestPrice: 84999,
    averagePrice: 74999,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image and Basic Info */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-96 object-contain rounded-lg mb-6"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-purple-800">
                Rs. {product.currentPrice.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {product.discount}% OFF
              </span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              <FaBell /> Set Price Alert
            </button>
          </div>

          {/* Price Analytics */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaChartLine /> Price Analytics
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Lowest Price</p>
                  <p className="text-lg font-bold text-green-600">
                    Rs. {product.lowestPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Highest Price</p>
                  <p className="text-lg font-bold text-red-600">
                    Rs. {product.highestPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Average Price</p>
                  <p className="text-lg font-bold text-blue-600">
                    Rs. {product.averagePrice.toLocaleString()}
                  </p>
                </div>
              </div>
              {/* Price chart would go here */}
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                Price Chart Placeholder
              </div>
            </div>

            {/* Price History */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaHistory /> Price History
              </h2>
              <div className="space-y-4">
                {product.priceHistory.map((record, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-gray-600">{record.date}</span>
                    <span className="font-medium">
                      Rs. {record.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Productpage;