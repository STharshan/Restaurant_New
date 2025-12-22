import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/food-bg.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Left Navigation */}
          <div>
            <ul className="space-y-3 uppercase text-sm tracking-widest">
              <li className="hover:text-[#d4af37] cursor-pointer">Home</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Menus</li>
              <li className="hover:text-[#d4af37] cursor-pointer">About Us</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Our Chefs</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Center Content */}
          <div className="md:col-span-2 text-center border border-[#d4af37] p-18">
            <h2 className="text-3xl font-serif text-[#d4af37] mb-4">
              GRILLI
            </h2>

            <p className="text-sm mb-2">
              Restaurant St, Ruaka, Nairobi KE
            </p>
            <p className="text-sm mb-2">booking@grilli.com</p>
            <p className="text-sm mb-2">Booking Request: +254-123-123456</p>
            <p className="text-sm mb-6">Open: 09:00 am - 01:00 pm</p>

            {/* Newsletter */}
            <h3 className="text-xl text-white mb-2">
              Get News & Offers
            </h3>
            <p className="text-sm mb-4">
              Subscribe us & Get <span className="text-[#d4af37]">25% Off</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-64 px-4 py-2 bg-transparent border border-gray-600 focus:outline-none focus:border-[#d4af37]"
              />
              <button className="px-6 py-2 bg-[#d4af37] text-black uppercase text-sm tracking-wider hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-right">
            <ul className="space-y-3 uppercase text-sm tracking-widest">
              <li className="hover:text-[#d4af37] cursor-pointer">Facebook</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Instagram</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Twitter</li>
              <li className="hover:text-[#d4af37] cursor-pointer">YouTube</li>
              <li className="hover:text-[#d4af37] cursor-pointer">Google Map</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © 2024 Grilli. All Rights Reserved | Crafted by{" "}
          <span className="text-[#d4af37]">DNX EMPIRE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
