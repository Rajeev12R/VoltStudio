import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp Click to Chat
  const phoneNumber = "918852899110";
  const message = "Hello! I would like to get more information. Let's Connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Mailto Link
  const emailAddress = "rjranjan2112@gmail.com";
  const subject = "Inquiry from Website";
  const body = "Hello, I would like to get more information about. Let's Connect.";
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and social */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              WIDE TAKE
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transforming loose ends into powerful brand stories that resonate with your audience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/volt-studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href={mailtoUrl}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Agency
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/client-portfolio" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">© {currentYear} WIDE TAKE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;