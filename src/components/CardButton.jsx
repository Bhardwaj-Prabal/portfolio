import React from "react";
import "./CardButton.css"; // Import the CSS file

const CardButton = ({ href, label }) => {
  return (
    <a href={href} className="button" target="_blank" rel="noopener noreferrer">
      <p>{label}</p>
    </a>
  );
};

export default CardButton;
