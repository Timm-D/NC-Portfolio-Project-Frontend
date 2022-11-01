import React from "react";
import {useEffect, useState} from "react"; 

const ReviewCard = (props) => {
    const {review} = props; 
   
    return (
        <>
    
        <h3>{review.title}</h3>
        <img className="reviewListTitleImage" src={review.review_img_url} alt={review.title}/>
        <p>{review.review_body}</p>
        <p>Votes: {review.votes}</p>
        <p>No.Comments: {review.comment_count}</p>
    
        </>
    )
   
}

export default ReviewCard


