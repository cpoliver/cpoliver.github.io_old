import React from "react";
import styled from "styled-components";

import { color } from "../../styles";
import { links } from "../../content";
import SocialIcon from "../icons/social";

const Footer = styled.div``;

const IconList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const IconListItem = styled.li`
  align-items: center;
  display: flex;
  padding: 2rem;
`;

const Link = styled.a`
  margin-left: 0.5rem;
  color: ${color.text.primary};
  text-decoration: none;
`;

export default () => (
  <Footer>
    <IconList>
      {links.map(link => (
        <IconListItem>
          <SocialIcon icon={link.site} width={16} />
          <Link href={link.url}>{link.site}</Link>
        </IconListItem>
      ))}
    </IconList>
  </Footer>
);
