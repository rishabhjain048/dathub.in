import React from "react";

function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
          <div className="mb-4">
            <span className="text-5xl text-blue-600 mb-2 inline-block p-3 rounded-full bg-blue-100">
              🏢
            </span>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Founded in 2023</h3>
          </div>
          <p className="text-gray-600 text-lg">
            We started with a vision to transform local cities.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
          <div className="mb-4">
            <span className="text-5xl text-green-600 mb-2 inline-block p-3 rounded-full bg-green-100">
              👥
            </span>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">6+ City Projects</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Successfully completed projects in multiple local cities.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl p-6 text-center transition-all transform hover:scale-105">
          <div className="mb-4">
            <span className="text-5xl text-yellow-600 mb-2 inline-block p-3 rounded-full bg-yellow-100">
              📈
            </span>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">8+ Investors</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Backed by more than 8 trusted investors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
