import React from "react";
import propTypes from "prop-types";

import "./modal.scss";

export default function Modal(props) {
  const className = ["modal"];
  className.push(props.className);

  return <div className={className.join(" ")}>{props.children}</div>;
}

Modal.propTypes = {
  className: propTypes.string,
};
