import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const apiKey = "7069db553e942d6ab0880a23186fc423";

  const handleSearch = (e) => {
    setInput(e.target.value);
    const query = e.target.value;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=1&query=${query}`;

    axios
      .get(apiUrl)
      .then((res) => {
        setResult(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setResult([]);
      });
  };

  return (
    <Box sx={{ position: "relative", textAlign: "center", marginTop: "20px" }}>
      <SearchIcon sx={{ position: "absolute", left: "160px", top: "50%", transform: "translateY(-50%)" }} />
      <input
        style={{
          border: "2px solid #ccc",
          padding: "10px 10px 10px 30px",
          borderRadius: "5px",
          width: "70%",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        value={input}
        onChange={handleSearch}
        placeholder="Search"
      />
      <ul style={{ listStyle: "none", maxWidth: "50%", margin: "10px auto", padding: "0" }}>
        {result.map((movie, index) => (
          <li
            key={index}
            style={{
              margin: "5px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#eee")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f9f9f9")}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SearchBar;
