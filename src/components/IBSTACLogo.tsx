import React from 'react';
import ibstacLogoBlack from '../assets/images/ibstac_logo_black.png';
import ibstacLogoWhite from '../assets/images/ibstac_logo_white.png';

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
}) => {
  const isDark = variant === 'dark';
  const logoSrc = isDark ? ibstacLogoWhite : ibstacLogoBlack;

  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-18',
    lg: 'h-20 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <img
        src={logoSrc}
        alt="IBSTAC - International Bureau For Standard Accreditation"
        referrerPolicy="no-referrer"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]`}
      />
    </div>
  );
};
