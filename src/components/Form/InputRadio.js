import React from "react";
import propTypes from "prop-types";

export default function InputRadio(props) {
  const className = ["form-group"];
  className.push(props.classForm);

  if (props.isSingle) {
    return (
      <div className={props.classRadio}>
        <input
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          className={props.classInput}
          onChange={props.onChange}
          checked={props.isChecked}
        />
        <label htmlFor={props.id} className={props.classLabel}>
          {props.label}
        </label>
      </div>
    );
  }

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
  id: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  isSingle: propTypes.bool,
  isChecked: propTypes.bool,
};
