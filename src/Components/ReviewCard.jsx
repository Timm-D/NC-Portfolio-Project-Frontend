import React from "react";
import {useEffect, useState} from "react"; 

const ReviewCard = (props) => {
    const {review} = props; 
   
    return (
        <>
        <h3>{review.title}</h3>
        <p>{review.review_body}</p>
    
        </>
    )
   //comments etc
}

export default ReviewCard


