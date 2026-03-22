"use client";
import { useState } from 'react';
import { Menu, X, Tractor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-green-700">
              <Tractor size={32} />
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Agri<span className="text-green-600">Share</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="relative font-medium text-gray-900 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-yellow-400 after:bottom-[-4px] after:left-0">
              Home
            </a>
            <a href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Equipment</a>
            <a href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all">
              Log In
            </button>
            <button className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-medium text-gray-900 transition-all shadow-sm active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-medium text-yellow-500">Home</a>
              <a href="#" className="font-medium text-gray-600">Equipment</a>
              <a href="#" className="font-medium text-gray-600">How it Works</a>
            </div>
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 border border-gray-200 rounded-xl font-medium">Log In</button>
              <button className="w-full py-3 bg-yellow-400 rounded-xl font-medium">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;