import React from "react";
import { useEffect, useState } from "react";
import { getAllReviews } from "../utils/ApiRequests";
import ReviewCard from "./ReviewCard";

const ReviewList = (props) => {
  const { reviews, setReviews } = props;
  const { selectedCategory } = props;
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    getAllReviews(selectedCategory).then((res) => {
      setReviews(res);
      SetLoading(false);
    });
  }, [selectedCategory]);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    );
  }
};
export default ReviewList;
