import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import "./pagination.scss";

import ChevronLeft from "../../assets/icon/chevron-left.svg";
import ChevronRight from "../../assets/icon/chevron-right.svg";

export default function Pagination(props) {
  return (
    <nav className="pagination">
      <ul>
        <li className="chevron hover-opacity-primary">
          <Link
            // to={`/product-list?offset=${props.offset}&limit=${props.limit}`}
            to="#"
            className="font-medium"
            onClick={props.previous}
          >
            <img src={ChevronLeft} className="img-block" alt="Chevron Left" />
          </Link>
        </li>
        {props.list.map((item, index) => {
          return (
            <li
              className={`hover-opacity-primary ${item.isActive && "active"}`}
              key={index}
            >
              <Link
                to={item.href}
                className={`font-medium ${item.isActive && "active"}`}
              >
                {item.number}
              </Link>
            </li>
          );
        })}
        <li className="chevron hover-opacity-primary">
          <Link
            // to={`/product-list?offset=${props.offset}&limit=${props.limit}`}
            to="#"
            className="font-medium"
            onClick={props.next}
          >
            <img src={ChevronRight} className="img-block" alt="Chevron Right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  list: propTypes.array,
  offset: propTypes.number,
  limit: propTypes.number,
  previous: propTypes.func,
  next: propTypes.func,
};
