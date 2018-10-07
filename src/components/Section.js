import React from "react";

export default ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <hr />
    {children}
  </div>
);
