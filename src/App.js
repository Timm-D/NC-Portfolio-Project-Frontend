import "./App.css";
import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList"

// import ReviewCard from "./Components/ReviewCard";

function App() {
  const [reviews, setReviews] = useState(null)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ReviewList reviews={reviews} setReviews={setReviews}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
