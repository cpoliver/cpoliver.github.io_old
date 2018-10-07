import React from "react";

import { employment } from "../content";

export default ({
  from,
  to = "Present",
  company,
  position,
  location,
  description = employment.placeholder,
  tech
}) => (
  <div>
    <p>
      {from} – {to}
    </p>
    <p>
      {position} @ {company}, {location}
    </p>
    <p>{description}</p>
    <ul>
      {tech.map(technology => (
        <li>{technology}</li>
      ))}
    </ul>
  </div>
);
