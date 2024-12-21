import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About us", href: "#" },
    { name: "How to buy", href: "#" },
    { name: "Tokenomics", href: "#" },
  ];

  return (
    <section className="bevellier5 w-full px-6 z-50">
      <nav className="max-w-[1920px] mx-auto flex items-center justify-between py-1 md:py-5 lg:px-8 px-4 bg-white mt-4 rounded-3xl shadow-md border-black border-2 border-b-8 border-r-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="src/assets/images/banana-logo.png"
            alt="Banana Logo"
            className="w-32 sm:w-48"
          />
        </div>

        {/* Hamburger menu btn */}
        <button
          className="lg:hidden p-3 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between flex-1">
          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-20 xl:space-x-24">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xl hover:text-gray-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-6">
            <button
              className="w-14 h-14 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-250"
              aria-label="Telegram"
            >
              <img
                src="src/assets/images/telegram.svg"
                alt="Telegram icon"
                className="w-8 h-8"
              />
            </button>
            <button
              className="w-14 h-14 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-250"
              aria-label="X (formerly Twitter)"
            >
              <img
                src="src/assets/images/x.svg"
                alt="X icon"
                className="w-8 h-8"
              />
            </button>
            <button className="w-36 h-14 text-lg flex items-center tracking-wide justify-center bg-[#FCEF60] rounded-xl border border-b-2 border-r-2 border-black hover:border-b-4 hover:border-r-2 transition-all duration-250">
              Buy now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-24 left-4 right-4 bg-white rounded-xl border-2 border-black border-b- p-6 flex-col space-y-6 shadow-md z-20`}
        >
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="text-center">
                <a
                  href={link.href}
                  className="text-xl hover:text-gray-600 transition-colors duration-200 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="w-14 h-14 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-200"
              aria-label="Telegram"
            >
              <img
                src="src/assets/images/telegram.svg"
                alt="Telegram icon"
                className="w-8 h-8"
              />
            </button>
            <button
              className="w-14 h-14 flex items-center justify-center bg-[#FCEF60] rounded-lg border border-black border-b-2 hover:border-b-4 hover:border-r-2 hover:bg-[#fff15c] transition-all duration-200"
              aria-label="X (formerly Twitter)"
            >
              <img
                src="src/assets/images/x.svg"
                alt="X icon"
                className="w-8 h-8"
              />
            </button>
            <button className="w-36 h-14 text-lg flex items-center tracking-wide justify-center bg-[#FCEF60] rounded-xl border border-r-4 border-b-2 border-black">
              Buy now
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
