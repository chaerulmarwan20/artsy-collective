import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function CardProductHome(props) {
  return (
    <div className={props.classProduct}>
      {props.isSmall ? (
        <Link
          to={props.href}
          title={props.title}
          className={props.classProductHref}
        >
          <img src={props.img} className="img-block" alt={props.title} />
        </Link>
      ) : (
        <div className={props.classImg}>
          <img src={props.img} className="img-block" alt={props.title} />
        </div>
      )}
      {props.isSmall ? (
        <div className={props.classTitle}>
          <Link
            to={props.href}
            className={props.classTitleHref}
            title={props.title}
          >
            {props.title}
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
}

CardProductHome.propTypes = {
  classProduct: propTypes.string,
  classTitle: propTypes.string,
  classProductHref: propTypes.string,
  classTitleHref: propTypes.string,
  classImg: propTypes.string,
  classDetail: propTypes.string,
  href: propTypes.string,
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
  link: propTypes.string,
  isSmall: propTypes.bool,
};
