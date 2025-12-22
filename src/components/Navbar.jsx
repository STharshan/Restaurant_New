"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(false);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // header hide on scroll (same as original)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > 50) {
        setActive(true);
        setHide(y > lastScroll.current);
      } else {
        setActive(false);
        setHide(false);
      }
      lastScroll.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          active ? "bg-[#111] py-4" : "bg-transparent py-6"
        } ${hide ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* LOGO */}
          <img
            src="/logo.svg"
            alt="logo"
            className="h-10"
          />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 uppercase text-sm tracking-widest text-white">
            {["Home", "Menus", "About Us", "Chefs", "Contact"].map((i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[#e4c590] transition"
              >
                {i}
              </a>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden relative z-[60] flex flex-col gap-[6px]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-7 h-[2px] bg-white" />
            <span className="w-7 h-[2px] bg-white" />
            <span className="w-7 h-[2px] bg-white" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#0b0b0b] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* NAV LINKS */}
        <ul className="mt-24 px-8 space-y-6 uppercase tracking-widest text-sm text-white">
          {["Home", "Menus", "About Us", "Chefs", "Contact"].map((i) => (
            <li key={i}>
              <a
                href="#"
                className="block hover:text-[#e4c590] transition"
                onClick={() => setOpen(false)}
              >
                {i}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 px-8">
          <a
            href="#"
            className="block text-center border border-[#e4c590] py-3 uppercase tracking-widest text-xs text-[#e4c590] hover:bg-[#e4c590] hover:text-black transition"
          >
            Find A Table
          </a>
        </div>
      </aside>
    </>
  );
}
