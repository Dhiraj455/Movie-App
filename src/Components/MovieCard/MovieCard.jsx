import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./MovieCard.css";

const MovieCard = ({
  original_title,
  poster_path,
  overview,
  vote_count,
  release_date,
  vote_average,
}) => {
  const [showModal, setShowModal] = useState(false);
  var image_url = "https://image.tmdb.org/t/p/w500/" + poster_path;
  return (
    <div className="MovieCard">
      <div
        className="poster"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src={image_url} alt="" />
        <div className="avg">
          <p>{vote_average}</p>
        </div>
        <h2>{original_title}</h2>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          overview={overview}
          vote_count={vote_count}
          release_date={release_date}
          poster={poster_path}
          title={original_title}
          vote_average={vote_average}
        />
      )}
    </div>
  );
};

export default MovieCard;
