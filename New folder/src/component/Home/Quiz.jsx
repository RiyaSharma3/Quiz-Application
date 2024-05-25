import React from 'react';
import reactphoto from './images/reactjs_image.png'
import phyphoto from './images/physic_image.webp'
import mathphoto from './images/math_image.avif'
import geophoto from './images/geography_image.jpg'
import './Quiz.css';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <section className="section-books" id="section-books">
      <div className="books">
        <h2>LIBRARY</h2>

        <div className="box-container1">
          <div className="it">
            <Link to="/quiz"><img src={reactphoto} alt="" className="box" /></Link>
            <Link to="/quiz">ReactJs</Link>
          </div>
          <div className="it">
            <Link to="/quiz"><img src={phyphoto} alt="" className="box" /></Link>
            <Link to="/quiz">Physics</Link>
          </div>
          <div className="it">
            <Link to="/quiz"><img src={mathphoto} alt="" className="box" /></Link>
            <Link to="/quiz">Mathematics</Link>
          </div>
          <div className="it">
            <Link to="/quiz"><img src={geophoto} alt="" className="box" /></Link>
            <Link to="/quiz">Geography</Link>
          </div>               
        </div>
      </div>
    </section>
  );
};

export default Quiz;
