import React from "react";
import Slider from "react-slick";
import propTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.scss";

import Button from "../Button/Button";

import ArrowLeft from "../../assets/icon/arrow-left.svg";
import ArrowRight from "../../assets/icon/arrow-right.svg";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      type="button"
      className="arrow-left-slick hover-opacity-secondary"
      onClick={onClick}
      isSmall
    >
      <img src={ArrowLeft} className="img-block" alt="Arrow Left" />
    </Button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      type="button"
      className="arrow-right-slick hover-opacity-secondary"
      onClick={onClick}
      isSmall
    >
      <img src={ArrowRight} className="img-block" alt="Arrow Right" />
    </Button>
  );
};

export default function Carousel(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return (
        <div className="img-slick-nav hover-opacity-primary" role="button">
          <img
            src={props.list[i].img}
            className="img-block"
            alt={props.list[i].title}
          />
        </div>
      );
    },
  };

  return (
    <Slider {...settings} className="carousel">
      {props.list.map((item, index) => {
        return (
          <div className="carousel-item" key={index}>
            <img src={item.img} className="img-block" alt={item.title} />
          </div>
        );
      })}
    </Slider>
  );
}

Carousel.propTypes = {
  list: propTypes.array,
};
