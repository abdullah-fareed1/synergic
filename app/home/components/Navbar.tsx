"use client";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      {/* Grid overlay for desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Vertical lines - positioned at 1, 5, 9, 13, 17 out of 18 columns */}
        <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" /> {/*line 1*/}
        <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />{/*line 2*/}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />{/*line 3*/}
        <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />{/*line 4*/}
        <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />{/*line 5*/}

        {/* Horizontal line - height is 1/18 of viewport width to make squares */}
        <div className="absolute left-0 right-0 h-px bg-gray-400 opacity-30" style={{ top: 'calc(100vw / 20)' }} />
      </div>

      {/* Mobile horizontal line */}
      <div className="lg:hidden absolute left-0 right-0 h-px bg-gray-400 opacity-30" style={{ top: 60 }} />

      <div className="relative flex items-start justify-between" style={{ height: 'calc(100vw / 20)' }}>
        {/* Desktop Logo */}
        <div className="hidden lg:flex items-center absolute left-[5.56%] top-0 bottom-0 pl-4">
          <img
            src="logos/synergic-logo.svg"
            alt="Synergic Intelligent Systems"
            className="h-8 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center px-4 py-4">
          <img
            src="logos/synergic-logo.svg"
            alt="Synergic Intelligent Systems"
            className="h-7 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>

        {/* Desktop Get in Touch */}
        <div className="hidden lg:flex items-center absolute right-[5.56%] top-0 bottom-0 pr-4 gap-3">
          <span className="text-white text-sm tracking-wide uppercase">
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition border-2"
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

        {/* Desktop Menu Button */}
        <button
          onClick={onMenuClick}
          className="hidden lg:flex absolute right-0 top-0 bottom-0 flex-col items-center justify-center hover:opacity-80 transition bg-black/50"
          style={{ width: '5.56%' }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col gap-2">
              <div className="bg-white w-7 h-0.5 rounded-sm" />
              <div className="bg-white w-7 h-0.5 rounded-sm" />
            </div>
            <span
              className="uppercase font-semibold"
              style={{
                color: "#E63946",
                fontSize: "9px",
                letterSpacing: "1.55px",
              }}
            >
              MENU
            </span>
            
          </div>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex flex-col items-center justify-center hover:opacity-80 transition bg-black/50"
          style={{ width: 'calc(100vw / 6)', height: 60 }}
        >
          <div className="flex flex-col items-center gap-1">
            
            <div className="flex flex-col gap-1">
              <div className="bg-white w-7 h-0.5 rounded-sm mt-0.5" />
              <div className="bg-white w-7 h-0.5 rounded-sm mt-0.5" />
            </div>
            <span
              className="uppercase font-semibold"
              style={{
                color: "#E63946",
                fontSize: "9px",
                letterSpacing: "1.55px",
              }}
            >
              MENU
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
}