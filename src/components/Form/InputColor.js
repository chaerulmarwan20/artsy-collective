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
        />
        <label
          htmlFor={item.id}
          className="radio-label hover-opacity-primary"
          data-color={item.id}
        ></label>
      </div>
    );
  });
}

InputColor.propTypes = {
  list: propTypes.array,
  classColor: propTypes.string,
  type: propTypes.string,
};
