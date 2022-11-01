import React from "react";
import { useEffect, useState } from "react";
import { getAllReviews } from "../utils/ApiRequests";


const ReviewList = (props) => {
    const {reviews, setReviews} = props 
    const [loading, SetLoading] = useState(true)
   
    useEffect(() => {
        getAllReviews("reviews").then((res) => {
            setReviews(res);
            SetLoading(false)

        })
    }, [])

    
}
export default ReviewList