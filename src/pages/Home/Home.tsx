import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/navbar";
import About from "../../components/About/About";

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
          {/* Projects */}
        </section>

        <section id="contact">
          {/* Contact */}
        </section>
      </main>
    </>
  );
}

export default Home;