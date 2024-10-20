import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {  
  return (
    <section className="container mx-auto flex justify-center items-center bg-second-bg text-text-4 py-20" id="about">
      <div className="text-left max-w-[98rem]">
        <h3 className="text-5xl text-left text-text-4 mb-10">- About</h3>
        <h2 className="text-5xl md:text-8xl leading-snug mb-6">
          About <span className="text-[#a4db74]">Me</span>
        </h2>
        <h3 className="text-4xl md:text-5xl mb-6">MERN Stack Developer!</h3>
        <p className="text-2xl mb-6 leading-normal">
          I recently graduated with a B.Tech in Computer Science Engineering
          from Dr. APJ Abdul Kalam Technical University, Lucknow, Uttar Pradesh,
          India. I discovered my passion for web development during a hackathon,
          where I built my first MERN stack application. The experience ignited
          my desire to create impactful web applications.
        </p>
        <p className="text-2xl mb-6 leading-normal">
          I enjoy transforming ideas into reality by building user-friendly
          applications that solve real-world problems. My projects reflect my
          commitment to creating seamless user experiences and engaging
          interfaces.
        </p>
        <p className="text-2xl mb-6 leading-normal">
          In addition to my technical skills, I am a quick learner and a team
          player, always eager to take on new challenges and collaborate with
          others. I’m excited to share my journey and showcase my skills through
          this portfolio.
        </p>
        <button className="bg-black rounded-full w-auto gap-4 mt-12 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
          <div className="bg-white rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-56">
            <FaArrowRight className="text-black text-xl" />
          </div>
          <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
            Read More
          </div>
        </button>
      </div>
    </section>
  );
};

export default About;
