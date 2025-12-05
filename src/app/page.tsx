"use client";

import { useRef } from "react";
import HeroSection from "./components/hero";
import About from "./components/about";
import MattersSection from "./components/matters";
import Resource from "./components/Resources";
import Participate from "./components/Participate";
import Contact from "./components/contact";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const mattersRef = useRef<HTMLDivElement | null>(null);
  const resourcesRef = useRef<HTMLDivElement | null>(null);
  const participateRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-blue-900 overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen">
        <HeroSection
          onAboutClick={() => scrollTo(aboutRef)}
          onMattersClick={() => scrollTo(mattersRef)}
          onResourcesClick={() => scrollTo(resourcesRef)}
          onParticipateClick={() => scrollTo(participateRef)}
          onContactClick={() => scrollTo(contactRef)}
        />
      </section>

      <section ref={aboutRef} className="snap-start h-screen">
        <About />
      </section>

      <section ref={mattersRef} className="snap-start h-screen">
        <MattersSection />
      </section>

      <section ref={resourcesRef} className="snap-start h-screen">
        <Resource />
      </section>

      <section ref={participateRef} className="snap-start h-screen">
        <Participate />
      </section>

      <section ref={contactRef} className="snap-start h-screen">
        <Contact />
      </section>
    </main>
  );
}
