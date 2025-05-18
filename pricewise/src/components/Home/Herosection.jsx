import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [
    "/images/ecommerce1.jpg",
    "/images/ecommerce2.jpg",
    "/images/ecommerce3.jpg",
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#4c1d95"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.2,
              random: true
            },
            size: {
              value: 5,
              random: true
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4c1d95",
              opacity: 0.2,
              width: 1
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          },
          retina_detect: true
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <p className="font-bold text-purple-800 text-4xl leading-tight">
            <span className="text-black">Never Miss a Deal.</span><br/>
            Monitor price changes and save more on your shopping.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">
              Track Your Product here
            </h2>
            <div className="flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xl py-2 border border-gray-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Daraz product or paste URL..."
                className="flex-grow px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-none transition-all duration-200"
              />
              <Link to="Searchresult"><button 
                type="submit"
                className="flex items-center gap-2 bg-purple-800 text-white px-8 py-3 rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 mx-2"
              >
                Search
              </button></Link>
            </div>
          </form>

          <div className="flex gap-6">
            <button className="px-8 py-3 bg-purple-800 text-white rounded-full hover:bg-purple-600 transition-all duration-200 font-semibold">
            <Link to="/search">Start Tracking</Link>
            </button>
            <button className="px-8 py-3 border-2 border-purple-800 text-purple-800 rounded-full hover:bg-purple-800 hover:text-white transition-all duration-200 font-semibold">
              <Link to="/about">See How It Works</Link>
            </button>
          </div>
        </div>

        {/* Right Content - Carousel */}
        <div className="md:w-1/2 md:pl-8">
          <div className="p-4">
            <Slider {...carouselSettings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="outline-none">
                  <img
                    src={image}
                    alt={`E-commerce slide ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-xl border border-purple-800 right-0"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
