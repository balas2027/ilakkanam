"use client";
import React from "react";
import EmblaCarousel from "./ProductsSlider";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function CarouselDemo() {
  return (
    <>
      <div className="w-full group mt-5 relative lg:py-25 py-14">
         <div className="absolute h-52 z-10 bottom-0 w-full rounded-t-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-100/1 via-blue-100/10 to-blue-200 pointer-events-none"></div>
      <div className="absolute h-52 z-10 top-0 w-full rounded-b-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-200 via-blue-100/10 to-blue-100/1 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions and innovative technologies
              for modern industries
            </p>
          </div>
        </div>
        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}

export default CarouselDemo;
