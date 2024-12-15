'use client';

import Link from "next/link";
import { useState } from "react";

const projects = [
  { id: "p1", name: "City Center Renovation", description: "Revitalized the downtown area" },
  { id: "p2", name: "Green Spaces Initiative", description: "Created new parks and green areas" },
  { id: "p3", name: "Smart Traffic System", description: "Implemented AI-driven traffic management" },
  { id: "p4", name: "Affordable Housing Project", description: "Developed sustainable, low-cost housing" },
  { id: "p5", name: "Public Transport Overhaul", description: "Modernized the city's public transportation" },
  { id: "p6", name: "Waterfront Development", description: "Transformed the city's waterfront area" },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 px-4 relative  overflow-hidden">
      {/* Background GIF */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJwMnNyejJ4YzVlYm9ibWZyY2cybXo2ZGRwOG0xMjFmNjEyNzVleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwaJUsuEDS5K6GGTwE/giphy.webp')]"
        
      ></div>

      {/* Content Container */}
      <div className="relative z-10 h-[50vh]">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Projects</h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link href={project.id} key={project.id}>
            <div
              
              className={`bg-white bg-opacity-90 rounded-lg shadow-md p-6 hover:shadow-xl transition-transform duration-300 ${
                hoveredId === project.id ? "scale-105" : "scale-100"
              }`}
              
              onMouseLeave={() => setHoveredId(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
