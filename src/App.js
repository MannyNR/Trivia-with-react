import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getQuestions } from "./services/questions.js";
// import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import "./index.css";
import "./App.css";

function App() {
  const [animals, setAnimals] = useState([]);
  const [cartoons, setCartoons] = useState([]);
  const [geography, setGeography] = useState([]);
  const [history, setHistory] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let animalsData = await getQuestions(27);
      let cartoonsData = await getQuestions(32);
      let geographyData = await getQuestions(22);
      let historyData = await getQuestions(23);
      let sportsData = await getQuestions(21);
      setAnimals(animalsData);
      setCartoons(cartoonsData);
      setGeography(geographyData);
      setHistory(historyData);
      setSports(sportsData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/animals" element={<Categories categoryId="27" />} />
        <Route path="/cartoons" element={<Categories categoryId="32" />} />
        <Route path="/geography" element={<Categories categoryId="22" />} />
        <Route path="/history" element={<Categories categoryId="23" />} />
        <Route path="/sports" element={<Categories categoryId="21" />} />
      </Routes>
    </div>
  );
}
export default App;
