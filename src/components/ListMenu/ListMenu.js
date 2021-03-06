import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function ListMenu(props) {
  return (
    <ul className={props.classMenu}>
      {props.isFooter && (
        <li>
          <p className="font-bold">{props.heading}</p>
        </li>
      )}
      {props.list.map((item, index) => {
        const classItem = [];
        if (item.title === "Collections") {
          classItem.push(`${item.title.toLowerCase()}`);
        }
        classItem.push(props.classItem);
        return (
          <li key={index}>
            <Link
              to={item.href}
              className={classItem.join(" ")}
              title={item.title}
              onMouseOver={(e) => props.isNavbar && props.onMouseOver(e)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

ListMenu.propTypes = {
  className: propTypes.string,
  list: propTypes.array,
  onMouseOver: propTypes.func,
  isNavbar: propTypes.bool,
  isFooter: propTypes.bool,
};
