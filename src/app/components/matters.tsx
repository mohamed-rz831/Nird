"use client";

import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import Card from "./MtrsCard";

const MattersSection = forwardRef<HTMLDivElement>((props, ref) => {
  const cards = [
    {
      title: "Speed",
      content: "Fast decisions, fast action, clean execution.",
      icon: "material-symbols:speed",
    },
    {
      title: "Intuition",
      content: "Interfaces that feel obvious without telling you how.",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Flow",
      content: "Every motion, every element — smooth and intentional.",
      icon: "mdi:gesture-swipe-horizontal",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center gap-8 sm:gap-10 px-4 sm:px-10 py-12"
    >
      <div className="text-amber-50 w-full max-w-5xl flex flex-col gap-2 sm:gap-4 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Why it Matters
        </h1>
        <p className="text-base sm:text-lg md:text-xl opacity-80">
          We break the mold. No templates. No “usual UX”. Just intentional,
          meaningful interaction design that hits different.
        </p>
      </div>

      {/* Horizontal Scroll Zone */}
      <div className="w-full max-w-5xl mt-6 sm:mt-10 flex gap-4 sm:gap-6 overflow-x-auto px-2 pb-4 snap-x snap-mandatory scrollbar-hide">
        {cards.map((card) => (
          <div
            key={card.title}
            className="snap-center shrink-0 w-64 sm:w-72 md:w-80"
          >
            <Card
              title={card.title}
              content={card.content}
              icon={<Icon icon={card.icon} className="text-5xl sm:text-6xl" />}
            />
          </div>
        ))}
      </div>
    </section>
  );
});

MattersSection.displayName = "MattersSection";

export default MattersSection;
