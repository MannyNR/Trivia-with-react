import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <header>
      <h1>Welcome to Trivia!</h1>
      <h4> Select from one of the categories below to start or change into!</h4>
      <nav>
        <h2> [ </h2> <Link to="/animals"> Animals</Link>
        <h3> , </h3>
        <h3> </h3> <Link to="/cartoons">Cartoons & Animation</Link>
        <h3> , </h3>
        <h3> </h3> <Link to="/geography">Geography</Link>
        <h3> , </h3>
        <h3> </h3> <Link to="/history">History</Link>
        <h3> , </h3>
        <h3> </h3> <Link to="/sports">Sports</Link>
        <h2> ] </h2>
      </nav>
    </header>
  );
}

export default Home