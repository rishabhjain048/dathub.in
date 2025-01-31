import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Cloud, Brain, ShoppingCart, FileText, Globe, Box } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web solutions using cutting-edge technologies. From responsive websites to progressive web apps, we deliver seamless user experiences across all platforms.",
      icon: Monitor,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications built with React Native and Expo. We create engaging mobile experiences that users love.",
      icon: Smartphone,
    },
    {
      title: "SaaS Product Development",
      description: "End-to-end SaaS solution development with scalable architecture, subscription management, and multi-tenant capabilities.",
      icon: Cloud,
    },
    {
      title: "AI Integration",
      description: "Implementing smart AI solutions for business automation, data analysis, and enhanced user experiences.",
      icon: Brain,
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured e-commerce platforms with secure payment integration, inventory management, and customer analytics.",
      icon: ShoppingCart,
    },
    {
      title: "Content Management",
      description: "Custom CMS solutions with web scraping capabilities, content optimization, and seamless content delivery.",
      icon: FileText,
    },
    {
      title: "B2B Platforms",
      description: "Specialized business-to-business platforms connecting stakeholders with secure data exchange and workflow automation.",
      icon: Globe,
    },
    {
      title: "Educational Technology",
      description: "Interactive e-learning platforms with progress tracking, assessment tools, and personalized learning paths.",
      icon: Box,
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24"> {/* Adjusted padding top */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-blue-600">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions with cutting-edge technology 
            and exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <service.icon className="w-6 h-6 text-blue-600" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
