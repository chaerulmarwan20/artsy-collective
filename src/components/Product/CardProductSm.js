import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function CardProductSm(props) {
  return (
    <div className={props.classProduct}>
      <Link
        to={props.href}
        title={props.title}
        className={props.classProductHref}
      >
        <img src={props.img} className="img-block" alt={props.title} />
      </Link>
      <div className={props.classTitle}>
        <Link
          to={props.href}
          className={props.classTitleHref}
          title={props.title}
        >
          {props.title}
        </Link>
      </div>
    </div>
  );
}

CardProductSm.propTypes = {
  classProduct: propTypes.string,
  classTitle: propTypes.string,
  classProductHref: propTypes.string,
  classTitleHref: propTypes.string,
  href: propTypes.string,
  title: propTypes.string,
  img: propTypes.string,
};
