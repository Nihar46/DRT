import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* <div className="loader"></div> */}

      <span>
        <FontAwesomeIcon icon={faX} size="2xl" beatFade />
      </span>
      {/* <span>Loading</span> */}
    </div>
  );
};

export default Loader;
