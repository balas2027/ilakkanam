import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleWhoWeAreClick = (e) => {
    e.preventDefault();
    
   
    window.location.href = '/about#who-we-are';
    
   
  };
const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="container  mx-auto px-4 pb-5 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg transform rotate-12 flex items-center justify-center">
                <span className="text-white font-bold text-sm transform -rotate-12">I</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">ilakkanam</h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-base max-w-md">
              Ilakkanam – Smarter automation, faster optimization, and powerful growth for your digital journey.
            </p>

            {/* Get Started Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Take the first step</h3>
              <a
                href="/contactus"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Explore More */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Discover</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/internships" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Plans & Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Start Here
                </a>
              </li>
              <li>
                <a 
                  href="/about#who-we-are" 
                  onClick={handleWhoWeAreClick}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm cursor-pointer"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Insights & Articles
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="/404" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Page Not Found
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect with Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Instagram size={16} />
                  <span>Follow on Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Facebook size={16} />
                  <span>Like on Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Twitter size={16} />
                  <span>Tweet with Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {year} Ilakkanam. All rights reserved. | Designed & Developed with ❤️ by Balaskanthan AK.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;