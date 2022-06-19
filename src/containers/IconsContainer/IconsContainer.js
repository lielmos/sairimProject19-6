import React from "react";
import "./IconsContainer.css";

export default function OpeningPage(props) {
  return (
    <div
      className={
        props.classNameIconsContainer === "explanation-page-icons-container"
          ? "explanation-page-icons-container"
          : "icons-container"
      }
    >
      <div className={`round-symbol ${props.classNameRoundSymbol}`}></div>
      <div className={`symbol ${props.classNameSymbol}`}></div>
    </div>
  );
}
