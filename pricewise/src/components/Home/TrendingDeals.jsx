import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TrendingDeals = () => {
    const SAMPLE_PRODUCTS = [
        {
          id: 1,
          title: "Samsung Galaxy A54 5G Smartphone",
          image: "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg",
          currentPrice: 64999,
          originalPrice: 84999,
          discount: 24,
          recentDrop: true,
          category: "Electronics"
        },
        {
          id: 2,
          title: "Apple AirPods Pro (2nd Generation)",
          image: "https://static-01.daraz.pk/p/fb214efdc79b1d7c8b31cca6b91b4df7.jpg",
          currentPrice: 48999,
          originalPrice: 59999,
          discount: 18,
          recentDrop: true,
          category: "Electronics"
        },
        {
          id: 3,
          title: "Xiaomi Redmi Watch 2 Lite",
          image: "https://static-01.daraz.pk/p/8f9c1f77c1c1c84e4fb9d0151bad9b6a.jpg",
          currentPrice: 9999,
          originalPrice: 15999,
          discount: 38,
          recentDrop: false,
          category: "Wearables"
        },
        {
          id: 4,
          title: "Anker PowerCore 20000mAh Power Bank",
          image: "https://static-01.daraz.pk/p/e85231174ab9135eddfb5213df73e96c.jpg",
          currentPrice: 7499,
          originalPrice: 9999,
          discount: 25,
          recentDrop: true,
          category: "Accessories"
        },
        {
          id: 5,
          title: "OnePlus Buds Pro 2 Wireless Earbuds",
          image: "https://static-01.daraz.pk/p/f427f8c9264e881c4176079e7f5cedea.jpg",
          currentPrice: 34999,
          originalPrice: 39999,
          discount: 12,
          recentDrop: false,
          category: "Audio"
        },
        {
          id: 6,
          title: "Xiaomi Redmi Note 13 Pro",
          image: "https://static-01.daraz.pk/p/c4d9c5d58cd35e9e50dd3495c9ba8265.jpg",
          currentPrice: 54999,
          originalPrice: 59999,
          discount: 8,
          recentDrop: false,
          category: "Smartphones"
        },
        {
          id: 7,
          title: "PlayStation 5 DualSense Controller",
          image: "https://static-01.daraz.pk/p/ce66e22dd01126cbe47c25d0e67ea75b.jpg",
          currentPrice: 17499,
          originalPrice: 19999,
          discount: 12,
          recentDrop: false,
          category: "Gaming"
        },
        {
          id: 8,
          title: "MacBook Air 13\" M2 Chip 8GB 256GB",
          image: "https://static-01.daraz.pk/p/6ccf5c09a52c17997c0ba702dec85252.jpg",
          currentPrice: 294999,
          originalPrice: 319999,
          discount: 8,
          recentDrop: true,
          category: "Computers"
        }
      ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-8 px-2">
        Trending Price Drops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-purple-800">
                  Rs. {product.currentPrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {product.category}
                  </span>
                  <button className="bg-purple-800 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-600 transition-colors duration-200">
                    Track
                  </button>
                </div>
              </div>
              {product.recentDrop && (
                <div className="mt-2">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Recent Price Drop
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <a className='text-purple-800 py-3 font-bold m-4 flex items-center gap-2 hover:gap-3 transition-all duration-200'>
          view all deals
          <FaArrowRight className="text-purple-800" />
        </a>
      </div>
    </div>
  );
};

export default TrendingDeals;