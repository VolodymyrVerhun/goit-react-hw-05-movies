import MovieListItem from 'components/MovieListItem/MovieListItem';
import React from 'react';
import { MovieListStyled } from './MovieaList.styled';

export default function MovieaList({ movies }) {
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieListItem
          key={movie.id}
          title={movie.original_title}
          id={movie.id}
        />
      ))}
    </MovieListStyled>
  );
}
