import React from "react";
import propTypes from "prop-types";

import "./accordion.scss";

import ChevronDown from "../../assets/icon/chevron-down.svg";

export default function Accordion(props) {
  const classWrapper = [];
  const classHeader = ["accordion-header"];
  const classBody = ["accordion-body"];
  classWrapper.push(props.classWrapper);
  classHeader.push(props.classHeader);
  classBody.push(props.classBody);

  return (
    <div className={classWrapper.join(" ")}>
      <div className={classHeader.join(" ")} role="button">
        <p className={props.classParagraph}>{props.title}</p>
        <img src={ChevronDown} alt="Chevron Down" className="img-block" />
      </div>
      <div className={classBody.join(" ")}>{props.children}</div>
    </div>
  );
}

Accordion.propTypes = {
  classWrapper: propTypes.string,
  classHeader: propTypes.string,
  classBody: propTypes.string,
  classParagraph: propTypes.string,
  title: propTypes.string,
};
