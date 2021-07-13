import React from "react";
import propTypes from "prop-types";
import parse from "html-react-parser";

export default function InputCheckbox(props) {
  const classForm = ["form-group"];
  const classInput = ["custom-check"];
  const classLabel = ["label-check"];
  classForm.push(props.classForm);
  classInput.push(props.classInput);
  classLabel.push(props.classLabel);

  return props.isAuth ? (
    <div className={classForm.join(" ")}>
      {props.list.map((item, index) => {
        return (
          <div className={props.classCheckbox} key={index}>
            <input
              type="checkbox"
              className={classInput.join(" ")}
              name={item.name}
              id={item.name}
            />
            <label htmlFor={item.name} className={classLabel.join(" ")}></label>
            <label htmlFor={item.name} className={item.class}>
              {parse(item.label)}
            </label>
          </div>
        );
      })}
    </div>
  ) : (
    props.list.map((item, index) => {
      if (classLabel[classLabel.length - 1] === "transform-check")
        classLabel.pop();
      if (item.class) classLabel.push(item.class);
      return (
        <div className={props.classCheckbox} key={index}>
          <input
            type="checkbox"
            className={classInput.join(" ")}
            name={item.name}
            id={item.name}
          />
          <label htmlFor={item.name} className={classLabel.join(" ")}>
            <span>{item.label}</span>
          </label>
        </div>
      );
    })
  );
}

InputCheckbox.propTypes = {
  onChange: propTypes.func,
  classForm: propTypes.string,
  classCheckbox: propTypes.string,
  classInput: propTypes.string,
  classLabel: propTypes.string,
  list: propTypes.array,
  name: propTypes.string,
  isAuth: propTypes.bool,
};
