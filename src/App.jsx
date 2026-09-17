import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import LiveConcept from "./components/LiveConcept";
import WhyMe from "./components/WhyMe";
import HowIWork from "./components/HowIWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <LiveConcept />
        <WhyMe />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
