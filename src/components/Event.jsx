import React from "react";

const events = [
  {
    date: "15/09/2022",
    category: "FOOD FLAVOUR",
    title: "Flavour so good you'll try to eat with your eyes.",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800",
  },
  {
    date: "08/09/2022",
    category: "HEALTHY FOOD",
    title: "Flavour so good you'll try to eat with your eyes.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
  },
  {
    date: "03/09/2022",
    category: "RECIPE",
    title: "Flavour so good you'll try to eat with your eyes.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
  },
];

export default function UpcomingEvent() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-xs tracking-widest text-yellow-500 mb-2">
          RECENT UPDATES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-14">
          Upcoming Event
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.category}
                className="h-105 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded">
                  {event.date}
                </span>

                <p className="text-xs tracking-widest text-yellow-500 mb-2">
                  {event.category}
                </p>

                <h3 className="text-white text-lg font-light leading-relaxed">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14">
          <button className="border border-yellow-500 text-yellow-500 px-8 py-3 text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition">
            VIEW OUR BLOG
          </button>
        </div>
      </div>
    </section>
  );
}
