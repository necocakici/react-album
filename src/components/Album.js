import React from "react";
import { Link } from "react-router-dom";

const Album = (props) => {
  console.log(props);
  return (
    <div className="section-center">
      <h1>{props.album.name}</h1>
      <h3>Sanatçı: {props.album.author}</h3>
      <h5>Tür: {props.album.genre}</h5>
      <img
        style={{ height: 400 }}
        src={props.album.image}
        alt={props.album.name}
      />
      <Link to='/'><h3>Geri</h3></Link>
    </div>
  );
};

export default Album;
