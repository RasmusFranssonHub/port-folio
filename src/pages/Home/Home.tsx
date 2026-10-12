import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/navbar";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import "../Home/Home.scss"

function Home() {
  return (
    <>
      <header>
        {/* Hero + Navbar */}
        <Hero />
      </header>
      
      <Navbar />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <div className="section-transition" aria-hidden="true" />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default Home;