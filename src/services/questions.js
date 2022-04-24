import axios from "axios";
// import Categories from "../components/Categories";

export const getQuestions = async (id) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${id}`
  );

  let questType = response.data.results[0].type;
  let multChoice = response.data.results[0].incorrect_answers;

  if (questType == "boolean") {
    [...questType] = "True or false";
    questType = [...questType];
    multChoice = null;
  } else {
    [...questType] = "Multiple Choice";
    questType = [...questType];
    multChoice = [multChoice] + "," + response.data.results[0].correct_answer;
  }

  return {
    data: response.data.results[0],
    questType,
    multChoice,
  };
};
