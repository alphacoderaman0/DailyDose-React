import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="..." style={{ width: "2rem", height: "2rem" }} />
    </div>
  );
};

export default Spinner;
