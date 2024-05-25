import React, { useState } from "react";
import QuestionComp from "./QuestionComp";
import question from "./question";
import { Link } from "react-router-dom";
 
const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);
 
  const handleAnswer = (id, ans) => {
    let temp = [...answer]; 
    temp[id] = ans;
    setAnswer([...temp]);
  };
 
  const handleIncrement = () => {
    if (number === 4) {
      alert("This is a Last questions");
      setShow(false)
      return;
    }
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };
 
  return (
    <div className="container mb-5">
      <div className="row"> 
        <div className="col-12"> 
          <QuestionComp question={question[number]} handleAnswer={handleAnswer} />
          <div className="buttons">
          <button id="prev" onClick={handleDecrement}> Prev</button>
          {show ? (
            <button id="next" onClick={handleIncrement}> Next</button>
          ) : (
            <Link to="/solution">
              <button id="submit">SUBMIT</button>
            </Link>
          )}
          </div>
        </div> 
      </div>
    </div>
  );
};
 
export default Questions;