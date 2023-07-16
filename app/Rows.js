"use client";
import MovieRow from './movie_row.js';
import {useState} from 'react';

let  movies_list= [{
  id: 1, // Used in JSX as a key
  name: 'sunitha 1',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A',
  likes:0
}, {
  id: 2, // Used in JSX as a key
  name: 'sunitha 2',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa',
  likes:0
}, {
  id: 3, // Used in JSX as a key
  name: 'sunitha 3',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji',
  likes:0
}, {
  id: 4, // Used in JSX as a key
  name: 'sunitha 4',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71',
  likes:0
}, {
  id: 5, // Used in JSX as a key
  name: 'sunitha 5',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l',
  likes:0
}];

const Rows = () => {
    const [ movies, setMovies ] = useState( movies_list );
    
    function handleRating( id, votes ) {
       const updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                return { ...movie, likes: votes };
            }
            return movie;
       })
       const sortedMovies = updatedMovies.sort((a, b) => b.likes - a.likes);
       setMovies(sortedMovies);
    }
    
    function handleDelete(movie_id) { 
        const newMovie = movies.filter((item) => movie_id!=item.id);
        setMovies(newMovie);
    } 

    let movie_details = movies.map((one_movie) => 
        <MovieRow
        
            name = {one_movie.name}
            description = {one_movie.accomplishment}
            movie_id={one_movie.id}
            onDelete={() => handleDelete(one_movie.id)} 
            onUpdateRating = {handleRating}
            likes={one_movie.likes}
            
        />
    );
    
    return (
        <>
            {movie_details}
        </>
    )
};

export default Rows;

