import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      id: 1,
      title: "SoftEdge",
      description:
        "SoftEdge is a modern, responsive website built with React and Tailwind CSS. It offers a clean and minimalistic design, perfect for showcasing business services with smooth navigation and a user-friendly interface.",
      imageUrl: "/images/softedge.png",
      link: "https://soft-edge-gamma.vercel.app/",
      technologyUsed: ["React.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Printify",
      description:
        "A replica of the Printify website, recreated to mirror the design and functionality of the original platform.",
      imageUrl: "/images/printify.png",
      link: "https://printify-hazel.vercel.app/",
      technologyUsed: ["React.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Academy Catalog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.",
      imageUrl: "/images/academy.png",
      link: "https://academy-catalog.vercel.app/",
      technologyUsed: ["React.js", "Node.js", "Tailwind CSS"],
    },
    
  ];

  return (
    <section className="bg-text-2 md:p-20">
      <h2 className="text-8xl text-text-4 text-center mb-40 m-20 md:m-48">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 mb-40">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#705bc4] rounded-[3.5rem] p-6 text-text-4"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover rounded-[3rem]"
            />
            <div className="p-10">
              <div className="flex gap-4 mt-4">
                {project.technologyUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#a4db74] text-black rounded-full px-4 py-1 text-xl font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="mt-8 text-5xl font-semibold">{project.title}</h4>
              <p className="mt-4 text-2xl">{project.description}</p>
              {/* View Details Button */}
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10"
                aria-label={`View details of ${project.title}`}
              >
                <button className="bg-black rounded-full w-auto gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="bg-white rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-44">
                    <FaArrowRight className="text-black text-xl" />
                  </div>
                  <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
                    View
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
