import "./App.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard/MovieCard";
// import Logo from "../src/Assets/logo.png";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [header, setHeader] = useState("Most Recent Movies");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  const getMovie = () => {
    if(search === ""){
      setHeader("Most Recent Movies");
      return 0;
    }
    var movie_api = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&query=${search}`;
    fetch(movie_api, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MOVIEDB_ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
    setHeader(`Search Results for "${search}"`);
  };

  useEffect(() => {
    var movie_api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
    const getMovie = () => {
      fetch(movie_api, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MOVIEDB_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovie(data.results);
        });
    };
    getMovie();
  }, [header]);

  return (
    <div className="App">
      <Navbar searchBox={setSearch} getMovie={getMovie}/>
      <div className="data">
        <hr />
        <h1>{header}</h1>
        <div className="movie_grid">
          {movie.map((movie, key) => (
            <MovieCard key={key} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
