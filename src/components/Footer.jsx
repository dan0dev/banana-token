import { Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const navLinks = [
    { name: "About us", href: "#" },
    { name: "How to buy", href: "#" },
    { name: "Tokenomics", href: "#" },
  ];

  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-gradient-to-b from-[#FDDF44] to-[#fcce04] pb-4 pt-2"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl shadow-md border-black border-2 p-4 sm:p-8 transition-all duration-700 transform ${
            isVisible
              ? "border-b-8 border-r-4 translate-y-0 opacity-100"
              : "border-b-0 border-r-0 translate-y-4 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col space-y-4 items-center sm:items-start">
              <img
                src="src/assets/images/banana-logo.png"
                alt="Banana Logo"
                className="w-40 sm:w-48"
              />
              <p className="text-sm text-gray-600 max-w-xs text-center sm:text-left">
                Join our community and be part of the next big thing in crypto
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4 items-center sm:items-start">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3 text-center sm:text-left">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col space-y-4 items-center sm:items-start">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-gray-600" />
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  contact@example.com
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  className="w-12 h-12 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-250 active:translate-y-1"
                  aria-label="Telegram"
                >
                  <img
                    src="src/assets/images/telegram.svg"
                    alt="Telegram icon"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  className="w-12 h-12 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-250 active:translate-y-1"
                  aria-label="X (formerly Twitter)"
                >
                  <img
                    src="src/assets/images/x.svg"
                    alt="X icon"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col space-y-4 items-center sm:items-start">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col space-y-3 w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FCEF60]"
                />
                <button className="w-full h-12 text-base flex items-center justify-center bg-[#FCEF60] rounded-xl border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-250 active:translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between items-center">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                © {year} Your Company. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
