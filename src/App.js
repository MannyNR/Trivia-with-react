
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="App">
      <Header />
      <Navbar />
    <Routes>
      <Route exact path="/" element={<h2>Trivia Homepage!</h2>} /> 
      <Route path="/animals" element={Categories /> } /> 
    <Route path="/cartoons" element={Categories /> } /> 
    <Route path= "/geography" element={Categories /> } /> 
  <Route path= "/history" element={Categories /> } /> 
  <Route path= "/sports" element={Categories /> } /> 
  </Routes>

    </div>
  )
}

export default App;
