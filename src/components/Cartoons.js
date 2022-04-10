import React, { useEffect, useState } from "react";
import axios from "axios";

function Cartoons(props) {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const getQuest = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=1&category=32`
      );
      setQuestion(response.data.data[0]);
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
export default Cartoons;
