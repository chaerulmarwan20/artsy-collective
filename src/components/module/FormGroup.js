import React from "react";
import propTypes from "prop-types";

import EyeOff from "../../assets/icon/eye-off.svg";

export default function FormGroup(props) {
  const className = ["form-group"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      <label htmlFor={props.name}>{props.label}</label>
      {props.isPassword ? (
        <>
          <div className="input-password">
            <input
              type={props.type}
              name={props.name}
              id={props.name}
              placeholder={props.placeholder}
              className={props.classInput}
            />
            <button type="button" className={props.classBtn}>
              <img src={EyeOff} alt="Eye Off" />
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            className={props.classInput}
          />
        </>
      )}
      <small>{props.small}</small>
    </div>
  );
}

FormGroup.propTypes = {
  onChange: propTypes.func,
  className: propTypes.string,
  classInput: propTypes.string,
  classBtn: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  small: propTypes.string,
  isPassword: propTypes.bool,
};
