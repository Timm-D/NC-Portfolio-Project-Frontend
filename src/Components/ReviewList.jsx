import React from "react";
import { useEffect, useState } from "react";
import { getAllReviews } from "../utils/ApiRequests";


const ReviewList = (props) => {
    const {reviews, setReviews} = props;
    console.log(reviews)
    const [loading, SetLoading] = useState(true)
   
    useEffect(() => {
        getAllReviews("reviews").then((res) => {
            setReviews(res);
            SetLoading(false)

        })
    }, [])
if (loading) {
    return <p>Loading...</p>;
}   else { 
    return (
        <ul>
            {reviews.map((rev) => {
                return (
                    <li className="Review">{rev.title}</li>

                )
            })}
        </ul>
    )
}
    
}
export default ReviewList