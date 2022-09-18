import React, { useContext } from 'react';
import { MovieContext } from './movieContext';
const MovieList = () => {
  // const [movies, setMovies] = useContext(MovieContext);
  return (
    <MovieContext.Consumer>
      {(ctx) => {
        return (
          <div>
            {console.log(ctx[0])}
            {ctx[0].map((movie) => (
              <div> {movie.name} </div>
            ))}
          </div>
        );
      }}
    </MovieContext.Consumer>
  );
};
export default MovieList;
