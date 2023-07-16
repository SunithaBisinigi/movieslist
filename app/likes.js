"use client"
import { useState } from 'react'
export  function Likes(props) {
    
    let votes=props.likes
    function likesIncrement() {
        votes=votes+1
      };
    function likesDecrement () {
        votes=votes-1
    };   
    return (
        <>
            <div className="rating">
                <img src="up.png" 
                    onClick={() => {
                        likesIncrement()
                        props.onUpdateRating(props.movie_id,votes)
                    }} 
                />
            </div>
            <div className="rating count">
                <p id="rati">{votes}</p>
            </div>
            <div className="rating">
                <img src="down.png" 
                    onClick={() => {
                        likesDecrement();
                        props.onUpdateRating(props.movie_id,votes)
                    }}
                />
            </div> 
        < />
);
}

