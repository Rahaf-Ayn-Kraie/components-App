import React from "react";
import "../css/Button.css";

function Button({ type, text }) {
  const className = type === "primary" ? "btn primary" : "btn secondary";
  return <button className={className}>{text}</button>;
}

export default Button;