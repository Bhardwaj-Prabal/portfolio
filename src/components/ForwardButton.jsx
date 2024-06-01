import React from "react";
import "./ForwardButton.css";

const ForwardButton = ({ href, label, icon }) => {
  return (
    <a href={href} className="button">
      <p>{label}</p>
      <span className="logo" dangerouslySetInnerHTML={{ __html: icon }} />
    </a>
  );
};

export default ForwardButton;
