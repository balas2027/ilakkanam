import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import services from "./ServicesData.jsx";
function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <section className="min-h-screen group relative bg-white py-16 lg:py-20">
      <div className="absolute h-52 z-10 bottom-0 w-full rounded-t-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-100/1 via-blue-100/10 to-blue-200 pointer-events-none"></div>
      <div className="absolute h-52 z-10 top-0 w-full rounded-b-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-200 via-blue-100/10 to-blue-100/1 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and drive
            digital transformation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Vertical Carousel */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Carousel Container */}
              <div className="h-96 overflow-hidden">
                <div
                  className="flex flex-col transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateY(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="min-h-full flex-shrink-0 p-8"
                    >
                      <div className="h-full flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {service.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls - Bottom */}
              <div className="flex justify-center space-x-5 lg:justify-end p-6 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronUp className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronDown className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden">
              {/* Image Section */}
              <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-gray-900 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel;
