import React from "react";

import { bio } from "../../content";

export default () => (
  <div>
    <h1>{bio.name}</h1>
    <h2>{bio.job}</h2>
    <p>{bio.description}</p>
  </div>
);
