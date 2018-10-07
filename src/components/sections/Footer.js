import React from "react";

import { links } from "../../content";

export default () => (
  <div>
    <ul>
      {links.map(link => (
        <li>
          <a href={link.url}>{link.site}</a>
        </li>
      ))}
    </ul>
  </div>
);
