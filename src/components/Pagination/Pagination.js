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
  dataLimit,
  pageNeighbours,
}) {
  const paginations = document.querySelectorAll(".pagination li");

  paginations.forEach((item) => {
    if (!item.classList.contains("dots"))
      item.addEventListener("click", () => {
        const scroller = Scroll.scroller;
        scroller.scrollTo("filter-header", {
          duration: 1800,
          delay: 100,
          smooth: true,
        });
      });
  });

  const formula = pageNeighbours * 2 + 3 - 2;
  const [pageNumber, setPageNumber] = useState([]);

  const getPageNumber = () => {
    const arrNumber = Array.from(Array(totalPage).keys()).map(
      (item) => item + 1
    );
    const startIndex =
      currentPage === totalPage
        ? currentPage - formula
        : currentPage >= formula
        ? currentPage - formula + pageNeighbours
        : 0;
    const endIndex = startIndex + formula;
    setPageNumber(arrNumber.slice(startIndex, endIndex));
  };

  useEffect(() => {
    getPageNumber();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="pagination">
      <ul>
        {currentPage !== 1 && (
          <li className="chevron hover-opacity-primary">
            <Link
              to={{
                pathname: "/product-list",
                search: `?page=${currentPage - 1}&perPage=${dataLimit}`,
              }}
              className="font-medium"
            >
              <img src={ChevronLeft} className="img-block" alt="Chevron Left" />
            </Link>
          </li>
        )}
        <li
          className={`hover-opacity-primary ${currentPage === 1 && "active"}`}
        >
          <Link
            to={{
              pathname: "/product-list",
              search: `?page=${1}&perPage=${dataLimit}`,
            }}
            className={`font-medium ${currentPage === 1 && "active"}`}
          >
            1
          </Link>
        </li>
        {pageNeighbours === 1
          ? currentPage > formula && (
              <li className="dots">
                <p>...</p>
              </li>
            )
          : currentPage >= formula && (
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
                key={index}
              >
                <Link
                  to={{
                    pathname: "/product-list",
                    search: `?page=${item}&perPage=${dataLimit}`,
                  }}
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
          >
            <Link
              to={{
                pathname: "/product-list",
                search: `?page=${totalPage}&perPage=${dataLimit}`,
              }}
              className={`font-medium ${currentPage === totalPage && "active"}`}
            >
              {totalPage}
            </Link>
          </li>
        )}
        {currentPage !== totalPage && (
          <li className="chevron hover-opacity-primary">
            <Link
              to={{
                pathname: "/product-list",
                search: `?page=${currentPage + 1}&perPage=${dataLimit}`,
              }}
              className="font-medium"
            >
              <img
                src={ChevronRight}
                className="img-block"
                alt="Chevron Right"
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number,
  totalPage: propTypes.number,
  dataLimit: propTypes.number,
  pageNeighbours: propTypes.number,
};
