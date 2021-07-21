import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import propTypes from "prop-types";

import "./skeleton.scss";

export default function SkeletonLoading(props) {
  const skeletonKeys = props.paginate * 2 + 3 - 2;
  return (
    <>
      <div className="skeleton">
        {Array.from(Array(props.amount).keys()).map((item, index) => {
          return (
            <div className="skeleton-wrapper" key={index}>
              <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
                <Skeleton count={1} duration={2} className="skeleton-img" />
              </SkeletonTheme>
              <div className="skeleton-section-title">
                <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
                  <Skeleton count={1} duration={2} className="skeleton-title" />
                </SkeletonTheme>
              </div>
              <div className="skeleton-section-price">
                <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
                  <Skeleton count={1} duration={2} className="skeleton-price" />
                </SkeletonTheme>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skeleton-pagination">
        <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
          <Skeleton count={1} duration={2} className="skeleton-chevron" />
        </SkeletonTheme>
        {Array.from(Array(skeletonKeys).keys()).map((item, index) => {
          return (
            <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd" key={index}>
              <Skeleton
                count={1}
                duration={2}
                className="skeleton-page-number"
              />
            </SkeletonTheme>
          );
        })}
        <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
          <Skeleton count={1} duration={2} className="skeleton-chevron" />
        </SkeletonTheme>
      </div>
    </>
  );
}

SkeletonLoading.propTypes = {
  amount: propTypes.number,
  paginate: propTypes.number,
};
