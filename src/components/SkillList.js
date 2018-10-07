import React from "react";
import styled from "styled-components";

import SkillIcon from "./icons/skill";

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ({ title, skills, icon }) => (
  <SkillList>
    <h3>{title}</h3>
    <SkillIcon icon={icon} />
    <ul>
      {skills.map(skill => (
        <li>{skill}</li>
      ))}
    </ul>
  </SkillList>
);
