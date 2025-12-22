"use client";

import { useState } from "react";
import  Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroimage.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center z-10 px-6">
        <div className="max-w-5xl text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Intelligent Systems for Commerce,
            <span className="block mt-2">Enterprise and Growth</span>
          </h1>
          <p className="text-lg opacity-90">
            Modular, API-first platforms built for performance,
            <span className="block">automation, and scale</span>
          </p>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </section>
  );
}
