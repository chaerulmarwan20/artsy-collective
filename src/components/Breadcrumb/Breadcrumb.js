import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import "./breadcrumb.scss";

export default function Breadcrumb(props) {
  const className = ["wrapper", "breadcrumbs"];
  className.push(props.className);

  return (
    <nav className={className.join(" ")}>
      <ul>
        {props.list.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                title={item.title}
                className={`font-medium hover-color-primary ${
                  item.active && "active"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  className: propTypes.string,
  list: propTypes.array,
};
