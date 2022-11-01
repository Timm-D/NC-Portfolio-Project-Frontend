import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList";
import {useState} from "react"

function App() {
  const [reviews, setReviews] = useState()
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ReviewList reviews={reviews} setReviews={setReviews}/>
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
