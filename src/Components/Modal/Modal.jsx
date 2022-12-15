import React from "react";
import "./modal.css";

const Modal = ({
  setShowModal,
  poster,
  overview,
  vote_count,
  release_date,
  title,
  vote_average,
}) => {
  let date = new Date(release_date).toDateString().slice(4);
  var image_url = "https://image.tmdb.org/t/p/w500/" + poster;
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <div className="top">
          <h6>{title}</h6>
          <button
            onClick={() => {
              console.log("clicked");
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal__body">
          <div className="left">
            <img src={image_url} alt="" />
          </div>
          <div className="right">
            <h5>
              Release Date: <span>{date}</span>
            </h5>
            <p>{overview}</p>
            <h5>
              {vote_average} <span>/ 10 ({vote_count} Total Votes)</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
