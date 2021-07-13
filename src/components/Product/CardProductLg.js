import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function CardProductLg(props) {
  return (
    <div className={props.classProduct}>
      <div className={props.classImg}>
        <img src={props.img} className="img-block" alt={props.title} />
      </div>
      <div className={props.classDetail}>
        <p className="font-bold">{props.title}</p>
        <span>{props.desc}</span>
        <Link
          to={props.href}
          className="font-semi-bold hover-color-secondary"
          title={props.title}
        >
          {props.link}
        </Link>
      </div>
    </div>
  );
}

CardProductLg.propTypes = {
  classProduct: propTypes.string,
  classImg: propTypes.string,
  classDetail: propTypes.string,
  desc: propTypes.string,
  title: propTypes.string,
  href: propTypes.string,
  link: propTypes.string,
};
