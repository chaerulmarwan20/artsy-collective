import React from "react";
import propTypes from "prop-types";

import "./form.scss";

export default function Input(props) {
  const className = ["form-group"];
  className.push(props.classForm);

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
  isRow: propTypes.bool,
};
