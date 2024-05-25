import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import QuizHome from './components/QuizHome';
import Questions from "./components/Questions";
import Result from "./components/Result";
import App1 from './App1';

export default function App() {
  const [answer, setAnswer] = useState([]);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App1/>}></Route>
        <Route path="/quiz" element={<QuizHome/>}></Route>
        <Route exact path="/questions" element={<Questions answer={answer} setAnswer={setAnswer}/>}/>
        <Route exact path="/solution" element={<Result answer={answer}/>}/>
      </Routes>
    </div>
  )
}
