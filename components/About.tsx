// import React from "react";

// function About() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
//           <div className="mb-4">
//             <span className="text-5xl text-blue-600 mb-2 inline-block p-3 rounded-full bg-blue-100">
//               🏢
//             </span>
//             <h3 className="text-2xl font-semibold text-gray-800 mt-4">Founded in 2023</h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             We started with a vision to transform local cities.
//           </p>
//         </div>
//         <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
//           <div className="mb-4">
//             <span className="text-5xl text-green-600 mb-2 inline-block p-3 rounded-full bg-green-100">
//               👥
//             </span>
//             <h3 className="text-2xl font-semibold text-gray-800 mt-4">6+ City Projects</h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             Successfully completed projects in multiple local cities.
//           </p>
//         </div>
//         <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
//           <div className="mb-4">
//             <span className="text-5xl text-yellow-600 mb-2 inline-block p-3 rounded-full bg-yellow-100">
//               
//             </span>
//             <h3 className="text-2xl font-semibold text-gray-800 mt-4">8+ Investors</h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             Backed by more than 8 trusted investors.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';

import { motion } from 'framer-motion';


const About = () => {
  const stats = [
    {
      icon: "🏢",
      title: "Founded in 2024",
      description: "We started with a vision to transform local cities.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "👥",
      title: "6+ City Projects",
      description: "Successfully completed projects in multiple local cities.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: "🚀",
      title: "our mission",
      description: "Our mission is to build seamless, scalable digital solutions that empower businesses worldwide.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Journey</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Building tomorrows technology solutions with innovation and expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-3xl ${stat.iconColor}`}>{stat.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-center">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
