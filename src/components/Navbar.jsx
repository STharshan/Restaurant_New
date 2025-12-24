"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Menu", "Packages", "Gallery", "Reviews", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <button className="font-serif text-2xl font-bold text-[#2E2A25] hover:text-[#E07A2D] transition-colors">
          Ma&apos;s Kitchen
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-[#2E2A25] hover:text-[#E07A2D] transition-colors text-sm font-medium"
            >
              {item}
            </button>
          ))}

          <button className="ml-4 rounded-md bg-[#E07A2D] px-4 py-2 text-sm font-medium text-white hover:bg-[#d66f26] transition">
            Check Availability
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2E2A25]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setIsOpen(false)}
                className="text-left text-[#2E2A25] hover:text-[#E07A2D] text-sm font-medium"
              >
                {item}
              </button>
            ))}

            <button className="mt-2 rounded-md bg-[#E07A2D] px-4 py-2 text-sm font-medium text-white hover:bg-[#d66f26] transition">
              Check Availability
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
