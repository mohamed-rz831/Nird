"use client";

import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer
      ref={ref}
      id="contact"
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-amber-50 snap-start"
    >
      {/* Section Header */}
      <div className="max-w-4xl text-center mb-10 sm:mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 sm:mb-6">
          Stay in Touch
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-amber-50/90 leading-relaxed">
          Have ideas, questions, or suggestions? Reach out to us!
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl flex flex-col gap-4 sm:gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-amber-50/60 focus:outline-none focus:ring-2 focus:ring-amber-50"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-amber-50/60 focus:outline-none focus:ring-2 focus:ring-amber-50"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-amber-50/60 focus:outline-none focus:ring-2 focus:ring-amber-50 resize-none"
        />
        <button
          type="submit"
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-white/80 transition shadow-[0_0_25px_-10px_rgba(255,255,255,0.4)]"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 sm:mt-12 text-center text-amber-50/80 px-2">
        <p>
          Email:{" "}
          <a
            href="mailto:contact@nird.education.fr"
            className="underline hover:opacity-70 break-all"
          >
            contact@nird.education.fr
          </a>
        </p>
        <a href="#">
          <p className="mt-2 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} NIRD. All rights reserved.
          </p>
        </a>
      </div>
    </footer>
  );
});

Contact.displayName = "Contact";

export default Contact;
