import React, { useState } from 'react';


export default function ProfessionalGallery({images}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-6xl  mx-auto p-6 bg-white">

     
      {/* Main Image Container */}
      <div className="relative mb-6 lg:h-140 bg-gray-100  overflow-hidden shadow-lg">
        
        <div className="relativ aspect-video">
          <img
            src={images[activeIndex].url}
            alt={`Gallery image ${activeIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {/* Navigation Arrows */}
          
          <button
            onClick={prevSlide}
            className="absolute h-full top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3  transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
         
          
          <button
            onClick={nextSlide}
            className="absolute h-full right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-3  transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          {/* <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div> */}
        </div>
      </div>
        {/*content*/}
        <div className="div text-xl text-gray-500 font-semibold my-5 text-center">
            
                  {images[activeIndex].description}
               
            
        </div>
      {/* Thumbnail Navigation */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative overflow-hidden transition-all duration-200 ${
                index === activeIndex
                  ? 'border border-blue-500 scale-100 shadow-lg'
                  : 'hover:ring-2 hover:ring-gray-300 hover:scale-102'
              }`}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-16 object-cover"
              />
              {index === activeIndex && (
                <div className="absolute inset-0 bg-blue-500/20"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === activeIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div> */}

      {/* Event Details */}
     
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}