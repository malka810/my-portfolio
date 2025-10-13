import React from "react";
import "aos/dist/aos.css";

type SkillItem = {
  icon: string;
  name: string;
};

const Skill: React.FC = () => {
  const programmingSkills: SkillItem[] = [
    { icon: "fa-brands fa-java", name: "Java" },
    { icon: "fa-brands fa-python", name: "Python" },
    { icon: "fa-brands fa-js", name: "JavaScript" },
    { icon: "fa-brands fa-react", name: "React" },
    { icon: "fa-brands fa-typo3", name: "TypeScript" },
    { icon: "fa-solid fa-leaf", name: "Spring Boot" },
    { icon: "fa-solid fa-code", name: "Java EE" },
  ];

  const webSkills: SkillItem[] = [
    { icon: "fa-brands fa-html5", name: "HTML" },
    { icon: "fa-brands fa-css3-alt", name: "CSS" },
    { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
    { icon: "fa-solid fa-wind", name: "Tailwind CSS" },
    { icon: "fa-solid fa-file-code", name: "JSP" },
  ];

  const databaseSkills: SkillItem[] = [
    { icon: "fa-solid fa-database", name: "MySQL" },
    { icon: "fa-solid fa-plug", name: "JDBC" },
    { icon: "fa-solid fa-leaf", name: "MongoDB" },
  ];

  const cloudSkills: SkillItem[] = [
    { icon: "fa-brands fa-docker", name: "Docker" },
  ];

  const toolSkills: SkillItem[] = [
    { icon: "fa-brands fa-git-alt", name: "Git" },
    { icon: "fa-brands fa-github", name: "GitHub" },
    { icon: "fa-solid fa-diagram-project", name: "ModelMapper" },
    { icon: "fa-solid fa-key", name: "JWT" },
    { icon: "fa-solid fa-envelope", name: "Nodemailer" },
    { icon: "fa-solid fa-paper-plane", name: "SendGrid" },
  ];

const renderSkills = (skills: SkillItem[]) =>
  skills.map((skill, i) => (
    <div
      key={i}
      className="
        flex flex-col items-center justify-center 
        w-24 sm:w-28 md:w-32
        gap-2
        transition-transform
      "
    >
      <i
        className={`${skill.icon} text-indigo-400 text-3xl sm:text-4xl animate-jump`}
      ></i>
      <span className="text-sm sm:text-base text-center">{skill.name}</span>
    </div>
  ));

  return (
    <section
      id="skill"
      data-aos="fade-up"
      className="py-16 px-6 text-white text-center"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 animate-pulse font-semibold">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">

        <div data-aos="fade-right" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What I’m Good At</h2>
          <p className="text-gray-400">
            I love learning and experimenting with new technologies. Here are
            some of the major programming languages, frameworks, tools, and
            platforms I have worked with.
          </p>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">Programming</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {renderSkills(programmingSkills)}
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">Web Development</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {renderSkills(webSkills)}
          </div>
        </div>


        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">Databases</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {renderSkills(databaseSkills)}
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">Cloud & DevOps</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {renderSkills(cloudSkills)}
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">Tools & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {renderSkills(toolSkills)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;
