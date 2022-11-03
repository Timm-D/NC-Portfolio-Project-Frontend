import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList";
import CategorySelector from "./Components/CategorySelector";

function App() {
  const [reviews, setReviews] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ReviewList
          selectedCategory={selectedCategory}
          reviews={reviews}
          setReviews={setReviews}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
