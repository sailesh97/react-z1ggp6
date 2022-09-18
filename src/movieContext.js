import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: 'batman',
      year: 2010,
    },
    {
      name: 'superman',
      year: 2015,
    },
    {
      name: 'wonderwoman',
      year: 2030,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
