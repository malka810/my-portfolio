import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";

type SkillItem = {
  icon: string;
  name: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const Skill: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Programming",
      skills: [
        { icon: "fa-brands fa-java", name: "Java" },
        { icon: "fa-brands fa-python", name: "Python" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-react", name: "React" },
        { icon: "fa-brands fa-typo3", name: "TypeScript" },
        { icon: "fa-solid fa-leaf", name: "Spring Boot" },
        { icon: "fa-solid fa-code", name: "Java EE" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { icon: "fa-brands fa-html5", name: "HTML" },
        { icon: "fa-brands fa-css3-alt", name: "CSS" },
        { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
        { icon: "fa-solid fa-wind", name: "Tailwind CSS" },
        { icon: "fa-solid fa-file-code", name: "JSP" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: "fa-solid fa-database", name: "MySQL" },
        { icon: "fa-solid fa-plug", name: "JDBC" },
        { icon: "fa-solid fa-leaf", name: "MongoDB" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [{ icon: "fa-brands fa-docker", name: "Docker" }],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-brands fa-github", name: "GitHub" },
        { icon: "fa-solid fa-diagram-project", name: "ModelMapper" },
        { icon: "fa-solid fa-key", name: "JWT" },
        { icon: "fa-solid fa-envelope", name: "Nodemailer" },
        { icon: "fa-solid fa-paper-plane", name: "SendGrid" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [categories.length]);

  const renderSkills = (skills: SkillItem[]) =>
    skills.map((skill, i) => (
      <div
        key={i}
        className="flex flex-col items-center justify-center w-28 sm:w-32 md:w-36 gap-3 transition-transform duration-100 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)] hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.9)]"
        data-aos="zoom-out-left"
      >
        <i
          className={`${skill.icon} text-5xl sm:text-6xl md:text-7xl text-indigo-400 hover:scale-110 transition-transform`}
        ></i>
        <span className="text-sm sm:text-base text-center mt-2">{skill.name}</span>
      </div>
    ));

  return (
    <section
      id="skill"
      data-aos="fade-up"
      className="py-20 px-6 text-white text-center overflow-hidden relative"
    >
       <h2 className="text-4xl sm:p-5 sm:text-5xl md:text-6xl lg:text-7xl sm:text-left mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 font-semibold animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.8) border-b-4">
          My Skills
        </h2>


      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 md:mb-20 text-indigo-400 tracking-wide border-b-2 border-indigo-400 pb-4 w-fit mx-auto bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 animate-pulse">
          {categories[currentIndex].title}
        </h3>

        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-100 transition-opacity duration-400 ease-in-out"
          key={currentIndex}
        >
          {renderSkills(categories[currentIndex].skills)}
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-3">
        {categories.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === currentIndex ? "bg-indigo-400 scale-110" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Skill;
