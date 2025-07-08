import React from "react";
import { Boxes,Code2,ShoppingCart,Server } from "lucide-react";
function WebDevelopment() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
              Development Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
           Reliable Digital Solutions &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              Web Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We craft reliable, scalable, and modern web solutions. From PHP and
            MERN development to complete e-commerce platforms and hosting
            services, Ilakkanam helps you bring your digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="group md:mb-5 bg-gradient-to-b from-black to-gray-900 text-white p-6 rounded-2xl shadow-xl transition-all duration-300">
            <div className="w-12 h-12  bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Boxes className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">MERN Stack Solutions</h3>
            <p className="text-gray-300 text-sm mb-4">
              Modern full-stack development using MongoDB, Express, React, and
              Node.js.
            </p>
            <div className="text-xs text-gray-500 font-medium">
              FULL-STACK POWER
            </div>
          </div>

          <div className="group md:mt-5 bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4  group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-6 h-6   text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">PHP Development</h3>
            <p className="text-gray-600 text-sm mb-4">
              Robust backend development for websites and applications using
              core PHP and frameworks.
            </p>
            <div className="text-xs text-gray-500 font-medium">
              SERVER-SIDE POWER
            </div>
          </div>

          <div className="group md:mb-5 bg-gradient-to-b from-gray-900 to-black text-white p-6 rounded-2xl shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">E-Commerce Websites</h3>
            <p className="text-gray-300 text-sm mb-4">
              Customized online store development with secure checkout and admin
              panels.
            </p>
            <div className="text-xs text-gray-500 font-medium">
              ONLINE BUSINESS
            </div>
          </div>

          <div className="group md:mt-5 bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Hosting & Deployment</h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete hosting setup, server management, and domain integration
              support.
            </p>
            <div className="text-xs text-gray-500 font-medium">
              RELIABLE DELIVERY
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
