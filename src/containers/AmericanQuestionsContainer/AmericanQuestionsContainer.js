import React from "react";
import "./AmericanQuestionsContainer.css";
import QuestionButton from "../../components/QuestionButton/QuestionButton";
import data from "../../data.json";

export default function AmericanQuestionsContainer(props) {
  const PressQuestionBtn = (event) => {
    if (
      data[props.useCurrQuestion].rightAnswerIndex == event.currentTarget.id
    ) {
      props.setIsAnswerRight(true);
    } else {
      props.setIsAnswerRight(false);
    }
    props.setlastBtnQuetionPressedId(event.currentTarget.id);
  };

  return (
    <div className="american-questions-container">
      {props.useCurrQuestion <= 8
        ? data[props.useCurrQuestion].answers.map((answer, index) => {
            return (
              <QuestionButton
                key={index}
                id={index}
                answerText={answer}
                PressQuestionBtn={PressQuestionBtn}
                isAnswerRight={props.isAnswerRight}
                lastBtnQuetionPressedId={props.lastBtnQuetionPressedId}
                useCurrQuestion={props.useCurrQuestion}
              ></QuestionButton>
            );
          })
        : undefined}
    </div>
  );
}
