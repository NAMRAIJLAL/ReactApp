import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import List from "./list";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

import ListGroup from "react-bootstrap/ListGroup";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // console.log(searchInput);
  };

  const handleSearch = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${searchInput}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then((res) => {
        setMovies(res.data.Search);
        console.log(res.data);
      });
  };
  console.log(movies);
  const movieHandler = (movie) => {
    // setSearchInput(movie);
    setMovie(movie);
    console.log(movie.Title, "movie title ");
  };

  return (
    <>
      {!movie && (
        <div className="Container show mt-2">
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
          <button onClick={handleSearch}>Search</button>
          <Container>
            <Row>
              {movies?.map((movie) => (
                <Col>
                  <Card style={{ width: "18rem" }} className=" mt-2 mb-2">
                    <div>
                      <Card.Img
                        className="containerSize"
                        variant="top"
                        src={movie.Poster}
                      />
                    </div>
                    <Card.Body>
                      <div className="size">
                        <Card.Title>{movie.Title}</Card.Title>
                      </div>
                      <Card.Text>{movie.Year}</Card.Text>
                      <Card.Text>{movie.Type}</Card.Text>
                      <button onClick={() => movieHandler(movie)}>
                        Show Detail
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
      {movie && <List movieTitle={movie.Title} />}
    </>
  );
}
