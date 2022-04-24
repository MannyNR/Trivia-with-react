import React, { useEffect, useState } from "react";
import axios from "axios";
// import Buttons from './Buttons'
// import { getQuestions } from "../services/questions.js";

const getQuestions2 = async (id) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${id}`
  );

  return response;
};

function Categories(props) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [type, setType] = useState();
  const [mult, setMult] = useState();

  useEffect(async () => {
    let response = await getQuestions2(props.categoryId);
    console.log("Coming from Categories.js");
    console.log(response.data);
    setQuestion(response.data.results[0].question);
    setAnswer(response.data.correct_answer);
    setType(response.questType);
    setMult(response.multChoice);
    console.log(response.data.results[0]);
  }, [props.categoryId]);

  if (!question) return <h3> Loading question...</h3>;

  return (
    <div className="question">
      <h2 className="type">{type}</h2>
      <h2>{question}</h2>
      <h2 className="mult">{mult}</h2>
      <h2 className="answer">{answer}</h2>
      {/* <button onClick={show}> Show Answer</button>
        <button onClick={refreshComponent} > Next Question
        </button> */}
    </div>
  );
}

export default Categories;