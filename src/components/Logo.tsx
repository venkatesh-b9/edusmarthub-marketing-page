import React from "react";
import logoImage from "@/assets/edusmarthub_logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = "md", textColor }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImage}
        alt="EduSmartHub Logo"
        className={`${sizeClasses[size]} w-auto flex-shrink-0`}
      />
      {showText && (
        <span
          className={`font-logo font-bold ${textSizes[size]} leading-tight`}
          style={textColor ? { color: textColor } : { color: '#1E3A8A' }}
        >
          Edu Smart Hub
        </span>
      )}
    </div>
  );
};

export default Logo;
