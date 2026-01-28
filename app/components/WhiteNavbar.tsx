"use client";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-white h-15">
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gray-300 opacity-30" style={{ top: 'calc(100vw / 20)' }} />
      </div>
      <div className="lg:hidden absolute left-0 right-0 h-px bg-gray-300 opacity-30" style={{ top: 60 }} />

      <div className="relative flex items-start justify-between" style={{ height: 'calc(100vw / 20)', backgroundColor: 'white' }}>
        <div className="hidden lg:flex items-center absolute left-[5.56%] top-0 bottom-0 pl-4 cursor-pointer">
          <img
            src="logos/synergic-b2c-logo.png"
            alt="Synergic Intelligent Systems"
            className="h-9 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>
        <div className="lg:hidden flex items-center px-4 py-4 cursor-pointer">
          <img
            src="logos/synergic-b2c-logo.png"
            alt="Synergic Intelligent Systems"
            className="h-7 w-auto"
            onClick={() => window.location.href = '/'}
          />
        </div>
        <div 
          className="hidden lg:flex items-center justify-end absolute top-0 bottom-0 pr-4 gap-3 cursor-pointer hover:opacity-80 transition"
          style={{ 
            right: '5.56%',
            width: 'calc(5.56% * 2)',
            backgroundColor: 'var(--brand-light)'
          }}
        >
          <span 
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: '#1A1A1A' }}
          >
            Get in Touch
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition border-2"
            style={{ 
              borderColor: "#FB3B22",
              backgroundColor: 'transparent'
            }}
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
        <button
          onClick={onMenuClick}
          className="hidden lg:flex absolute right-0 top-0 bottom-0 flex-col items-center justify-center hover:opacity-80 transition cursor-pointer"
          style={{ width: '5.56%', backgroundColor: 'var(--brand-red)' }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-col gap-2">
              <div className="bg-white w-10 h-0.75 rounded-sm" />
              <div className="bg-white w-10 h-0.75 rounded-sm" />
              <div className="bg-white w-10 h-0.75 rounded-sm" />
            </div>
            
          </div>
        </button>
        <button
          onClick={onMenuClick}
          className="lg:hidden flex flex-col items-center justify-center hover:opacity-80 transition"
          style={{ width: 'calc(100vw / 6)', height: 50 }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-col gap-2">
              <div className="bg-black w-7 h-0.5 rounded-sm mt-0.8" />
              <div className="bg-black w-7 h-0.5 rounded-sm mt-0.8" />
              <div className="bg-black w-7 h-0.5 rounded-sm mt-0.8" />
            </div>
            
          </div>
        </button>
      </div>
    </nav>
  );
}