import styled from "styled-components";

import { color, font } from "../styles";

const { size, weight } = font;

export const H1 = styled.h1`
  color: ${color.text.primary};
  font-size: ${size.heading.xl};
  font-weight: ${weight.normal};
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${color.text.muted};
  font-size: ${size.heading.lg};
  font-weight: ${weight.normal};
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  color: ${color.text.primary};
  font-size: ${size.heading.sm};
  font-weight: ${weight.normal};
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  color: ${color.text.muted};
  font-size: ${size.heading.xs};
  font-weight: ${weight.normal};
  margin: 0;
  padding: 0;
`;

export const Leader = styled.p`
  color: ${color.text.secondaryMuted};
  font-size: ${size.body.xl};
  font-weight: ${weight.normal};
  margin: 0;
  padding: 0;
`;
