import TeamLogo from "../assets/Team-logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Links */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-6 capitalize font-bold">
              <a href="#home" className="text-black hover:text-blue-500">Home</a>
              <a href="#services" className="text-black hover:text-blue-500">Services</a>
              <a href="#team" className="text-black hover:text-blue-500">Team Abhilasha</a>
              <a href="#apply" className="text-black hover:text-blue-500">Apply for Agent</a>
              <a href="#query" className="text-black hover:text-blue-500">Query</a>
              <a href="#reviews" className="text-black hover:text-blue-500">Reviews</a>
              <a href="#contact" className="text-black hover:text-blue-500">Contact</a>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="flex-shrink-0">
            <img src={TeamLogo} alt="Logo" className="h-15 w-30" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Services</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Team Abhilasha</a>
          <a href="#apply" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Apply for Agent</a>
          <a href="#query" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Query</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-black hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
