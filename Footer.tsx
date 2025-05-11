import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">TravelBolt</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Discover the world with TravelBolt. Book flights, hotels, and vacation packages with ease and confidence.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-primary-400 text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-primary-400 text-sm">Press</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400 text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-primary-400 text-sm">Help & FAQ</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-primary-400 text-sm">Booking Information</Link></li>
              <li><Link to="/cancel" className="text-gray-300 hover:text-primary-400 text-sm">Cancellation Options</Link></li>
              <li><Link to="/refunds" className="text-gray-300 hover:text-primary-400 text-sm">Refund Policy</Link></li>
              <li><Link to="/covid" className="text-gray-300 hover:text-primary-400 text-sm">COVID-19 Travel Advisory</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">support@travelbolt.com</span>
              </li>
              <li className="mt-6">
                <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-2">Subscribe</h3>
                <p className="text-gray-300 text-sm mb-2">Get the latest deals and special offers</p>
                <div className="flex mt-2">
                  <input
                    type="email"
                    className="min-w-0 flex-1 px-4 py-2 text-sm text-gray-900 border border-transparent focus:ring-primary-500 focus:border-primary-500 rounded-l-md"
                    placeholder="Your email"
                  />
                  <button className="flex-shrink-0 px-4 py-2 text-sm bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-r-md">
                    Subscribe
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-base text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} TravelBolt. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
