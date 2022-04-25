import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header>
      <h1>Welcome to Trivia!</h1>
      <Link to="/"> Home </Link>
      <h4> Select from one of the categories below to start or change into!</h4>
      <nav>
      <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/">
            Home
          </NavLink>
        <br />
        <h3>
          Select from one of the categories below to start or change into!
        </h3>
        <br />
        <h2> [ </h2> <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/animals"> Animals</NavLink>
        <h3> , </h3>
        <h3> </h3> <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/cartoons">Cartoons & Animation</NavLink>
        <h3> , </h3>
        <h3> </h3> <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/geography">Geography</NavLink>
        <h3> , </h3>
        <h3> </h3> <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/history">History</NavLink>
        <h3> , </h3>
        <h3> </h3> <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/sports">Sports</NavLink>

        <h2> ] </h2>
      </nav>
    </header>
  );
}

export default Navbar;
