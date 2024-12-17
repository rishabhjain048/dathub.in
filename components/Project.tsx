'use client';

import Image from 'next/image';
import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: "p1",
      name: "Sponsify",
      purpose: "A website which can directly provide sponsor and the creator.",
      tech: "B@B for content creators and developers",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339222/sponsify_image_vi5pqb.png",
      link: "https://sponsify.example.com" // Add link
    },
    {
      id: "p2",
      name: "Fancy Jewellers",
      purpose: "Create a website for user interaction and advertisement.",
      tech: "Designer jewellery and others",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339380/fancy_jwellers_qrgjv6.png",
      link: "https://website-xi-beryl-72.vercel.app/" // Add link
    },
    {
      id: "p3",
      name: "Smart Skills Checker", 
      purpose:"Implement AI driven spell check for smart works.",
      tech: "Artificial intelligence",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734339452/candidate_skill_up0ywc.png",
      link: "https://www.candidateskillsreview.com/" // Add link
    },
    {
      id: "p4",
      name: "Pure Vichar",
      purpose: "A website use to siaplay the quotes.",
      tech: "web dev, web scrapping, seo",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
      link: "https://www.purevichar.in/" // Add link
    },
    {
      id: "p5",
      name: "Academia",
      purpose: "E-courses Website",
      tech: "Web-dev and Ai",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
      link: "https://course-connect-nu.vercel.app/team" // Add link
    },
    {
      id: "p6",
      name: "Waterfront Development",
      purpose: "Transform the city's waterfront area into a cultural hub.",
      tech: "Architectural design, sustainable infrastructure",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
      link: "https://waterfrontdevelopment.example.com" // Add link
    },
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank'); // Open the project link in a new tab
  };


  return (
    <div className="py-20 px-4 relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJwMnNyejJ4YzVlYm9ibWZyY2cybXo2ZGRwOG0xMjFmNjEyNzVleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwaJUsuEDS5K6GGTwE/giphy.webp')]" />

      <div className="relative z-10 h-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project.link)}
            >
              <Image src={project.image_urls} width={100} height={100} className='w-full' alt='logo'/>
              {/* Card Image */}
              {/* <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image_urls})` }}
              /> */}

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600"><strong>Purpose:</strong> {project.purpose}</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Tech:</strong> {project.tech}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-white p-6 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-2"><strong>Purpose:</strong> {project.purpose}</p>
                <p><strong>Tech:</strong> {project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
