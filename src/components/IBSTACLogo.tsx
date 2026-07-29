import React from 'react';
import officialLogoImg from '../assets/images/ibstac_official_logo_1785329557117.jpg';

interface IBSTACLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const IBSTACLogo: React.FC<IBSTACLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <div className={`relative flex items-center justify-center ${variant === 'dark' ? 'bg-white p-1.5 rounded-xs' : ''}`}>
        <img
          src={officialLogoImg}
          alt={showSubtitle ? "IBSTAC - International Bureau For Standard Accreditation" : "IBSTAC"}
          referrerPolicy="no-referrer"
          className={`${heightClasses[size]} w-auto object-contain mix-blend-multiply filter contrast-125 transition-transform duration-300 group-hover:scale-105`}
          style={!showSubtitle ? { clipPath: 'inset(0 0 34% 0)', marginBottom: '-0.4em' } : undefined}
        />
      </div>
    </div>
  );
};
