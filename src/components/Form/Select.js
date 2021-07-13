import React from "react";
import propTypes from "prop-types";

export default function Select(props) {
  const className = ["custom-select", "hover-opacity-primary"];
  className.push(props.className);

  return (
    <select className={className.join(" ")} defaultValue={props.value}>
      {props.list.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  onChange: propTypes.func,
  className: propTypes.string,
  value: propTypes.string,
  list: propTypes.array,
};
