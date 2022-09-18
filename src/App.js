import React from 'react';
import './style.css';

import MovieList from './movieList';
import { MovieProvider } from './movieContext';
import { Route } from 'react-router-dom';
export default function App() {
  return (
    // <MovieProvider>
    <div>
      <Route path="/">
        <h1>Hello StackBlitz!</h1>
      </Route>
      <Route path="/demo">
        <p>Start editing to see some magic happen :)</p>
        <MovieList />
      </Route>
    </div>
    // </MovieProvider>
  );
}
