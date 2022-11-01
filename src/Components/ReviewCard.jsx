import React from "react";
import {useEffect, useState} from "react"; 

const ReviewCard = (props) => {
    const {review} = props; 
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(false);
    }, []);


    if(loading) {
        return <p>Loading...</p>
    } else {
        return 
    }
}