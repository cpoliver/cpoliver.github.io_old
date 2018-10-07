import React from "react";
import styled from "styled-components";

import { color } from "../styles";
import { H4 } from "./Typography";
import SkillIcon from "./icons/skill";

const SkillList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Borders = styled.div`
  border: 1px ${color.text.muted} solid;
  border-width 1px 0;
  text-align: center;
  margin: 1rem 2rem;
  padding: 0.5rem;
  width: 80%;
`;

export default ({ title, skills, icon }) => (
  <SkillList>
    <SkillIcon icon={icon} />
    <Borders>
      <H4>{title}</H4>
    </Borders>
    <ul>
      {skills.map(skill => (
        <li>{skill}</li>
      ))}
    </ul>
  </SkillList>
);
