import React from "react";

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-[#FBF5EE]/60 py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          Ma&apos;s Kitchen – Catering Services
        </h2>

        {/* FEATURED SERVICE CARD */}
        <div className="mb-12 rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-square bg-[#FBF5EE]/60">
              <img
                src="/buffet-table-spread-with-multiple-dishes.jpg"
                alt="Buffet Catering"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image Controls (UI only) */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  aria-label="Previous dish"
                  className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#4A3A2A] hover:text-[#E07A2D] hover:scale-110 transition"
                >
                  ‹
                </button>
                <button
                  aria-label="Next dish"
                  className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#4A3A2A] hover:text-[#E07A2D] hover:scale-110 transition"
                >
                  ›
                </button>
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-[#4A3A2A]">
                  1 / 5
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block mb-2 rounded-full bg-[#E07A2D]/20 px-3 py-1 text-sm font-medium text-[#E07A2D]">
                Catering Service
              </span>

              <h3 className="font-serif text-3xl font-bold text-[#4A3A2A] mb-4">
                Buffet Catering
              </h3>

              <p className="text-[#4A3A2A]/80 leading-relaxed mb-6">
                Generous buffet-style catering designed for sharing, relaxed
                dining, and bringing people together.
              </p>

              <div className="mb-6">
                <span className="inline-block rounded-full border border-[#4A3A2A]/20 bg-[#FBF5EE] px-3 py-1 text-sm text-[#4A3A2A]">
                  Most Popular
                </span>
              </div>

              <p className="text-sm italic text-[#4A3A2A]/60">
                Flexible menus available – get in touch to discuss your event
              </p>
            </div>
          </div>
        </div>

        {/* FULL MENU CARD */}
        <div className="relative rounded-xl border-2 border-[#4A3A2A]/20 bg-white shadow-lg overflow-hidden">

          {/* Decorative Side Strip */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#4A3A2A]/10 to-transparent border-r-2 border-[#4A3A2A]/20" />

          <div className="p-8 md:p-12 pl-16">
            <h3 className="mb-8 text-center font-serif text-2xl font-bold text-[#4A3A2A]">
              Complete Menu Selection
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* MENU COLUMN */}
              <MenuColumn
                title="Mains"
                subtitle="Hearty, home-cooked dishes that bring everyone together."
                items={[
                  "Pulled pork with soft bread rolls",
                  "Beef bourguignon",
                  "Slow-cooked beef curry",
                  "Jerk ham",
                  "Gennaro's porchetta",
                  "Marry-me chicken",
                  "Lasagne",
                  "Macaroni and cheese",
                ]}
              />

              <MenuColumn
                title="Salads & Sides"
                subtitle="Fresh, vibrant accompaniments to complement any meal."
                items={[
                  "Chicken Caesar salad",
                  "Seasonal salads",
                  "Fresh sides and vegetables",
                  "Loaded pasta bakes",
                ]}
              />

              <MenuColumn
                title="Grazing & Sharing"
                subtitle="Beautiful spreads made for sharing and grazing at your own pace."
                items={[
                  "Mixed savoury platters",
                  "Cheese boards with accompaniments",
                  "Beetroot gravlax",
                  "Cold cuts and cured meats",
                  "Fresh breads and dips",
                  "Seasonal fruit and nibbles",
                ]}
              />

              <MenuColumn
                title="Special Dishes"
                subtitle="Unique, carefully prepared dishes for special occasions."
                items={[
                  "Bobotie",
                  "Slow-roasted meats",
                  "Oven-baked chicken dishes",
                ]}
              />

              <MenuColumn
                title="Sweet Treats"
                subtitle="Homemade desserts to finish things properly."
                items={[
                  "Mini cheesecakes",
                  "Dessert platters",
                  "Sweet grazing additions",
                ]}
              />

            </div>

            {/* Footer Note */}
            <div className="mt-8 rounded-lg border border-[#4A3A2A]/20 bg-[#FBF5EE]/60 p-6">
              <p className="text-center text-[#4A3A2A]/80">
                <span className="font-semibold text-[#4A3A2A]">
                  All menus can be tailored. Dietary requirements are always welcome.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Reusable Menu Column */
function MenuColumn({ title, subtitle, items }) {
  return (
    <div>
      <h4 className="mb-2 border-b-2 border-[#E07A2D]/30 pb-2 font-serif text-xl font-bold text-[#E07A2D]">
        {title}
      </h4>
      <p className="mb-4 text-xs italic text-[#4A3A2A]/60">
        {subtitle}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-[#4A3A2A]/80 leading-relaxed"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
