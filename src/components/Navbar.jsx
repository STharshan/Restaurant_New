"use client";

import React from "react";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <button className="font-serif text-2xl font-bold text-[#2E2A25] hover:text-[#E07A2D] transition-colors">
          Ma&apos;s Kitchen
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["About", "Menu", "Packages", "Gallery", "Reviews", "Contact"].map(
            (item) => (
              <button
                key={item}
                className="text-[#2E2A25] hover:text-[#E07A2D] transition-colors text-sm font-medium"
              >
                {item}
              </button>
            )
          )}

          {/* CTA Button */}
          <button className="ml-4 inline-flex items-center justify-center rounded-md bg-[#E07A2D] px-4 py-2 text-sm font-medium text-white hover:bg-[#d66f26] transition">
            Check Availability
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2E2A25] hover:text-[#E07A2D] transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
