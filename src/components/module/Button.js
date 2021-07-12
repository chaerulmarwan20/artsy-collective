import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = ["btn"];
  className.push(props.className);
  if (props.isPrimary) className.push("btn-primary");
  if (props.isOutline) className.push("btn-outline");
  return (
    <button type={props.type} className={className.join(" ")}>
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
