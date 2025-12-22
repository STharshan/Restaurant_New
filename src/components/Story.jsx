"use client";

import React from "react";

export default function OurStory() {
  return (
    <section className="relative bg-[#0b0b0b] py-40 overflow-hidden">
      {/* subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-16 top-48 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute right-24 bottom-48 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* OUR STORY LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#e4c590] border border-[#e4c590] px-4 py-1">
              Our Story
            </span>
            <span className="w-10 h-px bg-[#e4c590]" />
            <span className="w-2 h-2 border border-[#e4c590] rotate-45" />
            <span className="w-10 h-px bg-[#e4c590]" />
          </div>

          {/* HEADING */}
          <h2 className="font-[Forum] text-white text-[clamp(2.8rem,5vw,4.6rem)] leading-tight mb-8">
            Every Flavor <br /> Tells a Story
          </h2>

          {/* TEXT */}
          <p className="text-white/70 leading-7 max-w-xl mb-6">
            Lorem Ipsum is simply dummy text of the printingand
            typesetting industry lorem Ipsum has been the industrys
            standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make a type specimen
            book.
          </p>

          <p className="text-white/70 leading-7 max-w-xl mb-12">
            It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>

          {/* CALL */}
          <p className="text-white font-semibold mb-2">
            Book Through Call
          </p>
          <p className="text-[#e4c590] text-xl mb-12">
            +254 (400) 123 4567
          </p>

          {/* BUTTON */}
          <a
            href="#"
            className="inline-flex items-center justify-center h-[54px] px-12 border border-[#e4c590] text-[#e4c590] uppercase tracking-[0.25em] text-xs font-semibold transition hover:bg-[#e4c590] hover:text-black"
          >
            Read More
          </a>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <img
            src="/about-banner.jpg"
            alt="Restaurant Interior"
            className="w-full max-w-[440px] ml-auto object-cover"
          />

          {/* ABS IMAGE (CHEF) */}
          <img
            src="/about-abs-image.jpg"
            alt="Chef Preparing Food"
            className="absolute left-0 -bottom-28 w-[320px] object-cover shadow-2xl"
          />

          {/* BADGE */}
          <img
            src="badge-2.png"
            alt="Since 1950"
            className="absolute -top-14 right-0 w-32"
          />
        </div>

      </div>
    </section>
  );
}
