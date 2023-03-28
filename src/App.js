import "./styles/Global.css";
import Layout from "./components/Layout";
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
    <Layout>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectOne />
      <ProjectTwo />
      <Experiences />
      <Footer />
    </Layout>
  );
}

export default App;
