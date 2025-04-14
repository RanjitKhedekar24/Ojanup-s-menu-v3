import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      {/* Blur Background */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10" />
      )}

      <button
        className="fixed top-4 right-4 z-20 flex items-center justify-center w-10 h-10 focus:outline-none transition-all duration-300 hover:scale-110 pt-1"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu
          className={`text-gray-800 transition-all duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
          size={24}
        />
      </button>

      {/* Mobile menu with animation */}
      <nav
        className={`fixed top-0 right-0 h-[300px] w-64 bg-white shadow-lg z-20 transform transition-all duration-300 ease-in-out rounded-bl-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col pt-16">
          {["/", "/contact", "/menu", "/gallery"].map((path, index) => (
            <li
              key={path}
              className="hover:bg-gray-100 transition-colors duration-200"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: `translateX(${isOpen ? 0 : 20}px)`,
                transition: `all 300ms ${index * 100}ms`,
              }}
            >
              <Link 
                to={path} 
                className="block px-6 py-2.5 text-gray-800 hover:text-rose-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path === "/contact"
                  ? "Contact us"
                  : path === "/menu"
                  ? "Menu"
                  : "Gallery"}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
