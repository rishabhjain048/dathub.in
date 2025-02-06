// 'use client';  // Add this line to mark the file as a client-side component
// import Link from 'next/link';
// import React, { useEffect, useState } from "react";

// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [
//     "https://media.istockphoto.com/id/1199145131/photo/technical-support-concept-maintenance-sign-wrench-and-srewdriver-tools-tech-issues-fix-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=bLtFkcU4wmOpfpeURXJsBwUDlUGtBr3tDAJIIUBMiOI=",
//     "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmczYmxzZHRzamozaG40Nzh3Z29vYnkyd3ZrbmUza3J4MWNoandiNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sOzHwf1DF8h96A5tXU/giphy.webp",
//     "https://media.istockphoto.com/id/2153478836/photo/digital-technology-internet-network-connection-big-data-digital-marketing-iot-internet-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=j843o3yTKU6XtSWda4Uh8nJVtdXJGSZE4AnlT-WEA-8=",
//     "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDc3a3U5Mmk1ZjJ1OHV0dDI0dnUxcmhpcG1zYWVsZ3dnOTBvZ2xlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyQqyt9S1WTiE6c/giphy.webp"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 4000); // 4000ms (4 seconds) interval between image changes

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
//       {/* Slideshow Background */}
      
// <div className="absolute inset-0 w-full h-full">
//   {images.map((_, index) => (
//     <div
//       key={index}
//       className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out ${
//         index === currentImage ? 'opacity-100' : 'opacity-0'
//       } bg-image-${index + 1}`}
//     ></div>
//   ))}
// </div>

//       {/* Hero Content with Frosted Glass Effect */}
//       <div className="relative z-10 max-w-5xl w-full text-center backdrop-blur-md bg-white/20 px-6 py-10 md:px-8 md:py-16 rounded-lg shadow-xl">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg tracking-wider">
//           Build the Future of Technology
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
//           Crafting innovative digital solutions for businesses to thrive in the modern world.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
//       {/* About Page Button */}
//       <Link
//         href="/about"
//         className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
//       >
//         Get Started
//       </Link>
      
//       {/* Projects Page Button */}
//       <Link
//         href="/projects"
//         className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
//       >
//         Learn More
//       </Link>
//     </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1199145131/photo/technical-support-concept-maintenance-sign-wrench-and-srewdriver-tools-tech-issues-fix-service.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmczYmxzZHRzamozaG40Nzh3Z29vYnkyd3ZrbmUza3J4MWNoandiNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sOzHwf1DF8h96A5tXU/giphy.webp",
    "https://media.istockphoto.com/id/2153478836/photo/digital-technology-internet-network-connection-big-data-digital-marketing-iot-internet-of.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDc3a3U5Mmk1ZjJ1OHV0dDI0dnUxcmhpcG1zYWVsZ3dnOTBvZ2xlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyQqyt9S1WTiE6c/giphy.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Slideshow */}
      {images.map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[index]})`,
            opacity: currentImage === index ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.01 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build the Future of
          <span className="text-blue-400"> Technology</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Crafting innovative digital solutions for businesses to thrive in the modern world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/about"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            Get Started
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};
