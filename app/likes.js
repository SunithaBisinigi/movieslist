"use client"
import { useState } from 'react'
export function Likes() {
    const [likes, setlikes] = useState(0);
    function likesIncrement() {
       setlikes(likes+1);
    };
    function likesDecrement () {
        setlikes(likes-1);
    };   
    return (
        <>
            <div className="rat">
                <img src="up.png" onClick={likesIncrement()}/>
            </div>
            <div className="rat count">
                <p id="rati"> {likes}</p>
            </div>
            <div className="rat">
                <img src="down.png" onClick={likesDecrement()}/>
            </div> 
        < />
);
}

