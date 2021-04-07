import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  CarouselContainer,
  Slide,
  LeftBtn,
  RightBtn,
} from "./CarouselStyles.js";

// button Icons:
import leftArrow from "../../../assets/CarouselIcons/leftArrow.png";
import rightArrow from "../../../assets/CarouselIcons/rightArrow.png";

/**
 * @function Carousel - returns React Component
 * @param {props} sliderArr - an array of objects containing <ImgContainer src={image} /> from reusable components.
 * returns - React Carousel Component with rendering images
 */
const Carousel = ({ sliderArr }) => {
  const [x, setX] = useState(0);

  const xRef = useRef();
  xRef.current = x;

  /**
   * @callback position - In useEffect, variable called `position` is the algorithm needed for the carousel to iterate through
   * each photo in the slideArr.
   */
  useEffect(() => {
    const position = setInterval(() => {
      xRef.current <= -100 * (sliderArr.length - 1)
        ? setX((xRef.current = 0))
        : setX(xRef.current + -100);
    }, 5000);
    return () => clearInterval(position);
  }, [sliderArr.length]);

  /**
   * @function goLeft - iterates state index position x to the image in the previous index of slideArr
   */
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  /**
   * @function goLeft - iterates state index position x to the image in the next index of slideArr
   */
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <CarouselContainer>
      {sliderArr.length > 0
        ? sliderArr.map((item, index) => {
            return (
              <Slide
                data-test="Images"
                key={index}
                style={{ transform: `translateX(${x}%)` }}
              >
                {item}
              </Slide>
            );
          })
        : null}
      <LeftBtn
        data-test="carousel-buttons"
        src={leftArrow}
        className="leftBtn"
        onClick={goLeft}
        alt="left carousel button"
      />
      <RightBtn
        data-test="carousel-buttons"
        src={rightArrow}
        className="rightBtn"
        onClick={goRight}
        alt="right carousel button"
      />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  sliderArr: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel;
