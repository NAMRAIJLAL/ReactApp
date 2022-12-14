import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const List = ({ movieTitle }) => {
  console.log("movie ID", movieTitle);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(
        `http://www.omdbapi.com/?t=${movieTitle}&plot=short&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data, "resp");
      });
  }, []);
  // console.log("movie", movie);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container sx={{ ml: 60, mt: 5 }}>
      <Card sx={{ maxWidth: 345 }}>
        <Item>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <CardHeader title={movie.Title} />
          </Box>

          <CardMedia component="img" height="194" image={movie.Poster} />
          <CardContent>
            <Typography variant="body2" color="text.secondary ">
              <Box sx={{ textAlign: "justify", m: 1, fontWeight: "bold" }}>
                Plot: {movie.Plot}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box sx={{ textAlign: "justify", m: 1 }}>Year : {movie.Year}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box sx={{ textAlign: "justify", m: 1 }}>
                {" "}
                Actors : {movie.Actors}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box sx={{ textAlign: "justify", m: 1 }}>
                Genre : {movie.Genre}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box sx={{ textAlign: "justify", m: 1 }}>
                Rated : {movie.Rated}
              </Box>
            </Typography>
          </CardContent>
        </Item>
      </Card>
    </Container>
  );
};
export default List;
