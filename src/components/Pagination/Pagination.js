import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import propTypes from "prop-types";

import "./pagination.scss";

import ChevronLeft from "../../assets/icon/chevron-left.svg";
import ChevronRight from "../../assets/icon/chevron-right.svg";

export default function Pagination({
  currentPage,
  totalPage,
  offset,
  setOffset,
  dataLimit,
  pageNeighbours,
  setParams,
}) {
  const [pageNumber, setPageNumber] = useState([]);

  const scrollTop = () => {
    const scroller = Scroll.scroller;
    return scroller.scrollTo("filter-header", {
      duration: 1800,
      delay: 100,
      smooth: true,
    });
  };

  const previous = () => {
    setOffset(offset <= 0 ? 0 : offset - dataLimit);
    setParams(currentPage <= 1 ? 1 : currentPage - 1);
    scrollTop();
  };

  const next = () => {
    setOffset(currentPage === totalPage ? offset : offset + dataLimit);
    setParams(currentPage === totalPage ? totalPage : currentPage + 1);
    scrollTop();
  };

  const changePage = (e) => {
    const number = Number(e.target.textContent);
    setOffset(number * dataLimit - dataLimit);
    setParams(number);
    scrollTop();
  };

  const getPageNumber = () => {
    const arrNumber = Array.from(Array(totalPage).keys()).map(
      (item) => item + 1
    );
    const formula = pageNeighbours * 2 + 3 - 2;
    const startIndex =
      currentPage === totalPage
        ? currentPage - formula
        : currentPage >= formula
        ? currentPage - formula + pageNeighbours
        : 0;
    const endIndex = startIndex + formula;
    console.log(startIndex, endIndex);
    setPageNumber(arrNumber.slice(startIndex, endIndex));
  };

  useEffect(() => {
    getPageNumber();
  }, []);

  return (
    <nav className="pagination">
      <ul>
        <li className="chevron hover-opacity-primary" onClick={previous}>
          <Link to="#" className="font-medium">
            <img src={ChevronLeft} className="img-block" alt="Chevron Left" />
          </Link>
        </li>
        <li
          className={`hover-opacity-primary ${currentPage === 1 && "active"}`}
          onClick={changePage}
        >
          <Link
            to="#"
            className={`font-medium ${currentPage === 1 && "active"}`}
          >
            1
          </Link>
        </li>
        {currentPage > pageNeighbours * 2 + 3 - 2 && (
          <li className="dots">
            <p>...</p>
          </li>
        )}
        {pageNumber.map((item, index) => {
          return (
            item !== 1 &&
            item !== totalPage && (
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
            )
          );
        })}
        {currentPage < totalPage - (pageNeighbours + 1) && (
          <li className="dots">
            <p>...</p>
          </li>
        )}
        {totalPage > 1 && (
          <li
            className={`hover-opacity-primary ${
              currentPage === totalPage && "active"
            }`}
            onClick={changePage}
          >
            <Link
              to="#"
              className={`font-medium ${currentPage === totalPage && "active"}`}
            >
              {totalPage}
            </Link>
          </li>
        )}
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
  totalPage: propTypes.number,
  offset: propTypes.number,
  setOffset: propTypes.func,
  dataLimit: propTypes.number,
  pageNeighbours: propTypes.number,
  setParams: propTypes.func,
};
