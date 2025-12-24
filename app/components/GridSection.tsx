"use client";
import React from "react";

interface GridSectionProps {
  children: React.ReactNode;
  className?: string;
  showLines?: [boolean, boolean, boolean, boolean, boolean];
  bgColor?: string;
  bgImage?: string;
  minHeight?: string;
  overlay?: string;
  desktopOnly?: boolean; // Hide entire section on mobile
}

export default function GridSection({ 
  children, 
  className = "",
  showLines = [true, true, true, true, true],
  bgColor = "bg-white",
  bgImage,
  overlay,
  minHeight,
  desktopOnly = false
}: GridSectionProps) {
  const visibilityClass = desktopOnly ? "hidden lg:block" : "";
  
  return (
    <section 
      className={`${bgColor} ${visibilityClass} relative overflow-hidden ${className}`}
      style={{ 
        minHeight,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className={`absolute inset-0 ${overlay}`} style={{ zIndex: 0 }} />
      )}
      
      {showLines[0] && <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-10" />}
      {showLines[1] && <div className="hidden lg:block absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-10" />}
      {showLines[2] && <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-10" />}
      {showLines[3] && <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-10" />}
      {showLines[4] && <div className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-10" />}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}