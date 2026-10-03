import React from 'react';

interface DeltaLogoProps {
  className?: string;
  variant?: 'solid' | 'stroke' | 'duo';
  strokeWidth?: number;
}

export const DELTA_PATHS = {
  fold: "M0 22 L44 50 L44 238 L0 210 Z",
  dBody: "M14 0 H106 C166 0 210 48 210 110 C210 150 190 178 156 198 L60 256 L60 146 L116 116 C130 108 135 94 130 80 C125 66 112 60 96 60 H60 V44 L14 16 Z"
};

export const DeltaLogoSvg: React.FC<DeltaLogoProps> = ({
  className = "w-6 h-7 fill-current",
  variant = 'solid',
  strokeWidth = 1.5,
}) => {
  if (variant === 'stroke') {
    return (
      <svg viewBox="0 0 210 256" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
        <path d={DELTA_PATHS.fold} strokeLinejoin="round" />
        <path d={DELTA_PATHS.dBody} strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === 'duo') {
    return (
      <svg viewBox="0 0 210 256" className={className}>
        <path d={DELTA_PATHS.fold} fill="currentColor" fillOpacity="0.65" />
        <path d={DELTA_PATHS.dBody} fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 210 256" fill="currentColor" className={className}>
      <path d={DELTA_PATHS.fold} />
      <path d={DELTA_PATHS.dBody} />
    </svg>
  );
};
