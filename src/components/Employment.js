import React from "react";
import styled from "styled-components";

import { employment } from "../content";
import { color, font } from "../styles";
import DevIcon from "./icons/dev";

const Employment = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  flex: 3;
`;
const RightColumn = styled.div`
  flex: 9;
`;

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

const formatDuration = duration =>
  duration ? `${duration} month contract` : "permanent";

export default ({
  company,
  position,
  location,
  from,
  to = "Present",
  duration,
  description = employment.placeholder,
  tech
}) => (
  <Employment>
    <LeftColumn>
      <DateRange>
        {from}
        <br />
        &mdash;
        {to}
      </DateRange>
      <Duration>{formatDuration(duration)}</Duration>
    </LeftColumn>
    <RightColumn>
      <Heading>
        {position} @ {company}, {location}
      </Heading>
      <Description>{description}</Description>
      <TechStack>
        {tech.map(technology => (
          <DevIcon icon={technology} width={32} />
        ))}
      </TechStack>
    </RightColumn>
  </Employment>
);
