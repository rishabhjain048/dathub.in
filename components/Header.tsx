import Link from 'next/link';
import Image from 'next/image';
import logo_image from '@/public/images/dathub.jpg';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 py-3bg-gray-900 text-sm">
        <div className="flex space-x-6">
          <Link href="mailto:info@company.com" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Debtrch@company.com
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="tel:+918871266742" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            +918871266742
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="#linkedin" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            LinkedIn
          </Link>
          <Link href="#twitter" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Instagram
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <Image width={60} height={60} src={logo_image} alt="Company Logo" className="w-18 h-18 rounded-full border-2 bg-cover border-white shadow-xl transition transform hover:scale-110" />
          <span className="text-4xl font-extrabold tracking-wide text-yellow-300 hover:text-white transition duration-300">
            DAT<span className="text-white font-serif">HUB</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/hero" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition duration-300 transform hover:scale-105">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-end px-6 py-4">
        <div className="text-white focus:outline-none hover:text-yellow-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
