import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Question = ({ question, answer }) => {
  return (
    <article className="question">
      <h3>{question}</h3>
      <button className="btn"></button>
    </article>
  )
}

export default Question;