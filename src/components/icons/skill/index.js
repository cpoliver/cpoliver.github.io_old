import React from "react";

import DevicesIcon from "./svg/devices.svg";
import ToolsIcon from "./svg/tools.svg";
import WebserverIcon from "./svg/webserver.svg";

export default ({ icon }) => {
  return {
    devices: <DevicesIcon />,
    tools: <ToolsIcon />,
    webserver: <WebserverIcon />
  }[icon];
};
