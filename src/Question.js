import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <header>
        <h3>{question}</h3>
        <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showAnswer && <p>{answer}</p>}
    </article>
  )
}

export default Question;