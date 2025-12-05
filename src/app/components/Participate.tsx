"use client";

import { forwardRef } from "react";

const Participate = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="participate"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-amber-50"
    >
      {/* Section Header */}
      <div className="max-w-4xl text-center mb-12 sm:mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 sm:mb-6">
          Join the NIRD Movement
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-amber-50/90 leading-relaxed">
          Everyone can contribute to building a sustainable digital school.
          Teachers, students, and developers alike can share resources, suggest
          eco-friendly ideas, or create open-source tools for schools.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-white/80 transition shadow-[0_0_25px_-10px_rgba(255,255,255,0.4)]">
          Submit a Resource
        </button>
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-amber-50 text-amber-50 text-sm sm:text-base font-medium hover:bg-amber-50/10 transition">
          Volunteer / Collaborate
        </button>
      </div>
    </section>
  );
});

Participate.displayName = "Participate";

export default Participate;
