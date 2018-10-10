import React from "react";
import styled from "styled-components";

import { employment } from "../content";
import { color, font } from "../styles";
import DevIcon from "./icons/dev";

const Employment = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 2;
  flex-direction: column;
  margin: 0;
  padding: 1rem;
  text-align: right;
`;
const RightColumn = styled.div`
  display: flex;
  flex: 10;
  flex-direction: column;
  margin: 0;
  padding: 1rem;
`;

const DateRange = styled.p`
  color: ${color.text.secondary}
  font-size: ${font.size.body.lg};
  margin: 0;
  padding: 0;
`;

const Duration = styled.p`
  color: ${color.text.muted};
  font-size: ${font.size.body.sm};
  margin: 0;
  padding: 0;
`;

const Heading = styled.p`
  color: ${color.text.primary};
  font-size: ${font.size.body.lg};
  font-weight: ${font.weight.bolder};
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  color: ${color.text.secondaryMuted};
  font-size: ${font.size.body.md};
  margin: 0;
  padding: 0;
`;

const TechStack = styled.ul`
  margin: 0;
  padding: 0;
`;

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
