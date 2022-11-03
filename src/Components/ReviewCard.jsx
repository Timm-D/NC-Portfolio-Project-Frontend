import React from "react";

const ReviewCard = (props) => {
  const { review } = props;

  return (
    <>
      <h4 className="reviewTitle"> {review.title}</h4>
      <img
        className="reviewListTitleImage"
        src={review.review_img_url}
        alt={review.title}
      />
      <p className="reviewBody">{review.review_body}</p>
      <p className="votes">Votes: {review.votes}</p>
      <p className="commentCount">No.Comments: {review.comment_count}</p>
    </>
  );
};

export default ReviewCard;
