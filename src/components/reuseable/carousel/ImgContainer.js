import React from "react";
import PropTypes from "prop-types";

const ImgContainer = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "500px",
  };

  return (
    <>
      {src !== undefined && typeof src === "string" ? (
        <img
          data-test="carousel-image"
          src={src}
          alt="slide-img"
          style={imgStyles}
        />
      ) : null}
    </>
  );
};

ImgContainer.propTypes = {
  src: PropTypes.string,
};

export default ImgContainer;
