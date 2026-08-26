import React from 'react';
import ibstacLogoVector from '../assets/images/ibstac_logo_vector.svg';

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
    md: 'h-14 sm:h-17',
    lg: 'h-20 sm:h-26',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <img
        src={ibstacLogoVector}
        alt="IBSTAC - International Bureau For Standard Accreditation"
        referrerPolicy="no-referrer"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]`}
        style={isDark ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </div>
  );
};

