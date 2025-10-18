import "../App.css";
import "aos/dist/aos.css";
import beautiful from "../assets/images/beautiful.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 md:px-16 py-16 overflow-hidden"
      data-aos="fade-up"
    >

      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 animate-pulse">
          About Me
        </h2>

        <ul className="mb-6 space-y-2 text-gray-400 text-sm sm:text-base md:text-lg ">
          <li><strong>Name:</strong> Malka Samarakoon</li>
          <li><strong>University:</strong> Institute of Software Engineering (IJSE)</li>
          <li><strong>Current Status:</strong> Software Engineering Undergraduate Student</li>
          <li><strong>Year of Study:</strong> 2023/2025</li>
        </ul>

        <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg">
          Hi, I'm a passionate software engineering undergraduate at the Institute of
          Software Engineering in Sri Lanka. With a keen interest in web development
          and AI, I'm excited to explore the world of software development.
        </p>

        <div className="relative bg-black/40 p-4 sm:p-6 rounded-3xl border border-gray-700 shadow-lg glow-soft animate-pulse">
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Quick Learner</li>
            <li>Planning & Management</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>


      <div
  className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative"
  data-aos="flip-left"
  data-aos-delay="400"
>
  <div className="relative w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 flex justify-center items-center overflow-visible rounded-3xl 
    transform transition-transform duration-700 hover:scale-105">

    <img
      src={beautiful}
      alt="Malka Samarakoon"
      className="
        w-40 h-52 sm:w-56 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-96
        object-cover
        rounded-3xl
        shadow-2xl
        opacity-50
        animate-bounce-slow
        transition-transform duration-700
        hover:scale-105
        border border-white/20
        bg-gradient-to-tr from-indigo-400 
        p-1
        backdrop-blur
        hover:shadow-indigo-400/40
        hover:shadow-lg
        border-opacity-5
        -translate-x-4 sm:-translate-x-8 md:-translate-x-30
        translate-y-2 sm:translate-y-4 md:translate-y-10
      "
    />

    
    <div className="absolute top-0 left-0 w-7 h-7 bg-indigo-400 opacity-20 animate-float-slow -translate-x-6 -translate-y-6 shadow-lg animate-spin "></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-300 opacity-20 animate-float-slower translate-x-6 translate-y-6 shadow-lg "></div>
    <div className="absolute top-1/2 left-1/2 w-9 h-9 bg-indigo-300 opacity-20 animate-float-slow -translate-x-1/2 -translate-y-1/2 shadow-lg "></div>
    <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-indigo-400 opacity-20 animate-float-slow -translate-x-1/4 -translate-y-1/3 shadow-lg "></div>
    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-indigo-300 opacity-20 animate-float-slower translate-x-1/4 translate-y-1/3 shadow-lg "></div>

  </div>
</div>

    </section>
  );
};

export default About;
