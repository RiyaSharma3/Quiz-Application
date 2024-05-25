import React from "react";
import { Link } from "react-router-dom";
import './QuizHome.css'
 
const QuizHome = () => {
  return (
    <div className="container welcome_box">
      <div className="row box">
        <p id="wlcm">Welcome to Quiz!</p>
        <Link to="/questions">
          <button id="startquiz" > <p>START</p></button>
        </Link>
      </div>
    </div>
  ); 
};
 
export default QuizHome;
