import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./skeleton.scss";

class Blogpost extends Component {
  render() {
    return (
      // Mobile
      <div className="wrapper" style={{ margin: "100px auto" }}>
        <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
          <Skeleton count={1} duration={2} width={"50%"} height={213} />
        </SkeletonTheme>
        <div style={{ marginTop: "12px" }}>
          <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
            <Skeleton count={1} duration={2} width={"50%"} height={12} />
          </SkeletonTheme>
        </div>
        <div style={{ marginTop: "8px" }}>
          <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
            <Skeleton count={1} duration={2} width={"25%"} height={30} />
          </SkeletonTheme>
        </div>
      </div>

      // Desktop
      // <div className="wrapper" style={{ margin: "100px auto" }}>
      //   <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
      //     <Skeleton count={1} duration={2} width={"33.3%"} height={213} />
      //   </SkeletonTheme>
      //   <div style={{ marginTop: "16px" }}>
      //     <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
      //       <Skeleton count={1} duration={2} width={"33.3%"} height={16} />
      //     </SkeletonTheme>
      //   </div>
      //   <div style={{ marginTop: "8px" }}>
      //     <SkeletonTheme color="#e5e5e5" highlightColor="#bdbdbd">
      //       <Skeleton count={1} duration={2} width={"16.7%"} height={19} />
      //     </SkeletonTheme>
      //   </div>
      // </div>
    );
  }
}

export default Blogpost;
