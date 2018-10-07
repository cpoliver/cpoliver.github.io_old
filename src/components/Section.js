import React from "react";

import { H3 } from "./Typography";

export default ({ title, children }) => (
  <div>
    <H3>{title}</H3>
    <hr />
    {children}
  </div>
);
