import React from "react";
import propTypes from "prop-types";

export default function InputColor(props) {
  return props.list.map((item, index) => {
    return (
      <div className={props.classColor} key={index}>
        <input
          type={props.type}
          className="custom-color"
          name={item.name}
          id={item.id}
          defaultChecked={item.isChecked && true}
          onChange={() => props.isRadio && props.onChange(item.id)}
        />
        <label
          htmlFor={item.id}
          className="radio-label hover-opacity-primary"
        ></label>
      </div>
    );
  });
}

InputColor.propTypes = {
  onChange: propTypes.func,
  list: propTypes.array,
  classColor: propTypes.string,
  type: propTypes.string,
  isRadio: propTypes.bool,
};
