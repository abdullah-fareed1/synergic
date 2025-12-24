import React from "react";

type ColumnType = 'A' | 'B' | 'C' | 'D' | 'AB' | 'BC' | 'CD' | 'ABC' | 'BCD' | 'ABCD';

interface GridColProps {
  span: ColumnType;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  bgImage?: string;
  position?: 'relative' | 'absolute';
  style?: React.CSSProperties;
}

const columnConfig: Record<ColumnType, { marginLeft: string; width: string }> = {
  'A': { marginLeft: '5.56%', width: '22.22%' },
  'B': { marginLeft: '0', width: '22.22%' },
  'C': { marginLeft: '0', width: '22.22%' },
  'D': { marginLeft: '0', width: '22.22%' },
  'AB': { marginLeft: '5.56%', width: '44.44%' },
  'BC': { marginLeft: '0', width: '44.44%' },
  'CD': { marginLeft: '0', width: '44.44%' },
  'ABC': { marginLeft: '5.56%', width: '66.66%' },
  'BCD': { marginLeft: '0', width: '66.66%' },
  'ABCD': { marginLeft: '5.56%', width: '88.88%' },
};

export default function GridCol({ 
  span, 
  children, 
  className = "",
  bgColor,
  bgImage,
  position = 'relative',
  style = {}
}: GridColProps) {
  const config = columnConfig[span];
  
  return (
    <div 
      style={{
        marginLeft: config.marginLeft,
        width: config.width,
        position,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style
      }}
      className={`${bgColor || ''} ${className}`}
    >
      {children}
    </div>
  );
}