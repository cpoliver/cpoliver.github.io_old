import React from "react";
import styled from "styled-components";

import { bio } from "../../content";
import { H1, H2, Leader } from "../Typography";
import Portrait from "../icons/portrait";
import Section from "../Section";

const Header = styled.div`
  display: flex;
`;

const PortraitContainer = styled.div`
  flex: 3;
  padding: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
  padding: 1rem;
`;

export default () => (
  <Section>
    <Header>
      <PortraitContainer>
        <Portrait />
      </PortraitContainer>
      <TextContainer>
        <H1>{bio.name}</H1>
        <H2>{bio.job}</H2>
        <Leader>{bio.description}</Leader>
      </TextContainer>
    </Header>
  </Section>
);
