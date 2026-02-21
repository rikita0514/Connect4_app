import React from "react";
import "../styles/game.css"; // make sure path is correct

const GameCircle = ({ id, children, className = "", onCircleClicked }) => {

  const handleClick = () => {
    if (onCircleClicked) {
      onCircleClicked(id);
    }
  };

  return (
    <div
      className={`gameCircle ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default GameCircle;
