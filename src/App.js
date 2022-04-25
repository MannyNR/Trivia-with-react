import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={""} />
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
