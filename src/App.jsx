import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testmonials from "./components/Testmonials";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="w-full bg-[url('/hero_bg.svg')] bg-cover">
        <Navbar />
        <Hero />
      </div>

      <Experience />
      <About />
      <Work />
      <Testmonials />
      <Footer />
    </>
  );
}

export default App;
