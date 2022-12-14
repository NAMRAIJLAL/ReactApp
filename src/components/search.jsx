import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "./list";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import PaginationBasic from "./pagination";
import { Container } from "@mui/material";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [type, setType] = useState("");
  const [movieCount, setMovieCount] = useState(null);
  const [page, setPage] = useState(1);
  // const [fromItem, setFromItem] = useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // console.log(searchInput);
  };

  const handleSearch = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${searchInput}&type=${type}&page=${page}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then((res) => {
        setMovies(res.data.Search);
        setMovieCount(res.data.totalResults);
      });
  };

  // console.log(page);
  const movieHandler = (movie) => {
    // setSearchInput(movie);
    setMovie(movie);
    // console.log(movie.Title, "movie title ");
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // console.log("check the type after change", type);
  return (
    <>
      {!movie && (
        <div className="conatiner show mt-2 ml-2">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <div className="text-info">
              Movie
              <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
              />
            </div>
            <div className="slectContainer">
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value={"movie"}>Movie</option>
                <option value={"episode"}>Episode</option>
                <option value={"series"}>Series</option>
              </select>
            </div>
            <div className="flex-container">
              <button onClick={handleSearch}>Search</button>
            </div>
          </Box>
          <div className="container mt-4 ">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {movies?.map((movie) => (
                  <Grid xs={3}>
                    <Item>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader title={movie.Title} />
                        <CardMedia
                          component="img"
                          height="194"
                          image={movie.Poster}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            plot: {movie.Plot}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Year : {movie.Year}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Actors : {movie.Type}
                          </Typography>
                          <button onClick={() => movieHandler(movie)}>
                            Show Detail
                          </button>
                        </CardContent>
                      </Card>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>

          <Box
            sx={{
              borderColor: "error.main",
              // border: 1,
              mt: 2,
              mb: 2,
            }}
          >
            <Container
              sx={{
                justifyContent: "center",
                ml: 50,
              }}
            >
              <PaginationBasic
                movieCount={movieCount}
                page={page}
                setPage={setPage}
                handleSearch={handleSearch}
              />
            </Container>
          </Box>
        </div>
      )}
      {movie && <List movieTitle={movie.Title} />}
    </>
  );
}
