"use client";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gray-400 opacity-30" style={{ top: 'calc(100vw / 20)' }} />
      </div>
      <div className="lg:hidden absolute left-0 right-0 h-px bg-gray-400 opacity-30" style={{ top: 60 }} />

      <div className="relative flex items-start justify-between" style={{ height: 'calc(100vw / 20)' }}>
        {/* Desktop Logo */}
        <div className="hidden lg:flex items-center absolute left-[5.56%] top-0 bottom-0 pl-4 cursor-pointer">
          <img
            src="logos/synergic-b2c-logo.png"
            alt="Synergic Intelligent Systems"
            className="h-9 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center px-4 py-4 cursor-pointer">
          <img
            src="logos/synergic-b2c-logo.png"
            alt="Synergic Intelligent Systems"
            className="h-7 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>

        {/* Desktop Get in Touch */}
        <div 
          className="hidden lg:flex items-center justify-end absolute top-0 bottom-0 pr-4 gap-3 cursor-pointer hover:opacity-80 transition bg-[#F3F3EE]"
          style={{ 
            right: '5.56%',
            width: 'calc(5.56% * 2)'
          }}
        >
          <span 
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: 'var(--brand-red)' }}
          >
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition border-2"
            style={{ 
              borderColor: "var(--brand-red)",
              backgroundColor: 'transparent'
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

        {/* Desktop Menu */}
        <button
          onClick={onMenuClick}
          className="hidden lg:flex absolute right-0 top-0 bottom-0 flex-col items-center justify-center hover:opacity-80 transition bg-[#F3F3EE] cursor-pointer"
          style={{ width: '5.56%' }}
        >
          <div className="flex flex-col items-center gap-2">
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
              <rect x="0" y="0" width="32" height="3" rx="1.5" fill="black" />
              <rect x="0" y="9" width="32" height="3" rx="1.5" fill="black" />
            </svg>
            <span
              className="uppercase font-bold"
              style={{
                color: "var(--brand-red)",
                fontSize: "10px",
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
          className="lg:hidden flex flex-col items-center justify-center hover:opacity-80 transition bg-[#F3F3EE]"
          style={{ width: 'calc(100vw / 6)', height: 60 }}
        >
          <div className="flex flex-col items-center gap-[6px]">
            <div className="flex flex-col gap-[6px]">
              <div 
                className="bg-black" 
                style={{ width: '32px', height: '2px', borderRadius: '1px' }} 
              />
              <div 
                className="bg-black" 
                style={{ width: '32px', height: '2px', borderRadius: '1px' }} 
              />
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