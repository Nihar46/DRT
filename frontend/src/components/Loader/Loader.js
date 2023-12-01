import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Loader.css";
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="loader-container">
      {/* <div className="loader"></div> */}
      <span>
        <CircularProgress color="primary" />
      </span>
      {/* <span>Loading</span> */}
    </div>
  );
};

export default Loader;
