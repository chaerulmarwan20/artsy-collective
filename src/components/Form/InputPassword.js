import React from "react";
import propTypes from "prop-types";

import EyeOff from "../../assets/icon/eye-off.svg";

export default function InputPassword(props) {
  const className = ["form-group"];
  className.push(props.classForm);

  return (
    <div className={className.join(" ")}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-password">
        <input
          type="password"
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
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
      <small>{props.small}</small>
    </div>
  );
}

InputPassword.propTypes = {
  onChange: propTypes.func,
  onClick: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  classButton: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  small: propTypes.string,
};
