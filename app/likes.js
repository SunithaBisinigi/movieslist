//import { useState } from 'react'
export function Likes() {
    /*const [likes, setlikes] = useState(0);
    function likeIncrement() {
       setlikes(likes+1);
    };
    function likesDecrement () {
        setlikes(likes-1);
    };   */
    return (
       <>
            <img src="up.png" id="up" onclick="likeIncrement()/" />
            <p>100</p>
            <img src="down.png" id="down" onclick="likeDecrement()/" />
        </>

     );
};

