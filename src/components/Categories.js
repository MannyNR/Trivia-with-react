import React, { useEffect, useState } from "react";
import axios from "axios";

function Categories(props) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [type, setType] = useState();
  const [mult, setMult] = useState();
  const [show, setShow] = useState();

  useEffect(() => {
    const getQuest = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=1&category=${props.categoryId}`
      );
      let questType = response.data.results[0].type;
      let multChoice = response.data.results[0].incorrect_answers;

      if (questType === "boolean") {
        [...questType] = "True or false";
        questType = [...questType];
        multChoice = "";
      } else {
        [...questType] = "Multiple Choice";
        questType = [...questType];
        multChoice =
          [...multChoice] + "," + response.data.results[0].correct_answer;
      }

      setQuestion(response.data.results[0].question);
      setShow(false);
      setAnswer(response.data.results[0].correct_answer);
      setType(questType);
      setMult(multChoice);
      // console.log(response.data.results[0]);
    };
    getQuest();
  }, [props.categoryId]);
  if (!question) return <h3> Loading question...</h3>;

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="question">
      <br />
      <h4 className="type">Question Type: {type}</h4>
      <h3>{question}</h3>
      <br />
      <h3 className="mult">{mult}</h3>
      <br />
      <div className="buttons">
        <button onClick={() => setShow(!show)}>Show Answer</button>
        {show ? <h2 className="answer red">{answer}</h2> : null}
        <button onClick={refresh}>Next Question</button>
      </div>
    </div>
  );
}
export default Categories;
