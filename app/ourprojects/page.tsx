'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink} from 'lucide-react';

const Page = () => {
  
  const [selectedTag, setSelectedTag] = useState('');
  
  const projects = [
    {
      id: "p1",
      name: "Instant verification",
      purpose: "Real-time background verification services in India with support for ID verification in 195+ countries.",
      tech: "API Integration, and proper authantications",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870768/Untitled_design_12_c8us3j.png",
      link: "https://www.instantverify.in/",
      tags: ["AI"]
    },
    {
      id: "p2",
      name: "Sponsify",
      purpose: "A website which can directly provide sponsor and the creator.",
      tech: "B@B for content creators and developers",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339222/sponsify_image_vi5pqb.png",
      link: "https://sponsify.example.com",
      tags: ["B2B", "Sponsorship"]
    },
    {
      id: "p3",
      name: "Fancy Jewellers App",
      purpose: "Create the Android app for jewelers who want to display live gold rates to show his customer.",
      tech: "Designer jewellery and others",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870769/Untitled_design_14_oyb1t2.png",
      link: "https://play.google.com/store/apps/details?id=com.fancyjewellers.fancyjewellers",
      tags: ["App", "Design"]
    },
    {
      id: "p4",
      name: "Landing Page",
      purpose: "Create the landing page for an early Startup",
      tech: "Next.js",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339452/candidate_skill_up0ywc.png",
      link: "https://www.candidateskillsreview.com/",
      tags: ["Startup", "Education"]
    },
    {
      id: "p5",
      name: "Pure Vichar",
      purpose: "A website use to display the quotes.",
      tech: "web dev, web scrapping, seo",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
      link: "https://www.purevichar.in/",
      tags: ["Content", "Web Scraping"]
    },
    {
      id: "p6",
      name: "Academia",
      purpose: "Course Selling website",
      tech: "Web-dev and Ai",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870824/Untitled_design_10_ycugxt.png",
      link: "https://course-connect-nu.vercel.app/team",
      tags: ["Education", "AI"]
    },
    {
      id: "p7",
      name: "Instant verification",
      purpose: "Real-time background verification services in India with support for ID verification in 195+ countries.",
      tech: "API Integration, and proper authantications",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
      link: "https://www.instantverify.in/",
      tags: ["AI"]
    },
    {
      id: "p8",
      name: "New Rai Footwear App",
      purpose: "An app for display the product updates for a wholesale footwear shop",
      tech: "App devlopnet",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1738870768/Untitled_design_13_xgvjqx.png",
      link: "https://play.google.com/apps/internaltest/4700973475734720362",
      tags: ["App devlopment"]
    }
  ];

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on search and tags
  // const filteredProjects = projects.filter(project => {
  //   const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        project.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        project.tech.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesTag = !selectedTag || project.tags.includes(selectedTag);
  //   return matchesSearch && matchesTag;
  // });

  const handleProjectClick = (link:string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <motion.h1 
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore our portfolio of innovative solutions
        </motion.p>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          {/* <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedTag('')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image_urls}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="text-white" size={24} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.purpose}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results Message */}
      
    </div>
  );
};

export default Page;
