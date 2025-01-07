import React from "react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyWidget: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): false => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/k-raspail971/60min",
    });
    return false;
  };

  return (
    <a href="#" onClick={handleClick}>
      Planifier du temps avec moi
    </a>
  );
};

export default CalendlyWidget;
