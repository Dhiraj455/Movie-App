import React from "react";
import Logo from "../../Assets/logo.png";
import "./Navbar.css";

export const Navbar = ({ searchBox, getMovie }) => {
  const handleChange = (e) => {
    searchBox(e.target.value);
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="&#128269; Search For Movies"
          onChange={handleChange}
          onKeyDown={(e) =>
            e.key === "Enter" ? getMovie() : null
          }
        />
        {/* <button onClick={getMovie} type="submit">
          &#128269;
        </button> */}
      </div>
    </div>
  );
};
