import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import propTypes from "prop-types";

import "./pagination.scss";

import ChevronLeft from "../../assets/icon/chevron-left.svg";
import ChevronRight from "../../assets/icon/chevron-right.svg";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPage,
  offset,
  setOffset,
  dataLimit,
  pageLimit,
}) {
  const [pageNumber, setPageNumber] = useState([]);

  const scroller = Scroll.scroller;

  const previous = () => {
    setOffset(offset <= 0 ? 0 : offset - dataLimit);
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
    scroller.scrollTo("filter-header", {
      duration: 1800,
      delay: 100,
      smooth: true,
    });
  };

  const next = () => {
    setOffset(currentPage === totalPage ? offset : offset + dataLimit);
    setCurrentPage(currentPage === totalPage ? totalPage : currentPage + 1);
    scroller.scrollTo("filter-header", {
      duration: 1800,
      delay: 100,
      smooth: true,
    });
  };

  const changePage = (e) => {
    const number = Number(e.target.textContent);
    setOffset(number * dataLimit - dataLimit);
    setCurrentPage(number);
    scroller.scrollTo("filter-header", {
      duration: 1800,
      delay: 100,
      smooth: true,
    });
  };

  const getPageNumber = () => {
    const arrNumber = Array.from(Array(totalPage).keys()).map(
      (item) => item + 1
    );
    const startIndex =
      currentPage === totalPage
        ? currentPage - pageLimit
        : currentPage >= pageLimit && pageLimit % 2 !== 0
        ? currentPage - pageLimit + Math.floor(pageLimit / 2)
        : pageLimit % 2 === 0 && currentPage >= pageLimit
        ? currentPage - pageLimit + 1
        : 0;
    const endIndex = startIndex + pageLimit;
    setPageNumber(arrNumber.slice(startIndex, endIndex));
  };

  useEffect(() => {
    getPageNumber();
  }, [currentPage]);

  return (
    <nav className="pagination">
      <ul>
        <li className="chevron hover-opacity-primary" onClick={previous}>
          <Link to="#" className="font-medium">
            <img src={ChevronLeft} className="img-block" alt="Chevron Left" />
          </Link>
        </li>
        {pageNumber.map((item, index) => {
          return (
            <li
              className={`hover-opacity-primary ${
                currentPage === item && "active"
              }`}
              onClick={changePage}
              key={index}
            >
              <Link
                to="#"
                className={`font-medium ${currentPage === item && "active"}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
        <li className="chevron hover-opacity-primary" onClick={next}>
          <Link to="#" className="font-medium">
            <img src={ChevronRight} className="img-block" alt="Chevron Right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number,
  setCurrentPage: propTypes.func,
  totalPage: propTypes.number,
  offset: propTypes.number,
  setOffset: propTypes.func,
  dataLimit: propTypes.number,
  pageLimit: propTypes.number,
};
