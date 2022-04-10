import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header>
      <h1>Welcome to Trivia!</h1>
      <nav>
        <Link to="/"> Home </Link>
      <h3> Select from one of the categories below to start or change into!</h3>
        <Link to="/animals"> Animals </Link>
        <Link to="/cartoons"> Cartoons & Animation </Link>
        <Link to="/geography"> Geography </Link>
        <Link to="/history"> History </Link>
        <Link to="/sports"> Sports </Link>
      </nav>
    </header>
  );
}

export default Navbar;
