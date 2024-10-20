import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbSquareRoundedLetterF } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect and active link
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "connect"];
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after click on mobile
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="w-full px-10 md:px-20 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <TbSquareRoundedLetterF className="text-text-2 text-6xl" />
          <span className="font-bold text-4xl text-text-2">Fayez Ghufran</span>
        </Link>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-96 opacity-0 md:opacity-100 md:translate-x-0"
          } absolute md:static left-0 top-0 md:top-auto md:left-auto md:transform-none bg-white gap-10 md:bg-transparent bg-opacity-70 md:bg-opacity-100 backdrop-blur-lg w-full md:w-auto p-24 md:p-0 flex flex-col md:flex-row items-center md:space-x-8 text-2xl font-medium transition-all duration-500 ease-in-out`}
        >
          <a
            href="#home"
            className={`text-text hover:text-text-2 hover:underline hover:underline-offset-4 transition duration-300 ${
              activeSection === "home" ? "text-text-2 underline" : ""
            }`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-text hover:text-text-2 hover:underline hover:underline-offset-4 transition duration-300 ${
              activeSection === "about" ? "text-text-2 underline" : ""
            }`}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#skills"
            className={`text-text hover:text-text-2 hover:underline hover:underline-offset-4 transition duration-300 ${
              activeSection === "skills" ? "text-text-2 underline" : ""
            }`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`text-text hover:text-text-2 hover:underline hover:underline-offset-4 transition duration-300 ${
              activeSection === "projects" ? "text-text-2 underline" : ""
            }`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a
            href="#connect"
            className={`text-text hover:text-text-2 hover:underline hover:underline-offset-4 transition duration-300 ${
              activeSection === "connect" ? "text-text-2 underline" : ""
            }`}
            onClick={() => scrollToSection("connect")}
          >
            Connect
          </a>
        </div>

        {/* Contact Button */}
        <div>
          <a href="tel:+918299353776">
            <button className="hidden md:block px-8 py-4 bg-text-2 text-white text-2xl rounded-full hover:bg-gray-500 transition duration-300">
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl md:hidden z-50 relative"
        >
          {isOpen ? (
            <FaTimes className="text-text-2" />
          ) : (
            <FaBars className="text-text-2" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
