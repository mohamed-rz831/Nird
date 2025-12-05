"use client";

import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import Card from "./MtrsCard";

const Resource = forwardRef<HTMLDivElement>((props, ref) => {
  const tools = [
    {
      title: "LibreOffice",
      content: "Free office suite alternative for schools.",
      icon: (
        <Icon
          icon="mdi:file-document-outline"
          className="text-5xl sm:text-6xl"
        />
      ),
    },
    {
      title: "Moodle",
      content: "Open-source learning management system.",
      icon: <Icon icon="mdi:school-outline" className="text-5xl sm:text-6xl" />,
    },
    {
      title: "Scratch",
      content: "Programming platform for students to learn coding.",
      icon: <Icon icon="mdi:code-tags" className="text-5xl sm:text-6xl" />,
    },
    {
      title: "Nextcloud",
      content: "Private file sharing and collaboration platform.",
      icon: <Icon icon="mdi:cloud-outline" className="text-5xl sm:text-6xl" />,
    },
    {
      title: "Recycled Hardware Tips",
      content: "Guide to safely reuse old devices in schools.",
      icon: <Icon icon="mdi:recycle" className="text-5xl sm:text-6xl" />,
    },
  ];

  return (
    <section
      ref={ref}
      id="tools"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-amber-50"
    >
      {/* Section Header */}
      <div className="max-w-4xl text-center mb-12 sm:mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 sm:mb-6">
          Open & Sustainable Tools for Schools
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-amber-50/90 leading-relaxed">
          Explore our curated collection of free, open, and eco-friendly digital
          tools to make education more sustainable and responsible.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="w-full max-w-6xl flex gap-4 sm:gap-6 overflow-x-auto px-2 pb-4 snap-x snap-mandatory scrollbar-hide">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="snap-center shrink-0 w-56 sm:w-64 md:w-72 lg:w-80"
          >
            <Card title={tool.title} content={tool.content} icon={tool.icon} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-white/80 transition shadow-[0_0_25px_-10px_rgba(255,255,255,0.4)]">
        Add a Tool
      </button>
    </section>
  );
});

Resource.displayName = "Resource";

export default Resource;
