import React from 'react';
import ibstacLogo from '../assets/images/ibstac_official_clean_logo_1785763448629.jpg';

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

  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-18',
    lg: 'h-20 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <div className="relative flex items-center justify-center transition-all duration-300">
        <img
          src={ibstacLogo}
          alt="IBSTAC - International Bureau For Standard Accreditation"
          referrerPolicy="no-referrer"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01] ${
            isDark ? 'mix-blend-screen' : 'mix-blend-multiply'
          }`}
          style={{
            filter: isDark
              ? 'invert(1) contrast(140%) brightness(110%)'
              : 'contrast(135%) brightness(98%)',
          }}
        />
      </div>
    </div>
  );
};
