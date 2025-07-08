import React from "react";
import { Hammer, Settings, Cpu } from "lucide-react";
function TechServices() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gray-800 text-gray-300 flex items-center gap-x-3 px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
              <div className="h-2 w-2 bg-gradient-to-r mt-1 bg-white from-pink-800  to-blue-800 rounded-full animate-spin"></div>
              Technical Excellence
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Engineering &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Technology Services
            </span>
          </h2>
          <p className="sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            From design to deployment, we help you build reliable, scalable tech
            solutions using the latest in engineering and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group hover:rotate-x-15 relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative group-hover:rotate-x-15 h-full flex flex-col justify-between">
              <div className="w-14 h-14 bg-gradient-to-br  group-hover:scale-110 transform-transition duration-300 from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mb-6">
                <Hammer className="w-7 h-7 text-white  group-hover:scale-110 transform-transition duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Engineering</h3>
              <p className="text-gray-400  md:text-justify lg:text-left leading-relaxed">
                Bring your ideas to life with advanced CAD/CAM, UAVs, embedded
                systems, 3D prototyping, and precise design services.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <h1 className="group-hover:translate-x-3 transform-transition duration-300 text-sm text-gray-500 font-medium uppercase">
                  Blueprint to prototype
                </h1>
              </div>
            </div>
          </div>

          <div className="group hover:rotate-x-15  relative bg-gradient-to-b from-gray-800 to-black p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative group-hover:rotate-x-15 h-full flex flex-col justify-between">
              <div className="w-14 h-14 bg-gradient-to-br group-hover:scale-110 transform-transition duration-300 from-white to-gray-300 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-black group-hover:scale-110 transform-transition duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Product Development & Manufacturing
              </h3>
              <p className="text-gray-400  md:text-justify lg:text-left leading-relaxed">
                End-to-end product development, repair, and precision
                manufacturing for industry-ready solutions.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h1 className="group-hover:translate-x-3 transform-transition duration-300 text-sm text-gray-500 font-medium uppercase">
                  Scalable Solutions
                </h1>
              </div>
            </div>
          </div>

          <div className="group hover:rotate-x-15 relative bg-gradient-to-b from-black to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative group-hover:rotate-x-15 h-full flex flex-col justify-between">
              <div className="w-14 h-14 bg-gradient-to-br  group-hover:scale-110 transform-transition duration-300 from-gray-700 to-black rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-white  group-hover:scale-110 transform-transition duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Advanced Tech Integration
              </h3>
              <p className="text-gray-400 md:text-justify lg:text-left leading-relaxed">
                Integrate AI, ML, IoT, and robotics into your systems for
                smarter, scalable tech outcomes.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <h1 className="group-hover:translate-x-3 transform-transition duration-300 text-sm text-gray-500 font-medium uppercase">
                  Tech Fusion
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechServices;
