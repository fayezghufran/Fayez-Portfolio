import React from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg py-16 px-[9%] space-y-16" id="connect">
      {/* Let's Connect and Hire Me Now Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-5xl md:text-[4.6rem] text-text text-center md:text-left">
          Let's Connect
        </h1>
        <a href="mailto:fayezghufran8573@gmail.com" aria-label="Hire Me Now">
          <button className="flex-shrink-0 bg-black rounded-full w-auto gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg mt-4 md:mt-0">
            <div className="bg-white rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-64">
              <FaArrowRight className="text-black text-xl" />
            </div>
            <div className="bg-main rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
              Hire Me Now
            </div>
          </button>
        </a>
      </div>

      {/* Separator Line */}
      <hr className="w-full h-[1px] bg-main my-8 border-none" />

      {/* Copyright and Footer Icon Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <p className="text-sm md:text-lg text-text text-center md:text-left">
          Copyright &copy; 2024 Fayez Ghufran | All Rights Reserved
        </p>
        <div className="mt-4 md:mt-0">
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="inline-flex justify-center items-center p-3 bg-main rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-main"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
