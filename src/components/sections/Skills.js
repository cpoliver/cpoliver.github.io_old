import React from "react";
import styled from "styled-components";

import { skillSet } from "../../content";
import SkillList from "../SkillList";
import Section from "../Section";

const Flex = styled.div`
  display: flex;
`;

const SkillListContainer = styled.div`
  flex: 1;
`;

export default () => (
  <Section title="Skill Set">
    <Flex>
      {skillSet.map(skillSet => (
        <SkillListContainer>
          <SkillList {...skillSet} />
        </SkillListContainer>
      ))}
    </Flex>
  </Section>
);
