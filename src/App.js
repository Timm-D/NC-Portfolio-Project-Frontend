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
        <Routes>
          <Route
            path="/all_reviews/:category"
            element={<ReviewList reviews={reviews} setReviews={setReviews} />}
          ></Route>
          <Route
            path="/"
            element={
              <ReviewList
                selectedCategory={selectedCategory}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>

        {/* <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} */}
        {/* /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
