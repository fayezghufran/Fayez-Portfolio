import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
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
  ];

  return (
    <section className="bg-second-bg py-40" id="projects"> 
      <h3 className="text-5xl text-black text-left md:pl-44 mb-10">
        - Projects
      </h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:px-44 mb-12">
        <h2 className="text-text-4 md:text-8xl text-7xl">My Latest Projects</h2>
        <Link to="/allprojects">
          <button className="bg-black rounded-full md:w-auto w-fit gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out">
            <div className="bg-text-4 rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-72">
              <FaArrowRight className="text-black text-xl" />
            </div>
            <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
              View All Projects
            </div>
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="flex items-center justify-center">
            <div className="relative flex flex-col w-full max-w-[105rem] md:flex-row rounded-[3.5rem] bg-[#705bc4] text-text-4 md:h-[300px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              {index % 2 === 0 ? (
                <>
                  {/* Image Container */}
                  <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-[3.5rem] bg-[#705bc4]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-[4.5rem] p-6"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col justify-between pl-16 mt-8">
                    <div>
                      <div className="flex gap-4">
                        {project.technologyUsed.map((technology) => (
                          <span
                            key={technology}
                            className="bg-[#a4db74] text-black rounded-full px-5 py-1 text-xl font-semibold"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      <h4 className="mt-6 mb-2 block text-5xl font-semibold leading-snug tracking-normal">
                        {project.title}
                      </h4>
                      <p className="mb-4 block text-2xl leading-relaxed text-gray-100 pr-20">
                        {project.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Link
                      className="inline-block mb-10"
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View details of ${project.title}`}
                    >
                      <button className="bg-black rounded-full w-auto gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
                        <div className="bg-text-4 rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-60">
                          <FaArrowRight className="text-black text-xl" />
                        </div>
                        <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
                          View Details
                        </div>
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Content (reversed) */}
                  <div className="p-6 flex flex-col justify-between pl-16 mt-8">
                    <div>
                      <div className="flex gap-4">
                        {project.technologyUsed.map((technology) => (
                          <span
                            key={technology}
                            className="bg-[#a4db74] text-black rounded-full px-5 py-1 text-xl font-semibold"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      <h4 className="mt-6 mb-2 block text-5xl font-semibold leading-snug tracking-normal">
                        {project.title}
                      </h4>
                      <p className="mb-4 block text-2xl leading-relaxed text-gray-100 pr-20">
                        {project.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Link
                      className="inline-block mb-10"
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View details of ${project.title}`}
                    >
                      <button className="bg-black rounded-full w-auto gap-4 flex items-center justify-between group overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
                        <div className="bg-text-4 rounded-full w-12 h-12 ms-2 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-60">
                          <FaArrowRight className="text-black text-xl" />
                        </div>
                        <div className="bg-[#a4db74] rounded-full w-fit p-5 text-black font-semibold text-xl px-16 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-20">
                          View Details
                        </div>
                      </button>
                    </Link>
                  </div>

                  {/* Image Container (reversed) */}
                  <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-[3.5rem] bg-[#705bc4]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-[4.5rem] p-6"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
