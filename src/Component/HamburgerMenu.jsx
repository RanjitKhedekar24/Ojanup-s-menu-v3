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
      <button
        className="flex items-center justify-center w-10 h-10 focus:outline-none transition-transform duration-200 hover:scale-110 pt-1"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu
          className="text-gray-800 transition-colors duration-200 hover:text-gray-600"
          size={24}
        />
      </button>

      {/* Mobile menu with animation */}
      <nav
        className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg md:hidden transform transition-all duration-200 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col">
          {["/", "/contact", "/menu", "/gallery"].map((path, index) => (
            <li
              key={path}
              className="hover:bg-gray-100 transition-colors duration-200"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: `translateX(${isOpen ? 0 : -20}px)`,
                transition: `all 200ms ${index * 50}ms`,
              }}
            >
              <Link to={path} className="block px-4 py-2 text-gray-800">
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
