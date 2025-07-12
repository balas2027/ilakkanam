import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {


  const year = new Date().getFullYear();

  return (
    <footer className="bg-black pt-10 text-white">
      <div className="container mx-auto px-4 pb-5 pt-16">
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
              <HashLink
                to="/contactus"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </HashLink>
            </div>
          </div>

          {/* Explore More */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Discover</h3>
            <ul className="space-y-3">
              <li>
                <HashLink to="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  What We Offer
                </HashLink>
              </li>
              <li>
                <HashLink to="/products" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Our Solutions
                </HashLink>
              </li>
              <li>
                <HashLink to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Success Stories
                </HashLink>
              </li>
              <li>
                <HashLink to="/internships" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Why Choose Us
                </HashLink>
              </li>
              <li>
                <HashLink to="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Plans & Pricing
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <HashLink to="/" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Start Here
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/about#who-we-are"

                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm cursor-pointer"
                >
                  Who We Are
                </HashLink>
              </li>
              <li>
                <HashLink to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Insights & Articles
                </HashLink>
              </li>
              <li>
                <HashLink to="/contactus" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Get in Touch
                </HashLink>
              </li>
              <li>
                <HashLink to="/404" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">
                  Page Not Found
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect with Us</h3>
            <ul className="space-y-3">
              <li>
                <HashLink to="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Instagram size={16} />
                  <span>Follow on Instagram</span>
                </HashLink>
              </li>
              <li>
                <HashLink to="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Facebook size={16} />
                  <span>Like on Facebook</span>
                </HashLink>
              </li>
              <li>
                <HashLink to="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </HashLink>
              </li>
              <li>
                <HashLink to="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm flex items-center space-x-2">
                  <Twitter size={16} />
                  <span>Tweet with Us</span>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {year} Ilakkanam. All rights reserved. | Designed & Developed with ❤️ by{" "}
              <a
                href="https://balaskanthan.vercel.app"
                className="underline text-pink-600 hover:text-blue-600 transition-all duration-1000"
                aria-label="balaskanthan portfolio"
              >
                Balaskanthan AK.
              </a>
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
              <HashLink to="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200">
                Privacy Policy
              </HashLink>
              <HashLink to="/terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200">
                Terms & Conditions
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
