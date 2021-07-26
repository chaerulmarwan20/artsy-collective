import React, { useState } from "react";
import { Range } from "rc-slider";
import propTypes from "prop-types";

import "rc-slider/assets/index.css";
import "./range.scss";

import Rupiah from "../../utils/Rupiah";

export default function InputRange(props) {
  const [value, setValue] = useState([0, 13479000]);

  return (
    <>
      <div className="total-price">
        <span className="font-semi-bold" id="slider-range-value1">
          {Rupiah(value[0], true)}
        </span>
        <span className="font-semi-bold" id="slider-range-value2">
          {Rupiah(value[1], true)}
        </span>
      </div>
      <div className="range-price">
        <Range
          min={0}
          max={13479000}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <p className="title-range">{props.value}</p>
      </div>
    </>
  );
}

InputRange.propTypes = {
  value: propTypes.string,
};
