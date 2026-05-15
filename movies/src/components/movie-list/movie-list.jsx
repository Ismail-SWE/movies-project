import "./movie-list.css";

import MovieListItem from '../movie-list-item/movie-list-item';

const MovieList = ({data}) => {

  // bu yerda data bu array of objects, agar har safar data[0].name va hkz
  // deb beradigan bo'lsak bo'lmidi 100 ta bo'lsa 100 ta qilib
  // shunga mapga qo'yamiz har bir aylantirilgan objectdan.name qilib elementni olib qolamiz
  // va boshqa componentga uzatish kerak bo'lsa uzatamiz props orqali olib qolingan narsani
  return (
    <ul class="movie-list">
      {data.map(item => (
         <MovieListItem key={item.id} name={item.name} viewers = {item.viewers} favourite = {item.favourite} />
      ))}
    </ul>
  )
}

export default MovieList;


 