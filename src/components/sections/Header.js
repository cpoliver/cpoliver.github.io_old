import React from "react";
import styled from "styled-components";

import { bio } from "../../content";
import { H1, H2, Leader } from "../Typography";
import Portrait from "../icons/portrait";

const Header = styled.div`
  display: flex;
`;

const PortraitContainer = styled.div`
  flex: 3;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
`;

export default () => (
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
);
