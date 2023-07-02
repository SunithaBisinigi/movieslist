//import { useState } from 'react'
export function Likes() {
    /*const [likes, setlikes] = useState(0);
    function likeIncrement() {
       setlikes(likes+1);
    };
    function likesDecrement () {
        setlikes(likes-1);
    };   */
    let rating=0
    return (
  <>
    <div className="rat">
        <img src="up.png"/>
    </div>
    <div className="rat count">
       <p id="rati"> {rating}</p>
    </div>
    <div className="rat">
        <img src="down.png"/>
    </div> 
 < />
);
}

