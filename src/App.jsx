import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Fab from "./components/Fab";
import Process from "./components/Process";
import FAQSection from "./components/Faq";
import VideoGallery from "./components/VideoGallery";

export default function App() {
  return (
    <div className="relative bg-yellow-400 text-black min-h-screen">
      {/* Navbar at top */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <VideoGallery />
        <Contact />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating FAB - always on top of everything */}
      <Fab />
    </div>
  );
}
