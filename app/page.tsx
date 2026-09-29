import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MessageTicker from "@/components/MessageTicker";

const Stats = dynamic(() => import("@/components/Stats"));

const AboutPreview = dynamic(
  () => import("@/components/AboutPreview")
);

const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects")
);

const Services = dynamic(
  () => import("@/components/Services")
);

const Skills = dynamic(
  () => import("@/components/Skills")
);

const Testimonials = dynamic(
  () => import("@/components/Testimonials")
);

const ContactCTA = dynamic(
  () => import("@/components/ContactCTA")
);

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