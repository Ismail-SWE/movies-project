import "./movie-list.css";

import MovieListItem from "../movie-list-item/movie-list-item";
import { useContext } from "react";
import { Context } from "../context";
import {filterHandler, searchHandler } from '../../utilities/data'

const MovieList = ({ onDelete, onToggleProp }) => {
  const {state, dispatch} = useContext(Context)

  const data = filterHandler(searchHandler(state.data, state.term), state.filter)

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like = {item.like}
          id = {item.id}
        />
      ))}
    </ul>
  );
};

export default MovieList;



  // bu yerda data bu array of objects, agar har safar data[0].name va hkz
  // deb beradigan bo'lsak bo'lmidi 100 ta bo'lsa 100 ta qilib
  // shunga mapga qo'yamiz har bir aylantirilgan objectdan.name qilib elementni olib qolamiz
  // va boshqa componentga uzatish kerak bo'lsa uzatamiz props orqali olib qolingan narsani