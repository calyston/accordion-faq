import React, { useState } from 'react';
import data from './Data';
import SingleQuestion from './Question';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="page-container">
      <img src="./accordion.png" alt="accordion" />
      <h2>Accordion FAQ</h2>
      <article className="info">
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })
        }
      </article>
    </div>
  );
}

export default App;
