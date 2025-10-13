import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 shadow-md bg-gradient-to-br from-black via-gray-900 to-[#1a0d0d]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
        
          <div className="text-xl sm:text-2xl md:text-3xl ml-2 font-semibold text-white tracking-wide animate-pulse drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">
            mALKA
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-10 text-white text-sm lg:text-lg font-medium">
            <a href="#home" className="hover:text-indigo-400 transition">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skill" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#education" className="hover:text-indigo-400 transition">Education</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <i
                className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-2xl sm:text-3xl transition-transform duration-300`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-14 sm:top-16 left-0 w-full bg-gradient-to-br from-black via-gray-900 to-[#1a0d0d] transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-5 text-white font-medium text-base sm:text-lg">
          <a href="#home" onClick={handleLinkClick} className="hover:text-indigo-400">Home</a>
          <a href="#about" onClick={handleLinkClick} className="hover:text-indigo-400">About</a>
          <a href="#skill" onClick={handleLinkClick} className="hover:text-indigo-400">Skills</a>
          <a href="#projects" onClick={handleLinkClick} className="hover:text-indigo-400">Projects</a>
          <a href="#education" onClick={handleLinkClick} className="hover:text-indigo-400">Education</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
