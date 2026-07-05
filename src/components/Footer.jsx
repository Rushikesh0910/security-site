import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">
              JMD <span className="text-brand-accent">Human Capital</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Born to Protect. Providing Complete Management Solutions across
              India since 2010 with a foundation of honesty, transparency, and
              quality.
            </p>
          </div>

          <div>
            <h4 className="text-brand-accent font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-accent font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="block text-white font-medium mb-1">
                  Client Inquiries:
                </span>
                +91 93751 01111
              </li>
              <li className="text-gray-300">
                <span className="block text-white font-medium mb-1">
                  HR & Careers:
                </span>
                +91 93283 48511
              </li>
              <li className="text-gray-300 break-all">
                <span className="block text-white font-medium mb-1">
                  Email:
                </span>
                ajeet.jmdsecurityservices@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-accent font-bold uppercase tracking-wider mb-6">
              Headquarters
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-300 leading-relaxed">
                SF-205 (2nd Floor),
                <br />
                Arihant Complex,
                <br />
                Beside Vishal Megamart,
                <br />
                GIDC, Vapi, Valsad,
                <br />
                Gujarat - 396195
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JMD Human Capital. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 text-sm hover:text-brand-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 text-sm hover:text-brand-accent transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
