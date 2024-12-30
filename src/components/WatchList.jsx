import {
    Box,
    Button,
    Card,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
    TextField,
  } from "@mui/material";
  import NavBar from "./NavBar";
  import { useEffect, useState } from "react";
  
  const WatchList = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredWatchlist, setFilteredWatchlist] = useState([]);
  
    useEffect(() => {
      const watch = JSON.parse(localStorage.getItem("watchlist")) || [];
      setWatchlist(watch);
      setFilteredWatchlist(watch); 
    }, []);
  
    useEffect(() => {
      // Filter 
      const filtered = watchlist.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredWatchlist(filtered);
    }, [filter, watchlist]);
  
    const handleRemove = (movieID) => {
      const update = watchlist.filter((item) => item.id !== movieID);
      localStorage.setItem("watchlist", JSON.stringify(update));
      setWatchlist(update);
      setFilteredWatchlist(update); // Update filtered list after removal
    };
  
    return (
      <>
        <NavBar />
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            My Watchlist
          </Typography>
        </Box>
        <TextField
          label="Filter by Title"
          variant="outlined"
          fullWidth
          sx={{ margin: "10px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Divider sx={{ marginBottom: "20px", marginTop: "10px" }} />
        <Box>
          {filteredWatchlist.map((movie) => (
            <Box key={movie.id} sx={{ display: "inline-block" }}>
              <Card
                sx={{
                  maxWidth: 500,
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Movie Poster"
                />
                <CardHeader title={movie.title} />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handleRemove(movie.id)}
                >
                  Remove
                </Button>
              </Card>
            </Box>
          ))}
        </Box>
      </>
    );
  };
  
  export default WatchList;
  