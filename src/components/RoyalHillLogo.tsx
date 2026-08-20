import React from 'react';

interface RoyalHillLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RoyalHillLogo: React.FC<RoyalHillLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return variant === 'horizontal' ? 'h-10 w-auto' : 'h-12 w-auto max-w-[120px]';
      case 'lg':
        return 'h-24 sm:h-28 w-auto max-w-[240px]';
      case 'xl':
        return 'h-32 sm:h-44 w-auto max-w-[320px]';
      case 'md':
      default:
        return variant === 'horizontal' ? 'h-12 w-auto' : 'h-16 sm:h-20 w-auto max-w-[180px]';
    }
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/royal logo.jpg"
        alt="Royal Hill Villa Logo"
        className={`${getSizeStyles()} object-contain rounded-lg shadow-xs hover:opacity-95 transition-opacity`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.endsWith('/royal logo.jpg') || target.src.endsWith('/royal%20logo.jpg')) {
            target.src = '/Royal Logo.jpg';
          } else if (target.src.endsWith('/Royal Logo.jpg')) {
            target.src = 'https://royalhillvilla.com/royal%20logo.jpg';
          } else if (target.src.endsWith('royalhillvilla.com/royal%20logo.jpg')) {
            target.src = '/RoyalLogo.jpg';
          } else if (!target.src.endsWith('/logo.svg')) {
            target.src = '/logo.svg';
          }
        }}
      />
    </div>
  );
};
