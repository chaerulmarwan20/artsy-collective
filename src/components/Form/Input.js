import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

import "./form.scss";

export default function Input(props) {
  const inputRef = useRef(null);

  const className = ["form-group"];
  className.push(props.classForm);

  useEffect(() => {
    props.isTodo && inputRef.current.focus();
  });

  if (props.isSingle) {
    return (
      <input
        type={props.type}
        className={props.classInput}
        name={props.name}
        id={props.name}
        value={props.value}
        maxLength={props.max}
        onChange={props.onChange}
        pattern={props.pattern}
        placeholder={props.placeholder}
        ref={inputRef}
      />
    );
  } else if (props.isRow) {
    return (
      <div className="form-item">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          className={props.classInput}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        {props.error && <small>{props.error}</small>}
      </div>
    );
  }

  return (
    <div className={className.join(" ")}>
      <>
        <label htmlFor={props.id || props.name}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.id || props.name}
          placeholder={props.placeholder}
          value={props.value}
          className={props.classInput}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        {props.error && <small>{props.error}</small>}
      </>
    </div>
  );
}

Input.propTypes = {
  onChange: propTypes.func,
  onBlur: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  max: propTypes.number,
  value: propTypes.string,
  pattern: propTypes.string,
  isRow: propTypes.bool,
  isSingle: propTypes.bool,
  isTodo: propTypes.bool,
  error: propTypes.string,
};
