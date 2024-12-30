import { Box } from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // Use null instead of []

  const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDY5ZGI1NTNlOTQyZDZhYjA4ODBhMjMxODZmYzQyMyIsIm5iZiI6MTcxOTMwNjk4MS4xMDU0MzcsInN1YiI6IjY2N2E4NzgwNDZmZmI4YTg5ZDNiNTk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQZzBt-EW2HRH2KaHp33tPU0mfPDFwU7VQvpjy3KTLY";
  // console.log(apiKey);
  const language = "en-US";
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
    params: {
      language: language,
    },
  };

  const getDetails = () => {
    axios
      .get(apiUrl, config)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  useEffect(() => {
    getDetails();
  });
  return (
    <>
      <NavBar />
      <Box>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
            <p>{movie.overview}</p>
            <h4>Release Date : {movie.release_date}</h4>
            {/* Add more details as needed */}
          </>
        ) : (
          <>
            <p>loading....</p>
          </>
        )}
      </Box>
    </>
  );
};

export default Details;
