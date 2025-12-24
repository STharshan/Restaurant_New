import React from "react";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-[#FBF5EE]/60 py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          Gallery
        </h2>
        <p className="mb-12 text-center text-[#4A3A2A]/70">
          A glimpse of what we create
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <GalleryItem />
          <GalleryItem />
          <GalleryItem tall />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem tall />
          <GalleryItem />
          <GalleryItem />

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center italic text-[#4A3A2A]/60">
          Photos coming soon – watch this space!
        </p>

      </div>
    </section>
  );
}

/* ---------------- Sub Component ---------------- */

function GalleryItem({ tall }) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-lg bg-[#FBF5EE]/50 shadow-md transition-all hover:shadow-lg hover:scale-105 ${
        tall ? "row-span-2" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          tall ? "aspect-[3/4]" : "aspect-square"
        }`}
      >
        <span className="text-sm text-[#4A3A2A]/30">
          Photo coming soon
        </span>
      </div>
    </div>
  );
}
