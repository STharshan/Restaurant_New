import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-4xl">

        {/* Section Title */}
        <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          A Letter from Ma
        </h2>

        {/* Card */}
        <div className="relative rounded-xl border-2 border-[#4A3A2A]/20 bg-[#FBF5EE]/50 shadow-lg">

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-start">

              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E07A2D]/20 border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
                  <span className="text-sm text-[#4A3A2A]/40">
                    Photo
                  </span>
                </div>
              </div>

              {/* Letter Content */}
              <div className="space-y-4 text-[#4A3A2A]/80 leading-relaxed">
                <p className="font-semibold text-[#4A3A2A] text-lg">
                  Hi, I&apos;m Sally – but to most people, I&apos;m just Ma.
                </p>

                <p>
                  Family has always been at the heart of my life. I&apos;ve raised
                  three children, spent years childminding, and cared for countless
                  little (and not-so-little) people along the way. Looking after
                  others has never felt like a job to me – it&apos;s simply who I am.
                  And for as long as I can remember, that care has always found its
                  way into my cooking.
                </p>

                <p>
                  Our home was never quiet, and the kitchen was always busy. Big pots
                  on the hob, plates being passed around, and everyone leaving the
                  table full and happy. Cooking became my way of showing love –
                  feeding people properly, generously, and with heart.
                </p>

                <p>
                  Over the years, my love for food grew beyond traditional home
                  cooking. I&apos;ve always been curious in the kitchen, drawing
                  inspiration from flavours and dishes from all over the world.
                  From comforting classics to vibrant, spice-filled recipes,
                  I&apos;ve loved experimenting, learning, and bringing different
                  cultures together on one table – always with that familiar,
                  home-cooked touch.
                </p>

                <p>
                  What started as meals for family and friends soon turned into
                  catering for parties, celebrations, and special occasions. Time
                  and time again, I was told the same thing – &quot;This tastes like
                  home.&quot; That&apos;s when I realised my passion wasn&apos;t just
                  cooking, it was bringing people together through food.
                </p>

                <p>
                  Ma&apos;s Kitchen was born from that feeling. It&apos;s about honest,
                  home-cooked dishes inspired by flavours from around the world,
                  made with care, warmth, and a little spark that makes them
                  memorable. No fuss, no shortcuts – just quality ingredients,
                  generous portions, and food that makes people feel looked after.
                </p>

                <p>
                  Now, I&apos;m excited to bring Ma&apos;s Kitchen to others who want
                  comforting, flavourful food for their own gatherings. Whether
                  it&apos;s a family get-together, party, or private event, every
                  dish is prepared as if it were for my own table.
                </p>

                <p className="font-medium text-[#4A3A2A] italic">
                  From Ma&apos;s kitchen to yours – with love, always.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
