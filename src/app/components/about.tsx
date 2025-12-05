"use client";

import Image from "next/image";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-10 text-amber-50 py-12"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* TEXT */}
        <div className="max-w-full md:max-w-xl flex flex-col gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug tracking-tight">
            What is NIRD?
          </h2>

          <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed">
            <strong>NIRD</strong> stands for{" "}
            <em>Numérique Inclusif, Responsable et Durable</em>. Our mission is
            to make digital education sustainable, open, and ethical.
          </p>

          <ul className="mt-2 space-y-1 sm:space-y-2 text-amber-50/85 text-sm sm:text-base">
            <li>• Advocate for open-source software in schools</li>
            <li>• Promote reused and reconditioned hardware to cut e-waste</li>
            <li>
              • Teach digital literacy that respects privacy and the environment
            </li>
            <li>• Encourage collaboration and sharing among educators</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="shrink-0 w-40 sm:w-72 md:w-80 lg:w-96 scale-x-[-1] mb-6 md:mb-0">
          <Image
            src="/Asterix.png"
            alt="Students using laptops in an eco-friendly classroom"
            width={360}
            height={360}
            className="object-contain rounded-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
