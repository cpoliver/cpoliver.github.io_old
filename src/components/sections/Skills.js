import React from "react";

import { skillSet } from "../../content";
import SkillList from "../SkillList";
import Section from "../Section";

export default () => (
  <Section title="Skill Set">
    {skillSet.map(skillSet => (
      <SkillList {...skillSet} />
    ))}
  </Section>
);
