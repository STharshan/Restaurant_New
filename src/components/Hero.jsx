import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[#FBF5EE] py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Logo */}
            <div className="mb-8 flex justify-center md:justify-start">
              <img
                src="/ma-27s-20kitchem.png"
                alt="Ma's Kitchen Catering Logo"
                className="w-48 md:w-60 h-auto"
              />
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3A2A] leading-tight">
              Home-cooked catering with heart.
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-[#4A3A2A]/80 leading-relaxed max-w-xl">
              Buffet-style catering for parties, private events, and grazing
              tables – bringing the warmth of home cooking to your celebrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="rounded-md bg-[#E07A2D] px-8 py-4 text-lg font-medium text-white hover:bg-[#d66f26] transition">
                Get a Quote
              </button>

              <button className="rounded-md border-2 border-[#4A3A2A] px-8 py-4 text-lg font-medium text-[#4A3A2A] hover:bg-[#4A3A2A] hover:text-white transition">
                View the Menu
              </button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/60 p-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A2D]/20 text-2xl">
                  🍽️
                </div>
                <span className="text-sm font-medium text-[#4A3A2A]">
                  Buffet-style Catering
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-white/60 p-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A2D]/20 text-2xl">
                  ❤️
                </div>
                <span className="text-sm font-medium text-[#4A3A2A]">
                  Home-made Recipes
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-white/60 p-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A2D]/20 text-2xl">
                  📍
                </div>
                <span className="text-sm font-medium text-[#4A3A2A]">
                  Shepshed &amp; Loughborough
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-[#FBF5EE]/60">
              <img
                src="/delicious-buffet-catering-spread.jpg"
                alt="Delicious buffet spread"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
