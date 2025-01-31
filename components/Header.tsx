// import Link from 'next/link';
// import Image from 'next/image';
// import logo_image from '@/public/images/dathub.jpg';

// const Header = () => {
//   return (
//     <header className="bg-gray-900 text-white shadow-lg">
//       {/* Top Section */}
//       <div className="flex justify-between items-center px-6 py-3bg-gray-900 text-sm">
//         <div className="flex space-x-6">
//           <Link href="mailto:Dathub@company.com" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//             Dathub@company.com
//           </Link>
//           <span className="text-gray-300">|</span>
//           <Link href="tel:+918871266742" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//             +918871266742
//           </Link>
//         </div>
//         <div className="flex space-x-6">
//           <Link href="#linkedin" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//             LinkedIn
//           </Link>
//           <Link href="#twitter" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//             Instagram
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
//         {/* Logo and Company Name */}
//         <div className="flex items-center space-x-4">
//           <Image width={60} height={60} src={logo_image} alt="Company Logo" className="w-18 h-18 rounded-full border-2 bg-cover border-white shadow-xl transition transform hover:scale-110" />
//           <span className="text-4xl font-extrabold tracking-wide text-yellow-300 hover:text-white transition duration-300">
//             DAT<span className="text-white font-serif">HUB</span>
//           </span>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="mt-4 md:mt-0">
//           <ul className="flex space-x-8 text-lg font-medium">
//             <li>
//               <Link href="/" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center justify-end px-6 py-4">
//         <div className="text-white focus:outline-none hover:text-yellow-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="h-8 w-8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// };

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {  Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DatHub
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'OurProjects', 'Services', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-500 transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white shadow-lg rounded-b-lg mx-4 p-4">
          {['About', 'OurProjects', 'Services', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block py-2 text-gray-800 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
