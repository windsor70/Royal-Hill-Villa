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
  theme = 'dark',
  size = 'md'
}) => {
  const goldColor = theme === 'gold' ? '#D4AF37' : '#C29B38';
  const charcoalColor = theme === 'light' ? '#FFFFFF' : '#3D3A35';

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-10 w-auto';
      case 'lg':
        return 'h-24 w-auto';
      case 'xl':
        return 'h-32 sm:h-40 w-auto';
      case 'md':
      default:
        return 'h-14 w-auto';
    }
  };

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        {/* Crown & Roof Gable Mark */}
        <svg
          viewBox="0 0 400 240"
          className={getSizeClasses()}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ornate Gold Crown */}
          <path
            d="M200 15L216 48L200 62L184 48L200 15Z"
            fill={goldColor}
          />
          {/* Main Crown Body */}
          <path
            d="M75 80C88 120 120 160 200 160C280 160 312 120 325 80C295 130 260 100 250 85L225 125L200 45L175 125L150 85C140 100 105 130 75 80Z"
            fill={goldColor}
          />
          {/* Crown Tip Accents */}
          <circle cx="75" cy="80" r="5" fill={goldColor} />
          <circle cx="150" cy="85" r="4.5" fill={goldColor} />
          <circle cx="250" cy="85" r="4.5" fill={goldColor} />
          <circle cx="325" cy="80" r="5" fill={goldColor} />
          
          {/* Crown Inner Cutout Teardrops */}
          <path d="M200 80L208 102L200 114L192 102L200 80Z" fill="#FDFBF7" />
          <circle cx="150" cy="115" r="4" fill="#FDFBF7" />
          <circle cx="250" cy="115" r="4" fill="#FDFBF7" />

          {/* Roof Gable - Slate Charcoal Left Slope */}
          <path
            d="M105 195L170 145L175 152L115 198H105V195Z"
            fill={charcoalColor}
          />
          {/* Roof Gable - Slate Charcoal Right Slope */}
          <path
            d="M295 195L230 145L225 152L285 198H295V195Z"
            fill={charcoalColor}
          />
          {/* Inner Golden Gable Peak */}
          <path
            d="M200 145L135 195H145L200 153L255 195H265L200 145Z"
            fill={goldColor}
          />

          {/* Center 4-Pane Window */}
          <rect x="186" y="172" width="28" height="24" stroke={goldColor} strokeWidth="2.5" fill="none" />
          <line x1="200" y1="172" x2="200" y2="196" stroke={goldColor} strokeWidth="2.5" />
          <line x1="186" y1="184" x2="214" y2="184" stroke={goldColor} strokeWidth="2.5" />

          {/* Horizontal Line Divider */}
          <line x1="15" y1="200" x2="385" y2="200" stroke={charcoalColor} strokeWidth="1.5" strokeOpacity="0.8" />
        </svg>

        {/* Text Next to Mark */}
        <div className="flex flex-col justify-center">
          <span
            className="font-serif tracking-[0.22em] font-normal leading-none uppercase text-base sm:text-lg"
            style={{ color: charcoalColor }}
          >
            Royal Hill
          </span>
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-[0.45em] uppercase mt-1 leading-none"
            style={{ color: goldColor }}
          >
            V I L L A
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Logo (as in the uploaded image.png)
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 400 380"
        className={getSizeClasses()}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Diamond Spear on Center Spire */}
        <path
          d="M200 24L214 55L200 70L186 55L200 24Z"
          fill={goldColor}
        />
        <path
          d="M200 70V88"
          stroke={goldColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Crown 5 Spikes & Curvatures */}
        <path
          d="M72 82C88 128 120 166 200 166C280 166 312 128 328 82C296 134 260 102 248 88L224 130L200 50L176 130L152 88C140 102 104 134 72 82Z"
          fill={goldColor}
        />

        {/* Crown Jewel Tip Accents */}
        <circle cx="72" cy="82" r="5" fill={goldColor} />
        <circle cx="152" cy="88" r="4.5" fill={goldColor} />
        <circle cx="248" cy="88" r="4.5" fill={goldColor} />
        <circle cx="328" cy="82" r="5" fill={goldColor} />

        {/* Crown Cutout Accents (Diamond in center, side teardrops) */}
        <path d="M200 84L208 108L200 120L192 108L200 84Z" fill="#FDFBF7" />
        <ellipse cx="148" cy="120" rx="4" ry="7" transform="rotate(-15 148 120)" fill="#FDFBF7" />
        <ellipse cx="252" cy="120" rx="4" ry="7" transform="rotate(15 252 120)" fill="#FDFBF7" />
        
        {/* Additional Mini Cutouts on lower crown rim */}
        <circle cx="118" cy="138" r="3.5" fill="#FDFBF7" />
        <circle cx="282" cy="138" r="3.5" fill="#FDFBF7" />

        {/* Roof Gable Left Outer Slope (Slate Charcoal) */}
        <path
          d="M106 198L168 148L174 155L118 200H106V198Z"
          fill={charcoalColor}
        />
        {/* Roof Gable Right Outer Slope (Slate Charcoal) */}
        <path
          d="M294 198L232 148L226 155L282 200H294V198Z"
          fill={charcoalColor}
        />

        {/* Roof Gable Center Peak (Gold) */}
        <path
          d="M200 148L136 198H148L200 156L252 198H264L200 148Z"
          fill={goldColor}
        />

        {/* Center 4-Pane Square Window */}
        <rect
          x="186"
          y="173"
          width="28"
          height="24"
          stroke={goldColor}
          strokeWidth="2.5"
          fill="#FDFBF7"
        />
        <line x1="200" y1="173" x2="200" y2="197" stroke={goldColor} strokeWidth="2.5" />
        <line x1="186" y1="185" x2="214" y2="185" stroke={goldColor} strokeWidth="2.5" />

        {/* Horizontal Divider Line */}
        <line
          x1="12"
          y1="200"
          x2="388"
          y2="200"
          stroke={charcoalColor}
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Text: ROYAL HILL */}
        <text
          x="200"
          y="256"
          textAnchor="middle"
          fill={charcoalColor}
          fontFamily="Cinzel, 'Playfair Display', Georgia, serif"
          fontSize="41"
          letterSpacing="5.5"
          fontWeight="500"
        >
          ROYAL HILL
        </text>

        {/* Text: VILLA */}
        <text
          x="200"
          y="300"
          textAnchor="middle"
          fill={goldColor}
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="19"
          letterSpacing="11"
          fontWeight="600"
        >
          V I L L A
        </text>
      </svg>
    </div>
  );
};
