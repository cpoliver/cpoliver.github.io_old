import React from "react";
import styled from "styled-components";

import { H3 } from "./Typography";
import { color } from "../styles";

const FullWidth = styled.div`
  /* background: rgba(255, 255, 255, 0.25); */
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Container = styled.div`
  /* background: rgba(255, 255, 255, 0.125); */
  max-width: 1200px;
  min-width: 820px;
  margin: 0 auto;
  padding: 4rem;
`;

const Flex = styled.div`
  /* background: rgba(255, 255, 255, 0.125); */
`;

const Underlined = styled.div`
  border-bottom: 1px ${color.text.primary} solid;
`;

const Title = ({ children }) => {
  if (!children) return null;

  return (
    <Underlined>
      <H3>{children}</H3>
    </Underlined>
  );
};

export default ({ title, children }) => (
  <FullWidth>
    <Container>
      <Flex>
        <Title>{title}</Title>
      </Flex>
      <Flex>{children}</Flex>
    </Container>
  </FullWidth>
);
