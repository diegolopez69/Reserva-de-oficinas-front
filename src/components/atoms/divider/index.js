import React from "react";
import "./index.scss";

export const Divider = ({ label }) => (
  <div id="custom-divider">
    <p>{label}</p>
    <div className="divider-hr"></div>
    <div className="divider-after"></div>
  </div>
);
