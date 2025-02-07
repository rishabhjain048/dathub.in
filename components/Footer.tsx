import Link from 'next/link';
import {Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <div className="mb-4 pr-1 items-center flex">
              {/* Logo */}
              <Image 
                src="/images/dathub.jpg" 
                alt="Dathub Logo" 
                className="h-12 w-auto mx-auto md:mx-0"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
            </div>
            
            <p className="text-gray-400">
              Founded in 2024, Dathub.in is your gateway to cutting-edge innovation and technology solutions.
              We are committed to empowering businesses with tailored services and transformative digital strategies.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-yellow-400">Home</Link></li>
              <li><Link href="/ourservices" className="text-gray-400 hover:text-yellow-400">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-yellow-400">Contact</Link></li>
              
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              <p>Tech Info</p>
              <p>Shubhash nagar,<br />Sagar, Madhya Pradesh, India</p>
              <p className="mt-2">Phone: 
                <a href="tel:+919302893948" className="hover:text-yellow-400"> +91 9302893948</a>
              </p>
              <p><a href="https://wa.me/9302893948" className="hover:text-yellow-400">Chat with us on WhatsApp</a></p>
              <p>Email: <a href="mailto:hr@dathub.in" className="hover:text-yellow-400">hr@dathub.in</a></p>
            </address>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Dathub All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <Link href="#" className="text-gray-400 hover:text-yellow-400"><Facebook size={20} /></Link> */}
            <Link href="#" className="text-gray-400 hover:text-yellow-400"><Twitter size={20} /></Link>
            <Link href="https://www.instagram.com/dathub.in/" className="text-gray-400 hover:text-yellow-400"><Instagram size={20} /></Link>
            <Link href="https://www.linkedin.com/company/dathub/?viewAsMember=true" className="text-gray-400 hover:text-yellow-400"><Linkedin size={20} /></Link>
            {/* <Link href="#" className="text-gray-400 hover:text-yellow-400"><Youtube size={20} /></Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
