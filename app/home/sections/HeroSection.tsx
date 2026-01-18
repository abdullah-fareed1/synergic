"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-100 lg:h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('images/heroimage.avif')" 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-15" />
      </div>

      {/* Grid lines extending full height */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      </div>

      {/* Navbar Component */}
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center z-10 px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-xl lg:text-5xl font-bold mb-6">
            Intelligent Systems for Commerce,
            <span className="block mt-2">Enterprise and Growth</span>
          </h1>
          <p className="lg:text-xl text-sm opacity-90">
            Modular, API-first platforms built for performance,
            <span className="block">automation, and scale</span>
          </p>
        </div>
      </div>

      {/* Mobile Menu Component */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </section>
  );
}