import React from "react";
import propTypes from "prop-types";

export default function InputDate(props) {
  const className = ["form-group"];
  className.push(props.classForm);

  return (
    <div className={className.join(" ")}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-date">
        <input
          type="date"
          name={props.name}
          id={props.name}
          className={props.classInput}
        />
      </div>
      <small>{props.small}</small>
    </div>
  );
}

InputDate.propTypes = {
  onChange: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  small: propTypes.string,
};
