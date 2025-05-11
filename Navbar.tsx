import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Globe, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navClass = isHomePage 
    ? `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft' : 'bg-transparent'}`
    : 'sticky top-0 z-50 bg-white shadow-soft';
    
  const textClass = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-gray-800';
  
  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Globe className={`h-8 w-8 ${textClass}`} />
              <span className={`ml-2 text-xl font-bold ${textClass}`}>TravelBolt</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link to="/" className={`${textClass} hover:text-primary-500 px-3 py-2 text-sm font-medium`}>Home</Link>
              <Link to="/search?type=flights" className={`${textClass} hover:text-primary-500 px-3 py-2 text-sm font-medium`}>Flights</Link>
              <Link to="/search?type=hotels" className={`${textClass} hover:text-primary-500 px-3 py-2 text-sm font-medium`}>Hotels</Link>
              <div className="relative">
                <button className={`group inline-flex items-center ${textClass} hover:text-primary-500 px-3 py-2 text-sm font-medium`}>
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <div className="py-1">
                    <Link to="/deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deals</Link>
                    <Link to="/destinations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Destinations</Link>
                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <button className={`${textClass} hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium`}>
              <User className="inline h-5 w-5 mr-1" />
              Sign In
            </button>
            <button className={`ml-4 btn-primary`}>
              Register
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${textClass}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className="pt-2 pb-4 space-y-1 bg-white">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500">Home</Link>
          <Link to="/search?type=flights" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500">Flights</Link>
          <Link to="/search?type=hotels" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500">Hotels</Link>
          <Link to="/deals" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500">Deals</Link>
          <Link to="/destinations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500">Destinations</Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-500" />
              </div>
              <div className="ml-3">
                <button className="btn-primary mb-2">Sign In</button>
                <button className="block btn-secondary w-full">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
