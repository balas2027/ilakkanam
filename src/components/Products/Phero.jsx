

import React from 'react';
import { ArrowRight, Zap, Code, Cpu } from 'lucide-react';
import { useState,useRef } from 'react';
import useScrollAnimation from '../../scrollanimation';
import styles from '../../css/products.module.css';
const HeroSection = () => {

  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();

    return (
    <section className="bg-white text-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
             
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Innovative Technology
                <span className="block text-gray-600">Meets Real-World</span>
                <span className="block">Challenges</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Explore our portfolio of forward-thinking solutions developed to empower industries, 
                enhance user experiences, and drive digital transformation through innovative 
                technology and design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='#products' className="bg-black group  cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-white hover:text-black border duration-500 transition-colors">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5  arrow-icon" />
              </a>
              
              <a href='contactus' className="border border-gray-300 cursor-pointer text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Schedule Consultation
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 group">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div ref={ref1} className={` ${isVisible1 ? styles['side-animation-show1'] : styles['side-animation1']} bg-gray-900 p-6 rounded-2xl text-white h-32 flex items-center justify-center`}>
                    <Code className="w-12 h-12" />
                  </div>
                  <div ref={ref2} className={` ${isVisible2 ? styles['side-animation-show3'] : styles['side-animation3']} bg-gray-100 p-6 rounded-2xl h-24 flex items-center justify-center `}>
                    <Cpu className="w-10 h-10 text-gray-600" />
                  </div>
                </div>
                <div  className="space-y-4 mt-8">
                  <div ref={ref3}  className={` ${isVisible3 ? styles['side-animation-show2'] : styles['side-animation2']} bg-gray-100 p-6 rounded-2xl h-24 flex items-center justify-center`}>
                    <Zap className="w-10 h-10 text-gray-600" />
                  </div>
                  <div ref={ref4} className={` ${isVisible4 ? styles['side-animation-show4'] : styles['side-animation4']} bg-gray-900 p-6 rounded-2xl text-white h-32 flex items-center justify-center`}>
                    <ArrowRight className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;