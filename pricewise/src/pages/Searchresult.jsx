import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSpinner, FaStar } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaList, FaMobile, FaSprayCan, FaTshirt, FaHome, FaRunning } from 'react-icons/fa';

const Searchresult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';

  const categories = [
    { id: 'all', name: 'All Categories', icon: FaList },
    { id: 'electronics', name: 'Electronics', icon: FaMobile },
    { id: 'beauty', name: 'Beauty Products', icon: FaSprayCan },
    { id: 'fashion', name: 'Fashion', icon: FaTshirt },
    { id: 'home', name: 'Home & Living', icon: FaHome },
    { id: 'sports', name: 'Sports & Outdoor', icon: FaRunning }
  ];

  const products = [
    {
      id: 1,
      title: "Samsung Galaxy A54 5G Smartphone",
      price: 64999,
      originalPrice: 84999,
      image: "https://static-01.daraz.pk/p/8b8d4664619f1ac72d9e3d5629f6a377.jpg",
      rating: 4.7,
      reviews: 326,
      category: "smartphones",
      discount: 24
    },
    {
      id: 2,
      title: "Apple AirPods Pro",
      price: 48999,
      originalPrice: 59999,
      image: "https://static-01.daraz.pk/p/fb214efdc79b1d7c8b31cca6b91b4df7.jpg",
      rating: 4.8,
      reviews: 245,
      category: "audio",
      discount: 18
    },
    {
      id: 3,
      title: "Xiaomi Smart Watch",
      price: 9999,
      originalPrice: 15999,
      image: "https://static-01.daraz.pk/p/8f9c1f77c1c1c84e4fb9d0151bad9b6a.jpg",
      rating: 4.5,
      reviews: 189,
      category: "watches",
      discount: 38
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    const filterProducts = () => {
      const query = searchQuery.toLowerCase();
      
      // Return early if search query is empty
      if (!query) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }
      
      // Filter by title or category
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      
      setSearchResults(filtered);
      setIsLoading(false);
    };

    // Add a small delay to simulate API call
    const timeoutId = setTimeout(() => {
      filterProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!searchQuery ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to PriceWise Search
            </h2>
            <p className="text-gray-600">
              Enter a product name or URL in the search bar above to start tracking prices
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Search Results for: <span className="text-purple-800">"{searchQuery}"</span>
              </h1>
              <p className="text-gray-600 mt-2">
                Found {searchResults.length} products matching your search
              </p>
            </div>

            <div className="flex gap-8">
              {/* Category Sidebar */}
              <div className="w-64 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-purple-100 text-purple-800'
                            : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <category.icon className="text-lg" />
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="flex-grow">
                <div className="space-y-6">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                      <FaSpinner className="animate-spin text-4xl text-purple-800" />
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="w-full h-48 object-cover rounded-t-xl" 
                            />
                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                              -{product.discount}%
                            </div>
                          </div>

                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
                              {product.title}
                            </h3>
                            
                            <div className="flex items-baseline gap-2 mb-3">
                              <span className="text-2xl font-bold text-purple-800">
                                Rs. {product.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                Rs. {product.originalPrice.toLocaleString()}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                              <FaStar className="text-yellow-400" />
                              <span className="font-medium">{product.rating}</span>
                              <span className="text-gray-600">
                                ({product.reviews} reviews)
                              </span>
                            </div>

                            <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                              Track Price
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <p className="text-xl text-gray-600">
                        No products found matching "{searchQuery}"
                      </p>
                      <p className="text-gray-500 mt-2">
                        Try searching with different keywords or browse our trending products
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Searchresult;