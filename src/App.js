import "./styles/Global.css";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="bg-[#F6FFF8] text-[#9ad6a8]">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectOne />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
