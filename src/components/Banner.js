import React from "react";
import Button from "./Button";
import "../css/Banner.css";

function Banner({ title, description }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button type="primary" text="Learn More" />
      <Button type="secondary" text="Get Started" />
    </div>
  );
}

export default Banner;