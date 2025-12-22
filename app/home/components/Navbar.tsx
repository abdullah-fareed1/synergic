"use client";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/synergic-logo.svg"
          alt="Synergic Intelligent Systems"
          className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Desktop Get in Touch */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-white text-sm font-medium tracking-wide uppercase">
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition"
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

        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="relative flex flex-col items-center justify-center hover:opacity-80 transition"
          style={{ width: "72px", height: "56px" }}
        >
          <div
            className="absolute inset-0 bg-black rounded-sm"
            style={{ opacity: 0.32 }}
          />
          <div className="relative flex flex-col items-center gap-1">
            <span
              className="uppercase font-semibold"
              style={{
                color: "var(--brand-red)",
                fontSize: "9px",
                letterSpacing: "1.55px",
              }}
            >
              MENU
            </span>
            <div className="flex flex-col gap-1">
              <div className="bg-white w-7 h-0.75 rounded-sm" />
              <div className="bg-white w-7 h-0.75 rounded-sm" />
              <div className="bg-white w-7 h-0.75 rounded-sm" />
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
