import React from "react";
import propTypes from "prop-types";

import "./carousel.scss";

export default function Carousel(props) {
  return (
    <div className="carousel">
      {props.list.map((item, index) => {
        return (
          <div className="carousel-item" key={index}>
            <img src={item.img} className="img-block" alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}

Carousel.propTypes = {
  list: propTypes.array,
};
