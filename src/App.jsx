import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TechStrip from "./components/TechStrip";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <TechStrip />
      </main>
      <Footer />
    </>
  );
}
