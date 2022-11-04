import React from "react";
import { useEffect, useState } from "react";
import { getAllReviews } from "../utils/ApiRequests";
import CategorySelector from "./CategorySelector";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";


const ReviewList = (props) => {
  const {category: selectedCategory} = useParams();
  const { reviews, setReviews } = props;
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
      SetLoading(true)
    getAllReviews(selectedCategory).then((res) => {
      setReviews(res);
      SetLoading(false);
    });
  }, [selectedCategory]);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
      <CategorySelector />
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
      </>
    );
  }
};
export default ReviewList;
