"use client";

import Link from "next/link";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-95 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
        <img
          src="/synergic-logo.svg"
          alt="Synergic Intelligent Systems"
          className="h-8"
        />
        <button
          onClick={onClose}
          className="text-white text-4xl leading-none hover:text-(--brand-red) transition"
        >
          ×
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-8 text-white text-3xl font-light text-center">
          <Link href="/" onClick={onClose} className="hover:text-(--brand-red) transition">
            Home
          </Link>
          <Link href="/services" onClick={onClose} className="hover:text-(--brand-red) transition">
            Services
          </Link>
          <Link href="/about" onClick={onClose} className="hover:text-(--brand-red) transition">
            About
          </Link>
          <Link href="/contact" onClick={onClose} className="hover:text-(--brand-red) transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="pb-12 flex justify-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-white text-sm uppercase tracking-wide">
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              borderWidth: "2px",
              borderColor: "var(--brand-red)",
            }}
          >
            <svg
              className="w-5 h-5"
              style={{ color: "var(--brand-red)" }}
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
