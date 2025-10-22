import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import TeamLogo from "../assets/Team-logo.png";
import Separator from "../ui/Separator";

export default function Contact() {
  return (
    <div id="contact" className="bg-[#F7F5F4]">
      <section id="contact" className="max-w-5xl mx-auto px-6 py-12 text-center sm:text-left">
        {/* Heading */}
        <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize">
          Contact Us
        </h1>
        <Separator />

        {/* Contact Card */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left: Profile */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img
              src={TeamLogo}
              alt="TeamLogo"
              className="h-16 sm:h-20 bg-amber-50 p-1 rounded"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-blue-900">Abhilasha Mauka</h2>
              <p className="text-gray-700 font-medium">
                Development Officer – Life Insurance Corporation of India
              </p>
              <p className="text-gray-600 mt-1">Bhopal, Madhya Pradesh</p>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-row items-center gap-5 justify-center sm:justify-end">
            <a
              href="https://www.facebook.com/p/Abhilasha-Mauka-Wealth-Creator-Financial-Advisor-100057512886088/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/abhilashamauka/?igsh=MWd5am8wbnBwM25yZA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@abhilashamauka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919907972354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:abhilashamauka23@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+919907972354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-yellow-500 transition"
            >
              <FaPhone className="transform scale-x-[-1]" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 space-y-2 text-gray-700 text-center sm:text-left">
          <p>
            <span className="font-semibold text-blue-900">Email:</span>{" "}
            <a
              href="mailto:abhilashamauka23@gmail.com"
              className="text-blue-600 hover:underline"
            >
              abhilashamauka23@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-blue-900">Phone:</span>{" "}
            <a href="tel:+919907972354" className="text-blue-600 hover:underline">
              +91 99079 72354
            </a>
          </p>
          <p>
            <span className="font-semibold text-blue-900">Office:</span>{" "}
            LIC Branch Office, Bhopal
          </p>
          <p className="text-gray-600 italic pt-2">
            Available Monday to Friday — 10:00 AM to 6:00 PM
          </p>
        </div>
      </section>
    </div>
  );
}
