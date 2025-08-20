import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Background spotlight effect */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-50 blur-3xl" />
      </div>
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <Navigation />
        
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left sidebar - Hero section */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </div>
          
          {/* Right content - Main sections */}
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </main>
  );
}