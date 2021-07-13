import React from "react";
import propTypes from "prop-types";

export default function InputRadio(props) {
  const className = ["form-group"];
  className.push(props.classForm);

  return (
    <div className={className.join(" ")}>
      {props.list.map((item, index) => {
        return (
          <div className={props.classRadio} key={index}>
            <input
              type="radio"
              name={props.name}
              id={item.id}
              className={props.classInput}
              defaultChecked={item.isChecked && true}
            />
            <label htmlFor={item.id} className={props.classLabel}>
              {item.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

InputRadio.propTypes = {
  onChange: propTypes.func,
  classForm: propTypes.string,
  classRadio: propTypes.string,
  classInput: propTypes.string,
  classLabel: propTypes.string,
  list: propTypes.array,
  name: propTypes.string,
};
