import React from 'react';
import { FaEye, FaBell, FaTrash } from 'react-icons/fa';

const Trackedproductcard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <img 
          src={product?.image || "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg"} 
          alt={product?.title || "Samsung Galaxy A54 5G"} 
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-2">
            {product?.title || "Samsung Galaxy A54 5G Smartphone"}
          </h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Current Price:</span>
              <span className="font-semibold">Rs. {product?.currentPrice || "64,999"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Original Price:</span>
              <span className="text-sm line-through text-gray-500">Rs. {product?.originalPrice || "84,999"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Price Drop:</span>
              <span className="text-green-600 font-medium">{product?.priceChange || "7.14%"}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          Lowest price recorded
        </span>
        <div className="flex items-center gap-2">
          <button className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaEye />
          </button>
          <button className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaBell />
          </button>
          <button className="text-gray-600 hover:text-red-600 transition-colors">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trackedproductcard;