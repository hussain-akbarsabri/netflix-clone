import "./styles/Banner.css";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Requests from "./../components/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getRandomMovie();
  }, []);

  const getRandomMovie = async () => {
    const response = await axios.get(Requests.fetchNetflixOriginals);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * (response.data.results.length - 1))
      ]
    );
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner-fadeBottom"></div>
      </div>
    </header>
  );
};

export default Banner;
