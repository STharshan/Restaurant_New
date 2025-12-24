import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#FBF5EE] py-16 px-4 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl font-bold text-[#4A3A2A]">
          Get in Touch
        </h2>
        <p className="mb-12 mx-auto max-w-2xl text-center text-[#4A3A2A]/70">
          We'd love to hear from you! Please fill out the form below to get in
          touch with us.
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 md:p-12 shadow-md">
            <h3 className="mb-8 font-serif text-2xl font-bold text-[#4A3A2A]">
              Contact Information
            </h3>

            <form className="space-y-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#4A3A2A]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-[#4A3A2A]/20 bg-[#FBF5EE]/50 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#C97A3A]/40"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#4A3A2A]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-[#4A3A2A]/20 bg-[#FBF5EE]/50 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#C97A3A]/40"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#4A3A2A]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full rounded-md border border-[#4A3A2A]/20 bg-[#FBF5EE]/50 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#C97A3A]/40"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-[#C97A3A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#C97A3A]/90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Address + Hours */}
          <div className="rounded-lg bg-white p-8 md:p-12 shadow-md">
            <h3 className="mb-6 font-serif text-2xl font-bold text-[#4A3A2A]">
              Address
            </h3>
            <p className="mb-8 leading-relaxed text-[#4A3A2A]/80">
              Ma&apos;s Kitchen
              <br />
              123 Main Street
              <br />
              Shepshed, Loughborough
              <br />
              LE11 1AA
            </p>

            <h3 className="mb-6 font-serif text-2xl font-bold text-[#4A3A2A]">
              Opening Hours
            </h3>
            <p className="leading-relaxed text-[#4A3A2A]/80">
              Monday – Friday: 9 AM – 5 PM
              <br />
              Saturday: 10 AM – 4 PM
              <br />
              Sunday: Closed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
