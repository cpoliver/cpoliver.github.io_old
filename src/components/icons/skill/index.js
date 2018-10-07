import React from "react";

import DevicesIcon from "./svg/devices.svg";
import ToolsIcon from "./svg/tools.svg";
import WebserverIcon from "./svg/webserver.svg";

export default props => {
  return {
    devices: <DevicesIcon {...props} />,
    tools: <ToolsIcon {...props} />,
    webserver: <WebserverIcon {...props} />
  }[props.icon];
};
