import MovieaList from 'components/MovieaList/MovieaList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/services';
import {
  MoviesSearchBtn,
  MoviesSearchForme,
  MoviesSearchInput,
  MoviesTitle,
} from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();

  const filmQuery = query.get('query');
  console.log('query', filmQuery);
  useEffect(() => {
    if (filmQuery) {
      getMoviesByQuery(filmQuery)
        .then(setMovies)
        .catch(error => console.log(error));
    }
  }, [filmQuery]);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery({ query: event.target.elements.query.value });
  }

  return (
    <div>
      <MoviesTitle>Search movie</MoviesTitle>
      <MoviesSearchForme onSubmit={handleSubmit}>
        <MoviesSearchInput type="text" name="query" required />
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesSearchForme>
      <MovieaList movies={movies} />
    </div>
  );
}
