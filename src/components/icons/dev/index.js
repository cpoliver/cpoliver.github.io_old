import React from "react";

import AngularIcon from "./svg/angular.svg";
import BootstrapIcon from "./svg/bootstrap.svg";
import DotnetIcon from "./svg/dotnet.svg";
import ElixirIcon from "./svg/elixir.svg";
import GraphqlIcon from "./svg/graphql.svg";
import MongoIcon from "./svg/mongo.svg";
import NodeIcon from "./svg/node.svg";
import ReactIcon from "./svg/react-icon.svg"; // >:-(
import RubyIcon from "./svg/ruby.svg";
import SqlIcon from "./svg/sql.svg";

export default ({ icon }) => {
  return {
    angular: <AngularIcon />,
    bootstrap: <BootstrapIcon />,
    dotnet: <DotnetIcon />,
    elixir: <ElixirIcon />,
    graphql: <GraphqlIcon />,
    mongo: <MongoIcon />,
    node: <NodeIcon />,
    react: <ReactIcon />,
    ruby: <RubyIcon />,
    sql: <SqlIcon />
  }[icon];
};
