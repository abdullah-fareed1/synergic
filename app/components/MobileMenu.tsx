"use client";

import Link from "next/link";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
        <Link href="/" onClick={onClose}>
          <img
            src="logos/synergic-logo.svg"
            alt="Synergic Intelligent Systems"
            className="h-7"
          />
        </Link>
        <button
          onClick={onClose}
          className="text-white text-4xl leading-none hover:opacity-70 transition"
        >
          ×
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-y-auto py-6">
        <div className="flex flex-col gap-5 text-white text-2xl font-light text-center">
          <Link
            href="/"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Home
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
            href="/b2c"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            B2C
          </Link>
          <Link
            href="/b2c-solutions"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            B2C Solutions
          </Link>
          <Link
            href="/b2b-ecommerce"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            B2B eCommerce
          </Link>
          <Link
            href="/fusionmesh"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            FusionMesh
          </Link>
          <Link
            href="/tech-advantage"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Tech Advantage
          </Link>
          <Link
            href="/digital-marketplaces"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Digital Marketplaces
          </Link>
          <Link
            href="/erp-integrations"
            onClick={onClose}
            className="flex items-center justify-center gap-2 hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            ERP Integrations
            <span
              className="text-xs font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-red)", color: "white" }}
            >
              Ongoing
            </span>
          </Link>
          <Link
            href="/career"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Career
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "white" }}
          >
            Contact
          </Link>
          <span className="flex items-center justify-center gap-2 text-gray-500 cursor-not-allowed">
            PIM Systems
            <span
              className="text-xs font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-yellow)", color: "var(--brand-black)" }}
            >
              Coming Soon
            </span>
          </span>
          <span className="flex items-center justify-center gap-2 text-gray-500 cursor-not-allowed">
            Ecommerce Tech
            <span
              className="text-xs font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-yellow)", color: "var(--brand-black)" }}
            >
              Coming Soon
            </span>
          </span>
          <span className="flex items-center justify-center gap-2 text-gray-500 cursor-not-allowed">
            OMS
            <span
              className="text-xs font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-yellow)", color: "var(--brand-black)" }}
            >
              Coming Soon
            </span>
          </span>
        </div>
      </div>

      <div className="pb-8 flex justify-center">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <span className="text-white text-sm uppercase tracking-wide font-medium">
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: "var(--brand-red)" }}
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
        </Link>
      </div>
    </div>
  );
}