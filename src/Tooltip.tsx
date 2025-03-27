import './tooltip.css';

// src/Tooltip.tsx
import React, { ReactNode, useEffect, useRef, useState } from 'react';

// Định nghĩa kiểu dữ liệu cho TooltipProps
type TooltipProps = {
  text: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  delay?: number;
  trigger?: "hover" | "click" | "focus";
  style?: React.CSSProperties;
};

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
  delay = 200,
  trigger = "hover",
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  const handleInteraction = (state: boolean) => {
    if (trigger === "hover") {
      state ? showTooltip() : hideTooltip();
    } else if (trigger === "click") {
      setVisible((prev) => !prev);
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => trigger === "hover" && handleInteraction(true)}
      onMouseLeave={() => trigger === "hover" && handleInteraction(false)}
      onClick={() => trigger === "click" && handleInteraction(true)}
      onFocus={() => trigger === "focus" && handleInteraction(true)}
      onBlur={() => trigger === "focus" && handleInteraction(false)}
    >
      {children}
      {visible && (
        <span className={`tooltip-text tooltip-${position}`} style={style}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
