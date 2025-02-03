import React from "react";

export default function Contact() {
  return (
    <section
    id="contact"
      className="py-20 px-4 bg-gray-100 bg-center relative bg-no-repeat bg-cover bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRqa3QxM2pjZXUzMW9pcWR5dGpsdnRyM3V5dGJuNmpjdGZpYzFtNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcZhFmufozDCij3p22/giphy.webp')]"
      
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4 bg-black p-6 rounded-lg shadow-lg opacity-80">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border bg-black text-white border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border bg-black text-white  border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border bg-black text-white  border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Send Message
          </button>        </form>
      </div>
    </section>
  );
}
