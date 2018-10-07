import React from "react";

export default ({ title, skills }) => (
  <div>
    <h3>{title}</h3>
    <hr />
    <ul>
      {skills.map(skill => (
        <li>{skill}</li>
      ))}
    </ul>
  </div>
);
