import React from "react";
import propTypes from "prop-types";

import Close from "../../assets/icon/close.svg";

export default function ButtonClose(props) {
  return (
    <button type="button" className={props.className} id={props.idBtn}>
      <img src={Close} className="img-block" id={props.idImg} alt="Close" />
    </button>
  );
}

ButtonClose.propTypes = {
  className: propTypes.string,
  idBtn: propTypes.string,
  idImg: propTypes.string,
};
