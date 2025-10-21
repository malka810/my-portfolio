import React from "react";
import "aos/dist/aos.css";
import attendo from "../assets/images/attendo.png";

type ProjectType = {
  title: string;
  img: string;
  link: string;
  tools: string[];
};

const projects: ProjectType[] = [
  {
    title: "Online Course Management System",
    img: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://github.com/malka810/Second-Sem-Final-Project.git",
    tools: ["Spring Boot", "Hibernate", "MySQL", "HTML/CSS/JS"],
  },
  {
    title: "Inventory Management System",
    img: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://github.com/malka810/First-Sem-Final-Project.git",
    tools: ["Java", "SQL", "JavaFX", "Layered Architecture"],
  },
  {
    title: "Strategic Growth Analysis (Group Project)",
    img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://github.com/malka810/Strategic-Growth-Analysis.git",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Smart Parking Management System (SPMS)",
    img: "https://images.pexels.com/photos/8960992/pexels-photo-8960992.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://github.com/malka810/SPMS.git",
    tools: ["Spring Boot", "Spring Cloud", "MySQL", "Docker"],
  },
  {
    title: "Mobile Attendance Tracker",
    img: attendo,
    link: "https://github.com/malka810/Mobile-Attendance-Tracker.git",
    tools: ["React Native", "Firebase", "FCM", "GPS"],
  },
];

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white py-20 px-6 bg-black"
      data-aos="fade-up"
    >
    <h2 className="text-4xl sm:p-5 sm:text-5xl md:text-6xl lg:text-7xl sm:text-left mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 font-semibold animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.8) border-b-4">
          My Projects
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-105 "
            data-aos="zoom-out-left"
          >
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 sm:h-64 object-cover opacity-80 group-hover:opacity-100 transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 w-full p-6 text-center z-10">
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                {project.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 text-xs sm:text-sm rounded-full border border-white/50 text-gray-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 rounded-lg text-white font-medium transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-indigo-400/40"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
