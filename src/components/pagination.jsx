import React, { Component, useState } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationBasic = ({ movieCount, page, setPage, handleSearch }) => {
  const selectPage = (props) => {
    console.log(props.target.innerText);
    setPage(props.target.innerText);
  };
  console.log(page);
  return (
    <>
      <Pagination
        onClick={selectPage}
        count={movieCount}
        variant="outlined"
        color="warning"
      />
    </>
  );
};

export default PaginationBasic;
