import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Tractor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full px-4 pb-6 mt-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tractor className="text-green-600" size={28} />
              <span className="text-2xl font-bold text-gray-800">
                Agri<span className="text-green-600">Share</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Empowering farmers with modern equipment sharing solutions. Grow more, together.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-gray-50 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer">
                <Facebook size={20} className="text-gray-600" />
              </div>
              <div className="p-2 bg-gray-50 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer">
                <Instagram size={20} className="text-gray-600" />
              </div>
              <div className="p-2 bg-gray-50 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer">
                <Twitter size={20} className="text-gray-600" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Rent Equipment</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">List Your Tractor</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Safety Guides</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Success Stories</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Trust & Safety</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="text-yellow-500 shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Phone size={20} className="text-yellow-500 shrink-0" />
                <span>+91 1223456789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Mail size={20} className="text-yellow-500 shrink-0" />
                <span>support@agrishare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 AgriShare. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">Verified for:</span>
            <div className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-bold">
              Sustainable Farming
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;