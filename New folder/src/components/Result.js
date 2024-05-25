import React from "react";
import { Link } from "react-router-dom";
import question from "./question";
 
const Result = ({ answer }) => {
  function giveResult() {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (answer[i] === question[i].ans) cnt++;
    }
    return cnt;
  }
 
  return (
    <div className="container welcome_box">
      <div className="row box">
        <p id="score">You Scored {giveResult()} / 5</p>
        <Link to="/">
          <button id="home">HOME</button>
        </Link>
      </div>
    </div>
  );
};
 
export default Result;