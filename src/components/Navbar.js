import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>Trivia!</h1>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/animals"> Animals </Link>
        <Link to="/cartoons"> Cartoons & Animation </Link>
        <Link to="/geography"> Geography </Link>
        <Link to="/history"> History </Link>
        <Link to="/sorts"> Sports </Link>
      </nav>
    </header>
  );
}

export default Navbar;
