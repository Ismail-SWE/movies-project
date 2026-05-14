import "./movie-list.css";

import MovieListItem from '../movie-list-item/movie-list-item';

const MovieList = () => {
  return (
    <div class="movie-list">
        <MovieListItem/>
        <MovieListItem/>
        <MovieListItem/>
        <MovieListItem/>
    </div>
  )
}

export default MovieList;