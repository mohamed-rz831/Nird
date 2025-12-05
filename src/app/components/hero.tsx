"use client";

import Image from "next/image";
import { forwardRef } from "react";

interface HeroProps {
  onAboutClick: () => void;
  onMattersClick: () => void;
  onResourcesClick: () => void;
  onParticipateClick: () => void;
  onContactClick: () => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroProps>(
  (
    { onAboutClick, onMattersClick, onResourcesClick, onParticipateClick },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className="h-screen relative px-4 sm:px-10 flex flex-col justify-center items-center text-amber-50"
      >
        {/* Navbar */}
        <nav className="w-full h-fit absolute top-0 left-0 z-10">
          <div className="mx-auto px-2 sm:px-6 py-4 flex justify-between items-center max-w-7xl">
            <h1 className="text-lg sm:text-xl font-semibold">NIRD</h1>
            <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm">
              <button
                onClick={onAboutClick}
                className="hover:opacity-60 transition"
              >
                About
              </button>
              <button
                onClick={onMattersClick}
                className="hover:opacity-60 transition"
              >
                What Matters
              </button>
              <button
                onClick={onResourcesClick}
                className="hover:opacity-60 transition"
              >
                Tools
              </button>
              <button
                onClick={onParticipateClick}
                className="hover:opacity-60 transition"
              >
                Participate
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-xl sm:max-w-3xl mt-16 sm:mt-20 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-4 sm:mb-6">
            NIRD – Towards a Sustainable and Responsible Digital School
          </h2>
          <p className="text-base sm:text-lg text-amber-50/90 mb-6 sm:mb-10">
            Discover, share, and use open and eco‑friendly digital tools for
            education.
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={onResourcesClick}
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base hover:bg-white/80 transition"
            >
              Explore Tools
            </button>
            <button
              onClick={onParticipateClick}
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-amber-50 text-amber-50 text-sm sm:text-base hover:bg-amber-50/10 transition"
            >
              Join the Community
            </button>
          </div>
        </div>

        {/* Asterix - bottom left */}
        <div className="absolute bottom-0 left-2 sm:left-5 w-20 sm:w-48 h-auto">
          <Image
            src="/Asterix.png"
            alt="Asterix"
            width={192}
            height={192}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Obelix - bottom right */}
        <div className="absolute bottom-0 right-2 sm:right-5 w-20 sm:w-48 h-auto">
          <Image
            src="/Obelix.png"
            alt="Obelix"
            width={192}
            height={192}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
