import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div className={`hidden lg:flex ${className}`}>
      {children}
    </div>
  );
}