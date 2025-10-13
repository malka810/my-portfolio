const Footer = () => {
  return (
    <footer className="bg-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-indigo-400">Twitter</a>
          <a href="#" className="hover:text-indigo-400">LinkedIn</a>
          <a href="#" className="hover:text-indigo-400">GitHub</a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Malka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
