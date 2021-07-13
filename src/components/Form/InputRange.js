import React, { useState } from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import Rupiah from "../../helpers/Rupiah";

const RangeSlider = withStyles({
  root: {
    color: "#CA8F48",
    margin: 0,
    padding: 0,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#CA8F48",
    marginTop: -7,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
})(Slider);

export default function InputRange(props) {
  const [value, setValue] = useState([0, 13479000]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

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
        <RangeSlider
          min={0}
          max={13479000}
          value={value}
          onChange={handleChange}
        />
        <p className="title-range">{props.value}</p>
      </div>
    </>
  );
}

InputRange.propTypes = {
  value: propTypes.string,
};
