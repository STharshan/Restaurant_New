"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        img: "/hero-slider-1.jpg",
        subtitle: "Tradational & Hygine",
        titleA: "For the love of",
        titleB: "delicious food",
        text: "Come with family & feel the joy of mouthwatering food",
      },
      {
        img: "/hero-slider-2.jpg",
        subtitle: "delightful experience",
        titleA: "Flavors Inspired by",
        titleB: "the Seasons",
        text: "Come with family & feel the joy of mouthwatering food",
      },
      {
        img: "/hero-slider-3.jpg",
        subtitle: "amazing & delicious",
        titleA: "Where every flavor",
        titleB: "tells a story",
        text: "Come with family & feel the joy of mouthwatering food",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const lastActiveRef = useRef(0);
  const autoRef = useRef(null);

  const updatePos = (nextIndex) => {
    lastActiveRef.current = current;
    setCurrent(nextIndex);
  };

  const slideNext = () => updatePos(current >= slides.length - 1 ? 0 : current + 1);
  const slidePrev = () => updatePos(current <= 0 ? slides.length - 1 : current - 1);

  const autoSlide = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((p) => (p >= slides.length - 1 ? 0 : p + 1));
    }, 7000);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = null;
  };

  useEffect(() => {
    autoSlide();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style>{`
        :root{
          --gold-crayola: hsl(38, 61%, 73%);
          --gradient-1: linear-gradient(to top,hsla(0,0%,0%,0.9),hsla(0,0%,0%,0.7),transparent);
          --transition-1: 250ms ease;
          --transition-3: 1000ms ease;
        }

        /* ✅ IMPORTANT: original img-cover */
        .img-cover{ width:100%; height:100%; object-fit:cover; }

        .hero{
          position:relative;
          padding-block:120px;
          min-height:100vh;
          overflow:hidden;
          z-index:1;
          text-align:center;
        }

        .hero .slider-item{
          position:absolute;
          top:50%; left:50%;
          transform:translate(-50%,-50%);
          width:100%; height:100%;
          display:grid;
          place-content:center;
          padding-block-start:100px;
          opacity:0;
          visibility:hidden;
          transition: var(--transition-3);
          z-index:1;
        }

        .hero .slider-item.active{
          opacity:1;
          visibility:visible;
        }

        .hero .slider-bg{
          position:absolute;
          inset:0;
          z-index:-1;
          transform:scale(1.15);
          pointer-events:none;
          user-select:none;
        }

        .hero .slider-bg::after{
          content:"";
          position:absolute;
          inset:0;
          background: var(--gradient-1);
        }

        @keyframes smoothScale{0%{transform:scale(1)}100%{transform:scale(1.15)}}
        .hero .slider-item.active .slider-bg{ animation: smoothScale 7s linear forwards; }

        .slider-reveal{
          transform:translateY(30px);
          opacity:0;
        }

        @keyframes sliderReveal{
          0%{transform:translateY(30px);opacity:0}
          100%{transform:translateY(0);opacity:1}
        }

        .hero .slider-item.active .slider-reveal{
          animation: sliderReveal 1s ease forwards;
        }

        .hero .slider-item.active .section-subtitle{ animation-delay:500ms; }
        .hero .slider-item.active .hero-title{ animation-delay:1000ms; }
        .hero .slider-item.active .hero-text{ animation-delay:1500ms; }
        .hero .slider-item.active .btn{ animation-delay:2000ms; }

        /* btn hover swap (text-1/text-2) */
        .btn{ position:relative; display:inline-flex; align-items:center; justify-content:center; overflow:hidden; }
        .btn .text-1{ display:block; transform:translateY(0); transition: var(--transition-1); }
        .btn .text-2{
          position:absolute; inset:0;
          display:flex; align-items:center; justify-content:center;
          transform:translateY(110%);
          transition: var(--transition-1);
        }
        .btn:hover .text-1{ transform:translateY(-110%); }
        .btn:hover .text-2{ transform:translateY(0); }

        /* slider btn (desktop) */
        .hero .slider-btn{ display:none; }
        @media (min-width:1200px){
          .hero .slider-btn{
            display:grid;
            position:absolute;
            z-index:2;
            color: var(--gold-crayola);
            font-size: 24px;
            border: 1px solid var(--gold-crayola);
            width:45px;height:45px;
            place-items:center;
            top:50%;
            transform: translateY(-50%) rotate(45deg);
            transition: var(--transition-1);
          }
          .hero .slider-btn span{ transform: rotate(-45deg); display:inline-block; }
          .hero .slider-btn.prev{ left:30px; }
          .hero .slider-btn.next{ right:30px; }
          .hero .slider-btn:hover{ background: var(--gold-crayola); color:#000; }
        }

        /* hero-btn rotating border */
        .hero-btn{ position:absolute; right:15px; bottom:15px; z-index:2; }
        @media (min-width:768px){ .hero-btn{ right:50px; bottom:50px; } }
        .hero-btn::after{
          content:"";
          position:absolute;
          inset:0;
          border:1px solid var(--gold-crayola);
          animation: rotate360 15s linear infinite;
        }
        @keyframes rotate360{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
      `}</style>

      <section className="hero" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider>
          {slides.map((s, i) => (
            <li key={i} className={`slider-item ${i === current ? "active" : ""}`} data-hero-slider-item>
              <div className="slider-bg">
                <img src={s.img} width="1880" height="950" alt="" className="img-cover" />
              </div>

              <p className="label-2 section-subtitle slider-reveal text-white/80 uppercase tracking-[0.4em] text-[12px]">
                {s.subtitle}
              </p>

              <h1
                className="display-1 hero-title slider-reveal text-white leading-[1.05] mt-4 text-[calc(1.3rem+6.7vw)]"
                style={{ fontFamily: "Forum, cursive" }}
              >
                {s.titleA} <br />
                {s.titleB}
              </h1>

              <p className="body-2 hero-text slider-reveal text-white/80 max-w-[680px] mx-auto mt-3 text-[16px] leading-7">
                {s.text}
              </p>

              <a
                href="#"
                className="btn btn-primary slider-reveal mt-10 mx-auto h-[52px] px-7 border border-[var(--gold-crayola)] text-[12px] uppercase tracking-[0.2em] font-bold text-[var(--gold-crayola)]"
              >
                <span className="text text-1">View Our Menu</span>
                <span className="text text-2" aria-hidden="true">
                  View Our Menu
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* prev/next exactly */}
        <button
          className="slider-btn prev"
          data-prev-btn
          aria-label="slide to previous"
          onClick={slidePrev}
          onMouseOver={() => clearInterval(autoRef.current)}
          onMouseOut={autoSlide}
        >
          <span>‹</span>
        </button>

        <button
          className="slider-btn next"
          data-next-btn
          aria-label="slide to next"
          onClick={slideNext}
          onMouseOver={() => clearInterval(autoRef.current)}
          onMouseOut={autoSlide}
        >
          <span>›</span>
        </button>

        {/* book a table */}
        <a
          href="#"
          className="hero-btn bg-[var(--gold-crayola)] w-[110px] h-[110px] p-[12px] grid place-items-center scale-[0.6] md:scale-100"
          aria-label="booking icon"
        >
          <div className="text-center">
            <img src="/hero-icon.png" width="48" height="48" alt="booking icon" className="mx-auto mb-[6px]" />
            <span className="uppercase tracking-[0.2em] text-[12px] font-bold text-black">Book A Table</span>
          </div>
        </a>
      </section>
    </>
  );
}
