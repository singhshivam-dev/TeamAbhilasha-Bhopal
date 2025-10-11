import LicLogo from "../assets/Lic-logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-[#01559B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 p-6">

            {/* Left div: Logo + Name */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full ml-4 sm:w-auto text-center sm:text-left">
                <img
                    src={LicLogo}
                    alt="LIC Logo"
                    className="h-14 sm:h-16 bg-amber-50 p-0.5 rounded"
                />
                <div>
                    <h1 className="text-2xl font-bold">Abhilasha Mauka</h1>
                    <p className="text-sm">Development Officer – Life Insurance Corporation of India</p>
                </div>
            </div>

            {/* Right div: Socials & Contact */}
            <div className="flex flex-row items-center gap-6 w-full mr-6 sm:w-auto justify-center sm:justify-end">
                <a href="https://www.facebook.com/p/Abhilasha-Mauka-Wealth-Creator-Financial-Advisor-100057512886088/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400"><FaFacebookF /></a>
                <a href="https://www.instagram.com/abhilashamauka/?igsh=MWd5am8wbnBwM25yZA%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-400"><FaInstagram /></a>
                <a href="https://www.youtube.com/@abhilashamauka" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-red-500"><FaYoutube /></a>
                <a href="https://wa.me/919907972354" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400"><FaWhatsapp /></a>
                <a href="mailto:wealthcreator23@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-300"><FaEnvelope /></a>
                <a href="tel:+919907972354" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-400"><FaPhone className="transform scale-x-[-1]" /></a>
            </div>

        </header>
    )
}
