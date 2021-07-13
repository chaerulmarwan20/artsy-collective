import React from "react";
import propTypes from "prop-types";

export default function InputRange(props) {
  return (
    <>
      <div className="total-price">
        <span className="font-semi-bold" id="slider-range-value1"></span>
        <span className="font-semi-bold" id="slider-range-value2"></span>
      </div>
      <div className="range-price">
        <div id="slider-range"></div>
        <input type="hidden" name="min-value" />
        <input type="hidden" name="max-value" />
        <p>{props.value}</p>
      </div>
    </>
  );
}

InputRange.propTypes = {
  value: propTypes.string,
};
