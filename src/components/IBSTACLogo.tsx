import React from 'react';
import ibstacOfficialLogo from '../assets/images/ibstac_official_logo_1785329557117.jpg';

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
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <div className={`relative flex items-center justify-center ${variant === 'dark' ? 'bg-white p-1.5 rounded-xs' : ''}`}>
        <img
          src={ibstacOfficialLogo}
          alt="IBSTAC - International Bureau For Standard Accreditation"
          referrerPolicy="no-referrer"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] mix-blend-multiply`}
          style={{
            filter: 'contrast(200%) brightness(80%) drop-shadow(0.6px 0 0 #000000) drop-shadow(-0.6px 0 0 #000000) drop-shadow(0 0.6px 0 #000000) drop-shadow(0 -0.6px 0 #000000) drop-shadow(0.3px 0.3px 0 #000000)',
          }}
        />
      </div>
    </div>
  );
};


