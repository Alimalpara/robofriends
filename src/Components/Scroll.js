import React from "react";

const Scroll = (props) => {
  return (
    // returning the cardlist inside scroll view so that the above elements reamin i the page while scrolling
    <div
      style={{
        overflowY: "scroll",
        border: " 1px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
