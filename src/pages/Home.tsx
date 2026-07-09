import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Creativity from "@/components/Creativity";
import Hobbies from "@/components/Hobbies";
import Gallery from "@/components/Gallery";
import Astrology from "@/components/Astrology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Creativity />
        <Hobbies />
        <Gallery />
        <Astrology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
