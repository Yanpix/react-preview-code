import React from "react";
import { MetroSpinner } from "react-spinners-kit";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <MetroSpinner size={80} color="#17a2b8" />
    </div>
  );
};

export default Spinner;
