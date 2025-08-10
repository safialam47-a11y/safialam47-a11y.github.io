import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg"
              >
                <Gift className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">Play N Gift</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your one-stop destination for quality stationery, sports equipment, and gifts. 
              Making learning and playing more enjoyable for students and families.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=stationery" className="text-gray-400 hover:text-white transition-colors">Stationery</Link></li>
              <li><Link to="/products?category=sports" className="text-gray-400 hover:text-white transition-colors">Sports Equipment</Link></li>
              <li><Link to="/products?category=gifts" className="text-gray-400 hover:text-white transition-colors">Gifts</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Play N Gift. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for students and families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;