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
      name: "Instant verification",
      purpose: "Real-time background verification services in India with support for ID verification in 195+ countries.",
      tech: "API Integration, and proper authantications",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870768/Untitled_design_12_c8us3j.png",
      link: "https://www.instantverify.in/",
      category: "AI"
    },
    {
      id: "p2",
      name: "Sponsify",
      category: "SAAS",
      purpose: "A website which can directly provide sponsor and the creator.",
      tech: "B@B for content creators and developers",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339222/sponsify_image_vi5pqb.png",
      link: "https://sponsify.example.com"
    },
    {
            id: "p3",
            name: "Fancy Jewellers App",
            category: "App",
            purpose: "Create the Android app for jewelers who want to display live gold rates to show his customer..",
            tech: "Designer jewellery and others",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870769/Untitled_design_14_oyb1t2.png",
            link: "https://play.google.com/store/apps/details?id=com.fancyjewellers.fancyjewellers", // Add link
          },
          {
            id: "p4",
            name: "Landing Page",
            purpose: "Create the landing page for an early Startup",
            tech: "Next.js",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339452/candidate_skill_up0ywc.png",
            link: "https://www.candidateskillsreview.com/", // Add link
      
            category: "Startup",
          },
          {
            id: "p5",
            name: "Pure Vichar",
            category: "Blog website",
            purpose: "A website use to display the quotes and shayari in hindi.",
            tech: "web dev, web scrapping, seo",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
            link: "https://www.purevichar.in/" // Add link
          },
          {
            id: "p6",
            name: "Academia",
            purpose: "E-courses Website",
            category: "E-courses",
            tech: "Web-dev and Ai",
            image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870824/Untitled_design_10_ycugxt.png",
            link: "https://course-connect-nu.vercel.app/team" // Add link
          },
          
    // ... other projects
  ];

  const categories = ['all', 'SAAS', 'App', 'AI', 'Blog website', 'E-courses','Startup'];

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

        {/* New Redirect Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.location.href = '/ourprojects'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg transition-all hover:bg-blue-700"
          >
            View All Projects
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Project;
  
