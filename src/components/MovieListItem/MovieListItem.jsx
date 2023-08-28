import { MovieItemStyled } from 'components/MovieaList/MovieaList.styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MovieListItem({ title, id }) {
  const location = useLocation();
  return (
    <div>
      <MovieItemStyled to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </MovieItemStyled>
    </div>
  );
}
