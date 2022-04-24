import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getQuestions2 from "./components/Categories";
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
      // let animalsData = await getQuestions2(27);
      // let cartoonsData = await getQuestions2(32);
      // let geographyData = await getQuestions2(22);
      // let historyData = await getQuestions2(23);
      // let sportsData = await getQuestions2(21);
      const test = await getQuestions2();
      setAnimals(test);
      setCartoons(test);
      setGeography(test);
      setHistory(test);
      setSports(test);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route
          path="/animals"
          element={<Categories categoryId="27" animals={animals} />}
        />
        <Route
          path="/cartoons"
          element={<Categories categoryId="32" cartoons={cartoons} />}
        />
        <Route
          path="/geography"
          element={<Categories categoryId="22" geography={geography} />}
        />
        <Route
          path="/history"
          element={<Categories categoryId="23" history={history} />}
        />
        <Route
          path="/sports"
          element={<Categories categoryId="21" sports={sports} />}
        />
      </Routes>
    </div>
  );
}
export default App;
