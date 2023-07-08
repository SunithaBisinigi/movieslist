"use client"
import { useState } from 'react'
export  function Likes() {
    const [likes, setlikes] = useState(0);
    function likesIncrement() {
       setlikes(likes => likes+1);
    };
    function likesDecrement () {
        setlikes(likes => likes-1);
    };   
    return (
        <>
            <div className="rating">
                <img src="up.png" onClick={() => {
        likesIncrement();}}/>
            </div>
            <div className="rating count">
                <p id="rati">{likes}</p>
            </div>
            <div className="rating">
                <img src="down.png" onClick={() => {
        likesDecrement();}}/>
            </div> 
        < />
);
}

