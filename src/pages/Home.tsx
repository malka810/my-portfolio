import "../App.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import "aos/dist/aos.css";
import profile from "../assets/images/my-profile.png";
import profileHover from "../assets/images/hover-profile.png";
import { useState } from "react";

const Home = () => {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-4 sm:px-8 md:px-16 lg:px-24"
    >
 <div
  className="flex justify-center p-2 md:justify-start md:w-1/2 mb-8 md:mb-0 mt-2 sm:mt-4 md:mt-4 animate-bounce-slow md:pl-10 lg:pl-16"
  data-aos="fade-right"
  data-aos-duration="1000"
>
 <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[24rem] xl:h-[24rem] flex items-center justify-center">

    <div className="absolute top-4 left-6 w-10 h-10 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full blur-2xl opacity-40 animate-float-slow"></div>
    <div className="absolute bottom-3 right-6 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-indigo-200 rounded-full blur-2xl opacity-40 animate-float"></div>

    <div
      className="relative w-full h-full rounded-full p-[6px] sm:p-[8px] md:p-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] transition-all duration-700 transform hover:scale-105 opacity-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full rounded-full overflow-hidden border-[1.5px] sm:border-[2px] md:border-[3px] border-white/20">
        <img
          src={isHovered ? profileHover : profile}
          alt="Profile"
          className="object-cover w-full h-full rounded-full opacity-90 hover:opacity-100 transition-all duration-500 transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</div>


      <div
  className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6 mt-8 md:mt-0"
  data-aos="fade-left"
>

  <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
          Hello there!
        </h3>
  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1 sm:mt-2 animate-pulse">
    Malka Samarakoon
  </h1>
  <h3 className="text-xs  sm:text-base md:text-xl mt-2">
    And I'm a{" "}
    <span className="text-indigo-400 font-semibold">Software Engineer</span>
  </h3>


  <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 text-xs sm:text-sm md:text-base">
    I'm a Software Engineering undergraduate passionate about web development.
    I’m constantly learning, building, and growing — one project at a time.
  </p>


  <div className="flex gap-6 sm:gap-8 justify-center md:justify-start mt-8 text-xl sm:text-2xl">
    <a
      href="https://www.linkedin.com/in/malka-samarakoon-b350622b5/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
    >
      <i className="bx bxl-linkedin"></i>
    </a>
    <a
      href="https://github.com/malka810"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
    >
      <i className="bx bxl-github"></i>
    </a>
    <a
      href="https://facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
    >
      <i className="bx bxl-facebook"></i>
    </a>
  </div>

  
  <div className="mt-10 p-2 md:mt-12 flex justify-center md:justify-start">
    <a
      href="src/assets/pdf/Malka_Samarakoon_Cv.pdf"
      download
      className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-indigo-500 text-white font-medium rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] hover:scale-105"
    >
      Download CV
    </a>
  </div>
</div>  

    </section>
  );
};

export default Home;
