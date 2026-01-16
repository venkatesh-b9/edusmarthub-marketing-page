import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = "md", textColor }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo SVG */}
      <div className={`${sizeClasses[size]} flex-shrink-0 relative`}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Shield Background with Gradient - Lighter at top, darker at bottom */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="3" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.25" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Shield Shape */}
          <path
            d="M100 20 L160 50 L160 120 C160 150 140 170 100 180 C60 170 40 150 40 120 L40 50 Z"
            fill="url(#shieldGradient)"
            stroke="#1E3A8A"
            strokeWidth="3"
            filter="url(#shadow)"
          />

          {/* Graduation Cap on Top */}
          <g transform="translate(100, 30)">
            {/* Cap Base */}
            <ellipse cx="0" cy="0" rx="35" ry="8" fill="#F97316" />
            {/* Cap Top */}
            <path
              d="M-30 0 L0 -15 L30 0"
              fill="#EA580C"
              stroke="#C2410C"
              strokeWidth="2"
            />
            {/* Tassel */}
            <circle cx="25" cy="5" r="3" fill="#F97316" />
            <path
              d="M25 8 Q25 15 20 20"
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Brain with Neural Network Inside Shield */}
          <g transform="translate(100, 100)">
            {/* Brain Outline - White as per design */}
            <path
              d="M-40 -20 Q-50 -30 -40 -35 Q-30 -40 -20 -35 Q-10 -30 -10 -20 Q-10 -10 -20 -5 Q-30 0 -30 10 Q-30 20 -20 25 Q-10 30 0 25 Q10 30 20 25 Q30 20 30 10 Q30 0 20 -5 Q10 -10 10 -20 Q10 -30 20 -35 Q30 -40 40 -35 Q50 -30 40 -20 Q40 -10 30 -5 Q20 0 20 10 Q20 20 10 20 Q0 20 -10 20 Q-20 20 -20 10 Q-20 0 -30 -5 Q-40 -10 -40 -20 Z"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              opacity="0.95"
            />

            {/* Neural Network Nodes and Connections */}
            {/* Left Hemisphere Nodes - Mix of blue and orange */}
            <circle cx="-25" cy="-15" r="3.5" fill="#3B82F6" />
            <circle cx="-20" cy="0" r="3.5" fill="#F97316" />
            <circle cx="-25" cy="15" r="3.5" fill="#3B82F6" />
            <circle cx="-10" cy="-10" r="3.5" fill="#F97316" />
            <circle cx="-15" cy="10" r="3.5" fill="#3B82F6" />
            <circle cx="-5" cy="-5" r="3" fill="#F97316" />

            {/* Right Hemisphere Nodes - Mix of blue and orange */}
            <circle cx="10" cy="-10" r="3.5" fill="#F97316" />
            <circle cx="15" cy="10" r="3.5" fill="#3B82F6" />
            <circle cx="25" cy="-15" r="3.5" fill="#F97316" />
            <circle cx="20" cy="0" r="3.5" fill="#3B82F6" />
            <circle cx="25" cy="15" r="3.5" fill="#F97316" />
            <circle cx="5" cy="-5" r="3" fill="#3B82F6" />

            {/* Center Nodes */}
            <circle cx="0" cy="-5" r="4" fill="#F97316" />
            <circle cx="0" cy="5" r="4" fill="#3B82F6" />
            <circle cx="-5" cy="0" r="3" fill="#F97316" />
            <circle cx="5" cy="0" r="3" fill="#3B82F6" />

            {/* Neural Connections - Mix of blue and orange */}
            <line x1="-25" y1="-15" x2="-20" y2="0" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="-20" y1="0" x2="-25" y2="15" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="-10" y1="-10" x2="0" y2="-5" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="-15" y1="10" x2="0" y2="5" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="10" y1="-10" x2="0" y2="-5" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="15" y1="10" x2="0" y2="5" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="25" y1="-15" x2="20" y2="0" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="20" y1="0" x2="25" y2="15" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#3B82F6" strokeWidth="2" opacity="0.8" />
            <line x1="-25" y1="-15" x2="-10" y2="-10" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="10" y1="-10" x2="25" y2="-15" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="-25" y1="15" x2="-15" y2="10" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="15" y1="10" x2="25" y2="15" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="-5" y1="-5" x2="0" y2="-5" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="5" y1="-5" x2="0" y2="-5" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
            <line x1="-5" y1="0" x2="0" y2="0" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
            <line x1="5" y1="0" x2="0" y2="0" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Logo Text - Bold dark blue as per design, or use provided textColor */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-logo font-bold ${textSizes[size]} leading-tight`}
            style={textColor ? { color: textColor } : { color: '#1E3A8A' }}
          >
            Edu Smart Hub
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
