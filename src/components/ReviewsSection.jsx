import React from "react";

export default function ReviewsSection() {
  const reviews = Array(6).fill({
    text:
      "Wonderful food and service. Really made our celebration special. Would highly recommend!",
    name: "Customer Name",
    location: "Loughborough",
    rating: 5,
  });

  return (
    <section
      id="reviews"
      className="bg-white py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          What People Say
        </h2>
        <p className="mb-12 text-center text-[#4A3A2A]/70">
          Hear from our happy customers
        </p>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="rounded-md bg-[#C97A3A] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#C97A3A]/90">
            More Reviews
          </button>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Review Card ---------------- */

function ReviewCard({ text, name, location, rating }) {
  return (
    <div className="rounded-xl bg-[#FBF5EE]/60 p-6 shadow-md transition hover:shadow-lg">
      
      {/* Stars */}
      <div className="mb-4 flex gap-1 text-[#C97A3A]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Review */}
      <p className="mb-4 italic text-[#4A3A2A]/80">
        “{text}”
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-[#4A3A2A]">
          {name}
        </p>
        <p className="text-sm text-[#4A3A2A]/60">
          {location}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Star Icon ---------------- */

function Star() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.3l2.3 4.7 5.2.8-3.7 3.6.9 5.1L12 18.9 7.4 16.5l.9-5.1-3.7-3.6 5.2-.8L12 2.3z" />
    </svg>
  );
}
