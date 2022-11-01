import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ReviewList/>
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
