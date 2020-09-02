import React, { useState } from "react";
import { number, string } from "prop-types";

import "./ellipsis.css";

const Ellipsis = ({ text, charLimit }) => {
  const [showFull, setShowFull] = useState(false);
  let content = text ? `${text.split("").slice(0, charLimit).join("")}...` : "";
  if (showFull) {
    content = text;
  }
  return (
    <div className="ellipsis-container">
      <div className="ellipsis-text ellipsis-content">{content}</div>
      <div
        className="ellipsis-action ellipsis-content"
        onClick={() => {
          setShowFull(!showFull);
        }}
      >
        {showFull ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

Ellipsis.propTypes = {
  text: string,
  charLimit: number,
};

Ellipsis.default = {
  text: "",
  charLimit: 60,
};

export default Ellipsis;
