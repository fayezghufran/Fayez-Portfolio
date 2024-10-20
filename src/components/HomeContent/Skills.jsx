import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, } from "react-icons/si";

const Skills = () => {
  
  return (
    <section className="py-16" id="skills">
      <h3 className="text-5xl text-left text-text md:pl-44 mb-10 mt-20 mx-auto">- Skills</h3>
      <h2 className="text-8xl text-left md:px-44 mb-20">
        My <span className="text-[#705bc4]">Skills</span>
      </h2>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center mb-28">
          {[
            {
              icon: <FaJava className="text-text-4 text-[5rem]" />,
              title: "Java",
              description: "Experienced in object-oriented programming.",
            },
            {
              icon: <SiJavascript className="text-text-4 text-[5rem]" />,
              title: "JavaScript",
              description: "Expert in front-end and back-end development.",
            },
            {
              icon: <FaHtml5 className="text-text-4 text-[5rem]" />,
              title: "HTML",
              description: "Proficient in structuring web pages.",
            },
            {
              icon: <FaCss3 className="text-text-4 text-[5rem]" />,
              title: "CSS",
              description: "Skilled in styling and layout design.",
            },
            {
              icon: <FaReact className="text-text-4 text-[5rem]" />,
              title: "React.js",
              description: "Experienced in developing interactive UIs.",
            },
            {
              icon: <FaNodeJs className="text-text-4 text-[5rem]" />,
              title: "Node.js",
              description: "Experienced in building server-side applications.",
            },
            {
              icon: <SiExpress className="text-text-4 text-[5rem]" />,
              title: "Express.js",
              description: "Skilled in building web applications with Express.",
            },
            {
              icon: <SiMongodb className="text-text-4 text-[5rem]" />,
              title: "MongoDB",
              description: "Proficient in NoSQL database management.",
            },
          ].map((skill, index) => (
            <div key={index} className="">
              <div className="flex flex-col items-center bg-second-bg w-72 h-[25rem] md:w-96 md:h-[30rem] rounded-full transition-transform duration-500 hover:scale-105 hover:border-[#705bc4] hover:shadow-2xl">
                <div className="bg-[#705bc4] rounded-full w-36 h-36 md:w-44 md:h-44 flex justify-center items-center mt-10">
                  {skill.icon}
                </div>
                <h3 className="pt-4 text-2xl md:text-3xl font-semibold text-text-4">
                  {skill.title}
                </h3>
                <p className="text-lg mt-2 mb-4 p-4 text-text-4 text-center">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
