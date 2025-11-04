"use client";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
  delay = 0,
  onClick
}) => {
  const animationDuration = `${speed}s`;
  const animationDelay = `${delay}s`;

  return (
    <div
    onClick={onClick}
      className={`text-transparent bg-clip-text inline-block font-bold ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.1) 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        animationDuration,
        animationDelay,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;