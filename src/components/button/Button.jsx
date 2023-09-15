import React from "react";
import "./Button.css";
const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      shopping cart <span>{num}</span> {num <= 0 ? "":"Products"}
    </button>
  );
};

export default Button;
