import React from "react";
import { WaveSpinner } from "react-spinners-kit";

import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <WaveSpinner size={50} color="#17a2b8" />
    </div>
  );
};

export default Spinner;
