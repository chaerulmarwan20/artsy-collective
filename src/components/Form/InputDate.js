import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import propTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

import Calendar from "../../assets/icon/calendar.svg";

export default function InputDate(props) {
  const dateRef = useRef();

  const focusDate = () => {
    dateRef.current.setFocus(true);
  };

  const className = ["form-group"];
  className.push(props.classForm);

  const classDate = ["date-picker"];
  classDate.push(props.classInput);

  return (
    <div className={className.join(" ")}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-date">
        <DatePicker
          selected={props.value && props.value}
          name={props.name}
          id={props.name}
          className={classDate.join(" ")}
          value={props.value}
          placeholderText={"DD/MM/YY"}
          onChange={(date) => props.onChange("birthday", date)}
          onBlur={props.onBlur}
          maxDate={new Date()}
          ref={dateRef}
        />
        <div className="calendar">
          <img src={Calendar} alt="calendar" onClick={focusDate} />
        </div>
      </div>
      {props.error && <small>{props.error}</small>}
    </div>
  );
}

InputDate.propTypes = {
  onChange: propTypes.func,
  onBlur: propTypes.func,
  classForm: propTypes.string,
  classInput: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  error: propTypes.string,
};
