import React from "react";

const events = [
  {
    id: 1,
    img: "/event-1.jpg",
    date: "15/09/2022",
    category: "FOOD, FLAVOUR",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
  {
    id: 2,
    img: "/event-2.jpg",
    date: "08/09/2022",
    category: "HEALTHY FOOD",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
  {
    id: 3,
    img: "/event-3.jpg",
    date: "03/09/2022",
    category: "RECIPIE",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
];

const Event = () => {
  return (
    <section className="bg-[#0b0b0b] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Subtitle */}
        <p className="text-center text-[#d4af37] tracking-[0.35em] text-xs font-semibold mb-4">
          RECENT UPDATES
        </p>

        {/* Title */}
        <h2 className="text-center text-white font-serif text-4xl md:text-5xl mb-16">
          Upcoming Event
        </h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.id}
              className="relative overflow-hidden group"
            >
              {/* Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Shine hover */}
              <div className="pointer-events-none absolute inset-0 before:absolute before:top-0 before:left-[-150%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-transparent before:to-white/30 before:skew-x-[-20deg] before:transition-all before:duration-1000 group-hover:before:left-[200%]" />

              {/* Date */}
              <span className="absolute top-6 left-6 bg-black text-[#d4af37] text-xs px-3 py-1 tracking-widest font-semibold">
                {event.date}
              </span>

              {/* Content overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-center">
                <p className="text-[#d4af37] text-xs tracking-[0.35em] mb-2">
                  {event.category}
                </p>

                <h3 className="text-white text-lg font-serif leading-snug">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block border border-[#d4af37] text-[#d4af37] px-10 py-3 tracking-widest text-sm hover:bg-[#d4af37] hover:text-black transition"
          >
            VIEW OUR BLOG
          </a>
        </div>

      </div>
    </section>
  );
};

export default Event;
