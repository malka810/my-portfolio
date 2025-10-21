import { useState, useEffect } from "react";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import SectionDividerAnimated from "./components/SectionDividerAnimated";


const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  return (
    <div className="App overflow-hidden">
      {showWelcome ? (
        <WelcomePage onGetStarted={() => setShowWelcome(false)} />
      ) : (
        <>
          <Nav />

          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <Home />

           <SectionDividerAnimated />
             <About/>


           <SectionDividerAnimated />

             <Skill/>

         <SectionDividerAnimated />

              <Project/>

          <SectionDividerAnimated />

             <Education/>
              <SectionDividerAnimated />
 
              <Contact/>
          </div>

        
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
