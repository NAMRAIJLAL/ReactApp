import React from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const List = ({ movieTitle }) => {
  console.log("movie ID", movieTitle);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(
        `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data, "resp");
      });
  }, []);
  console.log("movie", movie);
  return (
    <div className="Container show mt-2">
      <Card style={{ width: "18rem" }} className=" mt-2 mb-2 flex">
        <Card.Img className="sizeImage" variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>Title : {movie.Title}</Card.Title>
          <Card.Text>Year : {movie.Year}</Card.Text>
          <Card.Text>Type : {movie.Type}</Card.Text>
          <Card.Text>Actors : {movie.Actors}</Card.Text>
          <Card.Text>Awards : {movie.Awards}</Card.Text>
          <Card.Text>Genre : {movie.Genre}</Card.Text>
          <Card.Text>Rated : {movie.Rated}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default List;
