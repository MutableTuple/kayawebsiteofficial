import React from "react";
import "./button.styles.scss";

const Button = ({
  props,
  color,
  width,
  fill = "",
  boxshadow,
  textColor,
  fontSize,
}) => {
  return (
    <div
      className="main-button"
      style={{
        border: `${width}px solid ${color}`,
        backgroundColor: `${fill}`,
        color: `${textColor}`,
        fontSize: `${fontSize}`,
      }}
    >
      {props} &rarr;
    </div>
  );
};

export default Button;
