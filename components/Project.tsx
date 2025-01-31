// 'use client';

// import Image from 'next/image';
// import React from 'react';

// export default function Projects() {
//   const projects = [
//     {
//       id: "p1",
//       name: "Sponsify",
//       purpose: "A website which can directly provide sponsor and the creator.",
//       tech: "B@B for content creators and developers",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339222/sponsify_image_vi5pqb.png",
//       link: "https://sponsify.example.com" // Add link
//     },
//     {
//       id: "p2",
//       name: "Fancy Jewellers",
//       purpose: "Create a website for user interaction and advertisement.",
//       tech: "Designer jewellery and others",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339380/fancy_jwellers_qrgjv6.png",
//       link: "https://website-xi-beryl-72.vercel.app/" // Add link
//     },
//     {
//       id: "p3",
//       name: "Smart Skills Checker", 
//       purpose:"Implement AI driven spell check for smart works.",
//       tech: "Artificial intelligence",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339452/candidate_skill_up0ywc.png",
//       link: "https://www.candidateskillsreview.com/" // Add link
//     },
//     {
//       id: "p4",
//       name: "Pure Vichar",
//       purpose: "A website use to siaplay the quotes.",
//       tech: "web dev, web scrapping, seo",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
//       link: "https://www.purevichar.in/" // Add link
//     },
//     {
//       id: "p5",
//       name: "Academia",
//       purpose: "E-courses Website",
//       tech: "Web-dev and Ai",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
//       link: "https://course-connect-nu.vercel.app/team" // Add link
//     },
//     {
//       id: "p6",
//       name: "Waterfront Development",
//       purpose: "Transform the city's waterfront area into a cultural hub.",
//       tech: "Architectural design, sustainable infrastructure",
//       image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
//       link: "https://waterfrontdevelopment.example.com" // Add link
//     },
//   ];

//   const handleProjectClick = (link: string) => {
//     window.open(link, '_blank'); // Open the project link in a new tab
//   };


//   return (
//     <div className="py-20 px-4 relative overflow-hidden bg-gray-100">
//       <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJwMnNyejJ4YzVlYm9ibWZyY2cybXo2ZGRwOG0xMjFmNjEyNzVleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwaJUsuEDS5K6GGTwE/giphy.webp')]" />

//       <div className="relative z-10 h-auto">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Projects</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {projects.map((project) => (
//             <div 
//               key={project.id} 
//               className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
//               onClick={() => handleProjectClick(project.link)}
//             >
//               <Image src={project.image_urls} width={100} height={100} className='w-full' alt='logo'/>
//               {/* Card Image */}
//               {/* <div 
//                 className="h-48 w-full bg-cover bg-center" 
//                 style={{ backgroundImage: `url(${project.image_urls})` }}
//               /> */}

//               {/* Card Content */}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
//                 <p className="text-sm text-gray-600"><strong>Purpose:</strong> {project.purpose}</p>
//                 <p className="text-sm text-gray-600 mt-2"><strong>Tech:</strong> {project.tech}</p>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-white p-6 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                 <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//                 <p className="mb-2"><strong>Purpose:</strong> {project.purpose}</p>
//                 <p><strong>Tech:</strong> {project.tech}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  ExternalLink, Search } from 'lucide-react';

// Enhanced Project Component
const Project = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const projects = [
    {
      id: "p1",
      name: "Sponsify",
      
      purpose: "A website which can directly provide sponsor and the creator.",
      tech: "B@B for content creators and developers",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339222/sponsify_image_vi5pqb.png",
      link: "https://sponsify.example.com"
    },
    {
            id: "p2",
            name: "Fancy Jewellers",
            category: "App",
            purpose: "Create a website for user interaction and advertisement.",
            tech: "Designer jewellery and others",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339380/fancy_jwellers_qrgjv6.png",
            link: "https://website-xi-beryl-72.vercel.app/" // Add link
          },
          {
            id: "p3",
            name: "Smart Skills Checker",
            category: "AI", 
            purpose:"Implement AI driven spell check for smart works.",
            tech: "Artificial intelligence",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339452/candidate_skill_up0ywc.png",
            link: "https://www.candidateskillsreview.com/" // Add link
          },
          {
            id: "p4",
            name: "Pure Vichar",
            category: "Blog website",
            purpose: "A website use to siaplay the quotes.",
            tech: "web dev, web scrapping, seo",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
            link: "https://www.purevichar.in/" // Add link
          },
          {
            id: "p5",
            name: "Academia",
            purpose: "E-courses Website",
            category: "E-courses",
            tech: "Web-dev and Ai",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
            link: "https://course-connect-nu.vercel.app/team" // Add link
          },
          {
            id: "p6",
            name: "Waterfront Development",
            category: "B2B",
            purpose: "Transform the city's waterfront area into a cultural hub.",
            tech: "Architectural design, sustainable infrastructure",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
            link: "https://waterfrontdevelopment.example.com" // Add link
          },
    // ... other projects
  ];

  const categories = ['all', 'B2B', 'App', 'AI', 'Blog website', 'E-courses'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our innovative solutions that drive digital transformation
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image_urls} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-800">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.purpose}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600">{project.tech}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;
  
