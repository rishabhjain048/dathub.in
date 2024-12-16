'use client';

export default function Projects() {
  const projects = [
    {
      id: "p1",
      name: "City Center Renovation",
      purpose: "Revitalize the downtown area to attract businesses and tourists.",
      tech: "Urban planning, sustainable construction",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
    {
      id: "p2",
      name: "Green Spaces Initiative",
      purpose: "Create new parks and green areas for community activities.",
      tech: "Landscaping, eco-friendly materials",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
    {
      id: "p3",
      name: "Smart Traffic System",
      purpose: "Implement AI-driven traffic management to reduce congestion.",
      tech: "Artificial intelligence, IoT sensors",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
    {
      id: "p4",
      name: "Affordable Housing Project",
      purpose: "Develop sustainable, low-cost housing solutions.",
      tech: "Green building technologies, modular construction",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
    {
      id: "p5",
      name: "Public Transport Overhaul",
      purpose: "Modernize the city's public transportation system.",
      tech: "Electric buses, smart ticketing systems",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
    {
      id: "p6",
      name: "Waterfront Development",
      purpose: "Transform the city's waterfront area into a cultural hub.",
      tech: "Architectural design, sustainable infrastructure",
      image_urls: "https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-100">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJwMnNyejJ4YzVlYm9ibWZyY2cybXo2ZGRwOG0xMjFmNjEyNzVleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwaJUsuEDS5K6GGTwE/giphy.webp')]"></div>

      {/* Content Container */}
      <div className="relative z-10 h-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-48 w-full bg-cover bg-center bg-[url('https://res.cloudinary.com/dtezihsb8/image/upload/v1734276299/purevichar.in_ofyw1b.png')]"
                
              ></div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Purpose:</strong> {project.purpose}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Tech:</strong> {project.tech}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-white p-6 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-2">
                  <strong>Purpose:</strong> {project.purpose}
                </p>
                <p>
                  <strong>Tech:</strong> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
