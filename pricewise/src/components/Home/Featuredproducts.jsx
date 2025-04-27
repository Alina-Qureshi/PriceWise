import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featuredproducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      image: "/images/ecommerce2.jpg",
      title: "Smartphone",
      price: "Rs. 49,999"
    },
    {
      id: 2,
      image: "/images/ecommerce1.jpg",
      title: "Laptop",
      price: "Rs. 129,999"
    },
    {
      id: 3,
      image: "/images/ecommerce3.jpg",
      title: "Headphones",
      price: "Rs. 8,999"
    },
    {
      id: 4,
      image: "/images/ecommerce3.jpg",
      title: "Smartwatch",
      price: "Rs. 24,999"
    },
    {
      id: 5,
      image: "/images/ecommerce1.jpg",
      title: "Camera",
      price: "Rs. 89,999"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Featured Products</h2>
        <div className="px-4">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                    <p className="text-purple-800 font-bold">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Featuredproducts;