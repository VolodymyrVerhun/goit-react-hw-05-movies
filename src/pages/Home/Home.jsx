import MovieaList from 'components/MovieaList/MovieaList';
import React, { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/services';
import { HomeStyled } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendMovies()
      .then(setMovies)
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <HomeStyled>Trending today</HomeStyled>
      <MovieaList movies={movies} />
    </div>
  );
}
