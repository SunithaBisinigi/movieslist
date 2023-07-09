"use client";
import MovieRow from './movie_row.js';
import {useState} from 'react';

let  movies_list= [{
  id: 1, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A',
  rating:0
}, {
  id: 2, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa',
  rating:0
}, {
  id: 3, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji',
  rating:0
}, {
  id: 4, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71',
  rating:0
}, {
  id: 5, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l',
  rating:0
}];

const Rows = () => {
    const [movie,setMovie] = useState(movies_list);
    
    function handleDelete(movie_id) { 
        const newMovie = movie.filter((item) => movie_id!=item.id);
        setMovie(newMovie)
    }
    
    const [likes, setLikes] = useState(0);
    
    function likesIncrement() {
       setLikes(likes => likes+1);
    };
    function likesDecrement () {
        setLikes(likes => likes-1);
    };   
    //here added rating update  need to clear it not working....
    function handleRating(id,rating){
        const newMovie = [...movie];
        const movie_rating=newMovie.find(movie => movie.id === id);
        movie.votes = rating;
    }
    function compare (a,b){
        if (a.votes > b.votes) return -1;
        if (a.votes < b.votes) return 1;
        return 0;
    }
    
    let movie_details = movie.map((one_movie) => 
        <MovieRow
            name = {one_movie.name}
            description = {one_movie.accomplishment}
            movie_id={one_movie.id}
            onDelete={() => handleDelete(one_movie.id)} 
            onUpdateRating = { handleRating}
        />
    );
    
    return (
        <>
            {movie_details}
        </>
    )
};

export default Rows;

