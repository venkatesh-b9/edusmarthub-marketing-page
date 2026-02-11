import React from "react";
import logoImage from "@/assets/edusmarthub_logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = "md", textColor }) => {
  const imgSizes = {
    sm: "h-9 w-9",
    md: "h-14 w-14",
    lg: "h-20 w-20",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImage}
        alt="EduSmartHub Logo"
        className={`${imgSizes[size]} object-contain flex-shrink-0 drop-shadow-md`}
      />
      {showText && (
        <span
          className={`font-logo font-bold ${textSizes[size]} leading-tight tracking-tight`}
          style={textColor ? { color: textColor } : { color: '#1E3A8A' }}
        >
          EduSmartHub
        </span>
      )}
    </div>
  );
};

export default Logo;
