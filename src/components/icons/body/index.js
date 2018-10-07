import React from "react";

import BrainIcon from "./svg/brain.svg";
import EarIcon from "./svg/ear.svg";
import EyeIcon from "./svg/eye.svg";
import MouthIcon from "./svg/mouth.svg";

export default props => {
  return {
    brain: <BrainIcon {...props} />,
    ear: <EarIcon {...props} />,
    eye: <EyeIcon {...props} />,
    mouth: <MouthIcon {...props} />
  }[props.icon];
};
