const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white py-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center space-y-4">
        <h3 className="text-lg md:text-xl tracking-wide font-medium">
          Let’s Connect & Collaborate
        </h3>
        <div className="flex justify-center gap-5 mt-4">
          <a
            href="#"
            className="text-2xl hover:text-indigo-400 transition-all transform hover:scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-2xl hover:text-indigo-400 transition-all transform hover:scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-2xl hover:text-indigo-400 transition-all transform hover:scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="#"
            className="text-2xl hover:text-indigo-400 transition-all transform hover:scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="w-20 h-[1.5px] bg-white/40 mx-auto my-4 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.3)]"></div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 font-light">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#skill" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>

        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Malka Samarakoon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
