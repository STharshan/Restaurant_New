"use client";

import React from "react";

export default function Service() {
  const services = [
    {
      title: "Breakfast",
      img: "/service-1.jpg",
    },
    {
      title: "Appetizers",
      img: "/service-2.jpg",
    },
    {
      title: "Drinks",
      img: "/service-3.jpg",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --gold: hsl(38, 61%, 73%);
        }

        /* IMAGE WRAPPER */
        .service-img {
          position: relative;
          overflow: hidden;
        }

        /* IMAGE ZOOM */
        .service-img img {
          transition: transform 0.8s ease;
        }
        .service-img:hover img {
          transform: scale(1.12);
        }

        /* ✨ SHINE EFFECT */
        .service-img::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.35),
            transparent
          );
          transform: skewX(-25deg);
        }

        .service-img:hover::after {
          animation: shineMove 1.2s ease forwards;
        }

        @keyframes shineMove {
          from {
            left: -120%;
          }
          to {
            left: 140%;
          }
        }

        /* GOLD PATTERN STRIP */
        .pattern {
          width: 90px;
          height: 18px;
          margin: 18px auto;
          background: repeating-linear-gradient(
            45deg,
            var(--gold),
            var(--gold) 2px,
            transparent 2px,
            transparent 6px
          );
          opacity: 0.9;
        }

        /* BACKGROUND TEXTURE */
        .service-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,.03), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,.03), transparent 40%);
          pointer-events: none;
        }
      `}</style>

      <section className="relative bg-black py-36 service-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* TOP TEXT */}
          <p className="text-[#e4c590] uppercase tracking-[0.4em] text-xs mb-4">
            Flavors For Royalty
          </p>

          <h2 className="font-[Forum] text-white text-[clamp(2.5rem,5vw,4rem)] mb-6">
            We Offer Top Notch
          </h2>

          <p className="max-w-xl mx-auto text-white/70 text-sm leading-7 mb-24">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry lorem Ipsum has been the
            industry’s standard dummy text ever.
          </p>

          {/* SERVICES */}
          <div className="grid gap-20 md:grid-cols-3 items-start">
            {/* LEFT */}
            <div className="text-center">
              <div className="pattern" />
              <div className="service-img">
                <img
                  src={services[0].img}
                  alt="Breakfast"
                  className="mx-auto w-[260px] h-[360px] object-cover"
                />
              </div>
              <div className="pattern" />

              <h3 className="font-[Forum] text-white text-2xl mt-8">
                Breakfast
              </h3>
              <p className="text-[#e4c590] uppercase tracking-[0.3em] text-xs mt-3">
                View Menu
              </p>
            </div>

            {/* CENTER (LOWER) */}
            <div className="text-center mt-24">
              <div className="pattern" />
              <div className="service-img">
                <img
                  src={services[1].img}
                  alt="Appetizers"
                  className="mx-auto w-[260px] h-[360px] object-cover"
                />
              </div>
              <div className="pattern" />

              <h3 className="font-[Forum] text-white text-2xl mt-8">
                Appetizers
              </h3>
              <p className="text-[#e4c590] uppercase tracking-[0.3em] text-xs mt-3">
                View Menu
              </p>
            </div>

            {/* RIGHT */}
            <div className="text-center">
              <div className="pattern" />
              <div className="service-img">
                <img
                  src={services[2].img}
                  alt="Drinks"
                  className="mx-auto w-[260px] h-[360px] object-cover"
                />
              </div>
              <div className="pattern" />

              <h3 className="font-[Forum] text-white text-2xl mt-8">
                Drinks
              </h3>
              <p className="text-[#e4c590] uppercase tracking-[0.3em] text-xs mt-3">
                View Menu
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
