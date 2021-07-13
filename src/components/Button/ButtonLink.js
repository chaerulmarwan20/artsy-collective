import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function ButtonLink(props) {
  const className = ["btn", "btn-outline"];
  className.push(props.className);
  return (
    <Link to={props.href} className={className.join(" ")} title={props.title}>
      {props.title}
    </Link>
  );
}

ButtonLink.propTypes = {
  href: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
};
