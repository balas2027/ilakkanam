import React from "react";
import about from "../../assets/about.png";
import { Link } from "react-router-dom";

function Habout() {
  return (
    // xl:sticky xl:top-0
    <section className=" relative group my-5 w-full flex justify-center  min-h-screen py-12 lg:py-20">
      <div className="absolute h-52 z-10 bottom-0 w-full rounded-t-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-100/1 via-blue-100/10 to-blue-200 pointer-events-none"></div>
      <div className="absolute h-52 z-10 top-0 w-full rounded-b-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-200 via-blue-100/10 to-blue-100/1 pointer-events-none"></div>
      <div className="container mx- px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-26">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Image Section - Tilted Card Style */}
          <div className="flex-1 flex items-center justify-center  lg:justify-start">
            <div className="relative w-full flex justify-center lg:justify-start">
              {/* Main tilted image card */}
              <div className="relative  ">
                <div className="p-3 sm:p-4 md:p-6 transition-shadow duration-500">
                  <img
                    src={about}
                    alt="About Ilakkanam - Innovation in Engineering"
                    className="h-70  sm:h-100  w-full xl:h-120 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Card Style */}
          <div className="flex-1 w-full">
            <div className="backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500 border-blue-900 text-lg sm:text-xl font-extrabold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent border-l-4 border-r-4 px-4 sm:px-5">
                    About Us
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-800">
                    We Develop Products That
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      {" "}
                      People Love to Use.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                    At Ilakkanam, we're driven by innovation, research, and a
                    passion for engineering solutions. We collaborate with
                    institutions and industries to create impactful technologies
                    and products that shape a better future.
                  </p>
                </div>

                {/* Vision & Goal Cards */}
                <div className="xl:flex flex-col sm:space-y-0 space-y-5 sm:flex-row gap-4 mt-8">
                  <div className="flex-1 bg-gradient-to-br from-pink-50/30 to-red-50/30 p-4 rounded-lg border border-pink-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-slate-800">Our Vision</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Innovation-driven solutions that transform industries and
                      create lasting impact.
                    </p>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 p-4 rounded-lg border border-blue-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-slate-800">Our Goal</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Engineering excellence through collaborative research and
                      cutting-edge technology.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>Explore Us</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habout;
