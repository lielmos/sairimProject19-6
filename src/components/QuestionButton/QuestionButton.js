import React from "react";
import "./QuestionButton.css";
import data from "../../data.json";

export default function QuestionButton(props) {
  return (
    <button
      className={`question-button question-${
        data[props.useCurrQuestion].questionId
      } ${
        props.lastBtnQuetionPressedId == props.id &&
        (props.isAnswerRight
          ? "right-answer-background-color"
          : "wrong-answer-background-color")
      }`}
      id={props.id}
      onClick={
        props.isAnswerRight !== true ? props.PressQuestionBtn : undefined
      }
    >
      {props.answerText}
    </button>
  );
}
