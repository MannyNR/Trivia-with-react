import React, { useEffect, useState } from "react";
import axios from "axios";

function History(props) {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const getQuest = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=1&category=23`
      );
      setQuestion(response.data.results[0].question);
      setAnswer(response.data.results[0].correct_answer);
      console.log(response);
    };
    getQuest();
  }, []);
  if (!question) return <h3> Loading question...</h3>;

  return (
    <div className="question">
      {question}
      <h2 className="answer">{question.answer}</h2>
    </div>
  );
}
export default History;
