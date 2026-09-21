
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MessageTicker from "@/components/MessageTicker";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      
      
      <Navbar />

      <MessageTicker />

      <Hero />

      <Stats />

      <AboutPreview />

      <FeaturedProjects />

      <Services />

      <Skills />

      <Testimonials />

      <ContactCTA />
    </main>
  );
}

