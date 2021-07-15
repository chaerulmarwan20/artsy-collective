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
  }

  return (
    <div className={className.join(" ")}>
      {props.isRow ? (
        props.list.map((item, index) => {
          return (
            <div className="form-item" key={index}>
              <label htmlFor={item.name}>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                placeholder={item.placeholder}
              />
              <small>{item.small}</small>
            </div>
          );
        })
      ) : (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            className={props.classInput}
          />
          <small>{props.small}</small>
        </>
      )}
    </div>
  );
}

Input.propTypes = {
  onChange: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  small: propTypes.string,
  list: propTypes.array,
  max: propTypes.number,
  value: propTypes.string,
  pattern: propTypes.string,
  isRow: propTypes.bool,
  isSingle: propTypes.bool,
  isTodo: propTypes.bool,
};
