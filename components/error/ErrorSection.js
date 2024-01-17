import Link from "next/link";
import React from "react";

const ErrorSection = ({ type }) => {
  return (
    <div className="common-full">
      <div> {type} not found</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link className="common_btn" href="/">
        go back home
      </Link>
    </div>
  );
};

export default ErrorSection;
