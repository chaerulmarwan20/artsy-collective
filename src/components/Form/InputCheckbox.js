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
    <div className={props.classCheckbox}>
      <input
        type="checkbox"
        className={classInput.join(" ")}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.name}
        checked={props.isChecked}
      />
      <label htmlFor={props.name} className={classLabel.join(" ")}></label>
      <label htmlFor={props.name} className={props.classDesc}>
        {parse(props.label)}
      </label>
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
  onBlur: propTypes.func,
  classForm: propTypes.string,
  classCheckbox: propTypes.string,
  classInput: propTypes.string,
  classLabel: propTypes.string,
  classDesc: propTypes.string,
  list: propTypes.array,
  label: propTypes.string,
  name: propTypes.string,
  isAuth: propTypes.bool,
  isChecked: propTypes.bool,
};
