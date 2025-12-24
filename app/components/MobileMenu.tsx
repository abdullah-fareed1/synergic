"use client";

import Link from "next/link";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
        <img
          src="/synergic-logo.svg"
          alt="Synergic Intelligent Systems"
          className="h-8"
        />
        <button
          onClick={onClose}
          className="text-white text-4xl leading-none hover:opacity-70 transition"
        >
          ×
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-8 text-white text-3xl font-light text-center">
          <Link 
            href="/" 
            onClick={onClose} 
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={onClose} 
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={onClose} 
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={onClose} 
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-12 flex justify-center">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <span className="text-white text-sm uppercase tracking-wide font-medium">
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: "#E63946" }}
          >
            <svg
              className="w-5 h-5"
              style={{ color: "#E63946" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}