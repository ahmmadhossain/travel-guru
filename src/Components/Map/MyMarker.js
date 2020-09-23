import React from "react";

const MyMarker = ({ text, tooltip }) => {
  const handleClick = () => {};

  return (
    <div className="circle" onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
