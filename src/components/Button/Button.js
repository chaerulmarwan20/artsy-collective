import React from "react";
import propTypes from "prop-types";

import "./button.scss";

export default function Button(props) {
  const className = ["btn"];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isOutline) className.push("btn-outline");
  if (props.isArrow) className.shift();
  className.push(props.className);

  return (
    <button
      type={props.type}
      className={className.join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  type: propTypes.string,
  isPrimary: propTypes.bool,
  isOutline: propTypes.bool,
};
