import React from "react";
import styled from "styled-components";

import { employment } from "../content";
import { color, font } from "../styles";
import DevIcon from "./icons/dev";

const DateRange = styled.p`
  color: ${color.text.secondary}
  font-size: ${font.size.body.lg};
`;

const Duration = styled.p`
  color: ${color.text.muted};
  font-size: ${font.size.body.sm};
`;

const Heading = styled.p`
  color: ${color.text.primary};
  font-size: ${font.size.body.lg};
  font-weight: ${font.weight.bolder};
`;

const Description = styled.p`
  color: ${color.text.secondaryMuted};
  font-size: ${font.size.body.md};
`;

const TechStack = styled.ul``;

export default ({
  from,
  to = "Present",
  company,
  position,
  location,
  description = employment.placeholder,
  tech
}) => (
  <div>
    <DateRange>
      {from}
      <br />
      &mdash;
      {to}
    </DateRange>
    <Heading>
      {position} @ {company}, {location}
    </Heading>
    <Description>{description}</Description>
    <TechStack>
      {tech.map(technology => (
        <DevIcon icon={technology} width={32} />
      ))}
    </TechStack>
  </div>
);
