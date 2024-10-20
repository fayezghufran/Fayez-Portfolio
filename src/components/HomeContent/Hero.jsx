import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex justify-center items-center text-center pt-28" id="home">
      <div className="relative flex flex-col justify-center items-center">
        <h3 className="text-4xl md:text-5xl font-bold">- Hello</h3>
        <h1 className="text-6xl md:text-[10rem] font-bold">
          I'm <span className="text-text-2 underline">Fayez Ghufran</span>
        </h1>
        <h3 className="text-3xl md:text-5xl mb-12">MERN Stack Developer</h3>

        <div className="flex justify-center mt-12 mb-10">
          <a
            href="mailto:fayezghufran8573@gmail.com"
            aria-label="Send me an email"
            title="Email"
            className="w-16 h-16 flex justify-center items-center border-2 border-[#a4db74] rounded-full text-text-2 text-5xl transition duration-500 ease-in-out hover:bg-[#a4db74] hover:text-[#2b2d42] transform hover:scale-110"
          >
            <MdEmail />
          </a>
          <a
            href="www.linkedin.com/in/fayez-ghufran"
            aria-label="Visit my LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 mx-3 flex justify-center items-center border-2 border-[#a4db74] rounded-full text-text-2 text-5xl transition duration-500 ease-in-out hover:bg-[#a4db74] hover:text-[#2b2d42] transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fayezghufran"
            aria-label="Visit my GitHub"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 mx-3 flex justify-center items-center border-2 border-[#a4db74] rounded-full text-text-2 text-5xl transition duration-500 ease-in-out hover:bg-[#a4db74] hover:text-[#2b2d42] transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/your-instagram"
            aria-label="Visit my Instagram"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 mx-3 flex justify-center items-center border-2 border-[#a4db74] rounded-full text-text-2 text-5xl transition duration-500 ease-in-out hover:bg-[#a4db74] hover:text-[#2b2d42] transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        <a href="/Fayez_Resume.pdf" download aria-label="Download my CV">
          <button className="bg-black rounded-full w-auto gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
            <div className="bg-white rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-64">
              <FaArrowRight className="text-black text-xl" />
            </div>
            <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
              Download CV
            </div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
