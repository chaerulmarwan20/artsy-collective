import React from "react";
import propTypes from "prop-types";

import EyeOff from "../../assets/icon/eye-off.svg";

export default function InputPassword(props) {
  const className = ["form-group"];
  className.push(props.classForm);

  return (
    <div className={className.join(" ")}>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <div className="input-password">
        <input
          type="password"
          name={props.name}
          id={props.id || props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={props.classInput}
        />
        <button
          type="button"
          className={props.classButton}
          onClick={props.onClick}
        >
          <img src={EyeOff} alt="Eye Off" />
        </button>
      </div>
      {props.error && <small>{props.error}</small>}
    </div>
  );
}

InputPassword.propTypes = {
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onClick: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  classButton: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  error: propTypes.string,
};
