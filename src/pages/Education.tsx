import React from "react";
import "aos/dist/aos.css";
import educationBg from "../assets/images/education-bg.mp4";

type EducationType = {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
};

type ActivityType = {
  year: string;
  role: string;
  organization: string;
  description?: string;
  color: string;
};

const educationData: EducationType[] = [
  {
    title: "Higher National Diploma in Software Engineering",
    institution: "Institute of Software Engineering (IJSE)",
    period: "2023 - 2025",
    description:
      "Focus: Java, Spring Boot, React, Databases, and Full-stack Web Development.",
    highlights: [
      "Smart Parking Management System (SPMS) – Microservice-Based Application | Spring Boot, Spring Cloud (Eureka, Config, Gateway), MySQL, Docker",
      "Strategic Growth Analysis for a UK-Based E-Commerce Retailer (Group Project) | Python, Pandas, NumPy, Matplotlib, Seaborn",
      "Technologies: HTML, CSS, JavaScript, TypeScript, Spring Boot, React",
    ],
  },
  {
    title: "Certificates",
    institution: "Open University of Sri Lanka",
    period: "",
    description:
      "Enhanced communication skills and computer knowledge to support IT career.",
    highlights: [
      "Certificate in English Spoken (2017-2018)",
      "Certificate in Computer Literacy (2021)",
    ],
  },
  {
    title: "G.C.E O/L & A/L",
    institution: "Walala A/Rathnayake Central College",
    period: "",
    description:
      "Stream: Science | Subjects: Biology, Chemistry, Agriculture. Participated in school clubs and events, building leadership and teamwork skills.",
  },
];

const activitiesData: ActivityType[] = [
  {
    year: "2025",
    role: "Women Empowerment Volunteer",
    organization: "Neermai.com",
    color: "white",
  },
  {
    year: "2024",
    role: "Award for Innovative Software Solutions",
    organization: "CodeNexa Team – Innovesta",
    color: "white",
  },
  {
    year: "2023–2025",
    role: "Student Community Member",
    organization: "IJSE",
    color: "white",
  },
   {
    year: "2013-2017",
    role: "Athlete – School Athletic Team",
    organization: "All Island Meets & Competitions",
    color: "white",
  },
   {
    year: "2019–2020",
    role: "School Prefect",
    organization: "Walala A/Rathnayake Central College",
    color: "white",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center text-white py-20 px-6 overflow-hidden"
      data-aos="fade-up"
    >
   
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-7 -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={educationBg} type="video/mp4" />
      </video>

       <h2 className="text-4xl sm:p-5 sm:text-5xl md:text-6xl lg:text-7xl sm:text-left mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 font-semibold animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.8) border-b-4">
           My Education & Activities
        </h2>


      <div className="max-w-3xl w-full relative border-l-2 border-gray-700 pl-6 space-y-10">
        {educationData.map((edu, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-4 top-2 w-4 h-4 "></span>
            <p className="text-gray-400 font-medium">
              <span className="font-semibold text-white">{edu.title}</span>{" "}
              {edu.period && (
                <span className="text-white">| {edu.period}</span>
              )}
            </p>
            <h3 className="text-xl font-semibold mt-1">{edu.institution}</h3>
            <p className="text-gray-400 mt-2">{edu.description}</p>
            {edu.highlights && (
              <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm space-y-1">
                {edu.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl w-full mt-16 relative border-l-2 border-gray-700 pl-6 space-y-8">
        <h3 className="text-3xl font-semibold mb-6 text-indigo-400 text-center border-b-2 border-indigo-400 pb-4 w-fit mx-auto">
          Extracurricular Activities
        </h3>
        {activitiesData.map((act, i) => (
          <div key={i} className="relative">
            <span
              className={`absolute -left-4 top-1 w-4 h-4 rounded-full bg-${act.color}-400`}
            ></span>
            <p className="text-gray-300 font-medium">
              <span className="font-semibold text-white">{act.year}:</span>{" "}
              {act.role}{" "}
              <span className="text-indigo-400">– {act.organization}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
