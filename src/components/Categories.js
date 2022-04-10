import React, { useEffect, useState } from "react";
import axios from "axios";

function Categories(props) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [type, setType] = useState();
  const [mult, setMult] = useState();

  useEffect(() => {
    const getQuest = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=1&category=${props.categoryId}`
      );
      let questType = response.data.results[0].type
      let multChoice = response.data.results[0].incorrect_answers

      if (questType == "boolean") {
        [...questType] = "True or false"
        questType = [...questType]
      } else {
        [...questType] = "Multiple Choice"
        questType = [...questType]
        multChoice = [multChoice] + response.data.results[0].correct_answer
      }

      setQuestion(response.data.results[0].question);
      setAnswer(response.data.results[0].correct_answer);
      setType(questType);
      setMult(multChoice);
      console.log(response.data.results[0]);
    };
    getQuest();
  }, [props.categoryId]);
  if (!question) return <h3> Loading question...</h3>;
  return (
    <div className="question">
      <h3>{question}</h3>
      <h2 className="type">{type}</h2>
      <h2 className="mult">{mult}</h2>
      <h2 className="answer">{answer}</h2>
    </div>
  );
}
export default Categories;
