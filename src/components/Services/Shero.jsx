import React from 'react'
import {
  Lightbulb,
  Wrench,
  TrendingUp,
  Globe,
  ArrowRight,

} from "lucide-react";

function Shero() {
  return (
    <div>
       <section className="bg-white xl:pb-40  xl:rounded-b-[20%]  2xl:rounded-b-[45%] mt-10 text-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full sm:text-sm text-[10px] font-medium tracking-wide uppercase">
                Innovation • Technology • Mentorship
              </span>
            </div>
            <h1 className="text-[33px] sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Empowering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
                Innovation through
              </span>
              ,<br />
              End-to-End{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                Services
              </span>
            </h1>
            <p className="text-sm sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed  font-light">
              From idea exploration to product deployment, Ilakkanam provides
              comprehensive services to bring your innovations to life with
              expert guidance and full-stack development.
            </p>
          </div>

          {/* Advanced Service Cards Grid */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl opacity-50"></div>
              <div className="relative  flex flex-col justify-between h-full">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">
                  Student Innovation & Hackathon Ideas
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Explore tailored project ideas designed for academic
                  competitions, national-level hackathons, and startup
                  incubation challenges.
                </p>
                <div className="flex items-center cursor-pointer text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Vist Our Success</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-700 to-transparent rounded-3xl opacity-30"></div>
              <div className="relative  flex flex-col justify-between h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Product Development & Deployment
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Turn ideas into working solutions with our development
                  support—ranging from full-stack web apps, IoT devices, to
                  AI/ML-based systems.
                </p>
                <div className="flex items-center cursor-pointer text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>See How We Build</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            <div className="group relative  bg-gradient-to-br from-black to-gray-900 p-8 rounded-3xl text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-700 to-transparent rounded-3xl opacity-30"></div>
              <div className="relative flex flex-col justify-between h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Mentorship & Project Guidance
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Receive expert insights from seasoned industry professionals
                  to refine your projects, improve feasibility, and plan
                  real-world implementation.
                </p>
                <div className="flex  cursor-pointer items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Connect with Mentor</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl opacity-50"></div>
              <div className="relative  flex flex-col justify-between h-full">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">
                  Web Application Development
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Build scalable, robust web apps using modern stacks like PHP,
                  MERN, and cloud integration. Perfect for e-commerce, SaaS, and
                  internal enterprise tools.
                </p>
                <div className="flex cursor-pointer items-center text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Shero
