import React from "react";

import BrainIcon from "./svg/brain.svg";
import EarIcon from "./svg/ear.svg";
import EyeIcon from "./svg/eye.svg";
import MouthIcon from "./svg/mouth.svg";

export default ({ icon }) => {
  return {
    brain: <BrainIcon />,
    ear: <EarIcon />,
    eye: <EyeIcon />,
    mouth: <MouthIcon />
  }[icon];
};
