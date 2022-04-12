import React, { useEffect, useState } from "react";
import axios from "axios";

// import { getQuestions } from "../services/questions.js";

const getQuestions = async (id) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${id}`
  );

  return response;
};

function Categories(props) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [type, setType] = useState();
  const [mult, setMult] = useState();

  useEffect(async () => {
    let response = await getQuestions(props.categoryId);
    console.log(response.data.results, "here");
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
      <h1>{question}</h1>
      <h2 className="mult">{mult}</h2>
      <h2 className="answer hidden">{answer}</h2>
      {/* <button onClick={handleToggle}>Show Answer</button> */}
    </div>
  );
}

export default Categories;
