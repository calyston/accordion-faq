import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Question = ({ question, answer }) => {
  return (
    <article className="question">
      <header>
        <h3>{question}</h3>
        <button className="btn"></button>
      </header>
      <p>{answer}</p>
    </article>
  )
}

export default Question;