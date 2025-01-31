import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Target, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "8+", label: "Services Offered", icon: Sparkles },
    { number: "10+", label: "Tech Stack", icon: Code },
    { number: "5+", label: "Industries Served", icon: Target },
    { number: "100%", label: "Client Satisfaction", icon: Users }
  ];

  const technologies = [
    { name: "React Native", category: "Mobile" },
    { name: "Expo", category: "Mobile" },
    { name: "Next.js", category: "Web" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" }
  ];

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-48"> {/* Adjusted padding top */}
      <div className="mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-blue-600">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate developers and designers creating innovative 
              digital solutions that drive business growth and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <div className="text-4xl font-bold mb-2 text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Expertise</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                From innovative SaaS products to cutting-edge mobile applications, we bring 
                technical excellence to every project. Our expertise spans web development, 
                AI integration, and cloud solutions, ensuring we deliver robust and scalable 
                digital products.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Technology Stack</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-100 hover:border-blue-600 transition-colors">
                    <div className="relative p-4 text-center">
                      <div className="text-sm font-medium text-gray-400 mb-1">{tech.category}</div>
                      <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Approach</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in creating future-proof solutions that grow with your business. 
                Our development process emphasizes scalability, security, and user experience, 
                ensuring that every product we deliver exceeds expectations and drives real 
                business value.
              </p>
            </section>
          </div>
          </div>
        </div>
      
    </main>
  );
};

export default AboutPage;