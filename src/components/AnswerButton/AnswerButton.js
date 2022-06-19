import React from "react";
import "./AnswerButton.css";

export default function AnswerButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`answer-button ${props.className}`}
    >
      {props.text}
    </button>
  );
}
