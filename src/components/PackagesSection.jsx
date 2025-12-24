import React from "react";

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-white py-16 px-4 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          Catering Packages
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#4A3A2A]/70">
          Choose a package that suits your event – all fully customisable to your needs
        </p>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <PackageCard
            title="Family Gathering"
            subtitle="Best for relaxed get-togethers at home"
            features={[
              "Selection of buffet mains",
              "Sides and salads",
              "Generous portions for sharing",
              "Menu tailored to your group",
            ]}
          />

          <PackageCard
            popular
            title="Party Spread"
            subtitle="Perfect for birthdays and celebrations"
            features={[
              "Crowd-pleasing buffet dishes",
              "Grazing or sharing options",
              "Sweet treats available",
              "Flexible menu choices",
            ]}
          />

          <PackageCard
            title="Private Event"
            subtitle="Ideal for intimate events and special occasions"
            features={[
              "Curated buffet menu",
              "World-inspired flavours",
              "Vegetarian options available",
              "Personal planning support",
            ]}
          />
        </div>

        <p className="mb-12 text-center italic text-[#4A3A2A]/70">
          Every package is flexible – we&apos;ll help you choose what works best for your event.
        </p>

        {/* How It Works */}
        <h3 className="mb-8 text-center font-serif text-2xl font-bold text-[#4A3A2A]">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Step number="1" title="Enquire">
            Get in touch with your event details and we&apos;ll arrange a chat
          </Step>
          <Step number="2" title="Choose Menu">
            Work with us to create the perfect menu for your celebration
          </Step>
          <Step number="3" title="We Deliver & Serve">
            Sit back and enjoy – we&apos;ll take care of the food
          </Step>
        </div>

        {/* Expectations */}
        <div className="rounded-lg bg-white/60 p-6 shadow-md">
          <h3 className="mb-4 font-semibold text-[#4A3A2A]">
            What you can expect:
          </h3>
          <ul className="space-y-3 text-[#4A3A2A]/80">
            <li className="flex items-start gap-3">
              <span className="text-[#E07A2D] mt-1">✓</span>
              <span>
                Home-cooked quality with fresh, local ingredients where possible
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E07A2D] mt-1">✓</span>
              <span>
                Flexible menus tailored to your event and dietary requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E07A2D] mt-1">✓</span>
              <span>
                Personal service from a family-run business that cares
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Sub Components ---------------- */

function PackageCard({ title, subtitle, features, popular }) {
  return (
    <div
      className={`rounded-xl border-2 p-8 shadow-md transition-all ${
        popular
          ? "border-[#E07A2D] bg-white scale-105"
          : "border-[#4A3A2A]/20 bg-[#FBF5EE]/50"
      }`}
    >
      {popular && (
        <span className="mb-4 inline-block rounded-full bg-[#E07A2D] px-3 py-1 text-xs font-medium text-white">
          POPULAR
        </span>
      )}

      <h3 className="mb-2 font-serif text-2xl font-bold text-[#4A3A2A]">
        {title}
      </h3>
      <p className="mb-6 text-sm text-[#4A3A2A]/60">
        {subtitle}
      </p>

      <ul className="mb-8 space-y-3 text-[#4A3A2A]/80">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#E07A2D] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className="w-full rounded-md bg-[#E07A2D] px-4 py-2 text-sm font-medium text-white hover:bg-[#d66f26] transition">
        Ask about this package
      </button>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E07A2D]/20">
        <span className="text-2xl font-bold text-[#E07A2D]">
          {number}
        </span>
      </div>
      <h4 className="mb-2 font-semibold text-[#4A3A2A]">
        {title}
      </h4>
      <p className="text-sm text-[#4A3A2A]/70">
        {children}
      </p>
    </div>
  );
}
