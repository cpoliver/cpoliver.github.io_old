import React from "react";

import { bio } from "../../content";
import { H1, H2, Leader } from "../Typography";

import BodyIcon from "../icons/body";
import DevIcon from "../icons/dev";
import SkillIcon from "../icons/skill";
import SocialIcon from "../icons/social";

export default () => (
  <div>
    <H1>{bio.name}</H1>
    <H2>{bio.job}</H2>
    <Leader>{bio.description}</Leader>
  </div>
);
