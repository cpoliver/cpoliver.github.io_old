import React from "react";
import styled from "styled-components";

import { links } from "../../content";
import SocialIcon from "../icons/social";

const Footer = styled.div``;

const IconList = styled.ul``;

const IconListItem = styled.li``;

const Link = styled.a``;

export default () => (
  <Footer>
    <IconList>
      {links.map(link => (
        <IconListItem>
          <SocialIcon icon={link.site} />
          <Link href={link.url}>{link.site}</Link>
        </IconListItem>
      ))}
    </IconList>
  </Footer>
);
