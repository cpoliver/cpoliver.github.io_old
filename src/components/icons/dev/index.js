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

export default props => {
  return {
    angular: <AngularIcon {...props} />,
    bootstrap: <BootstrapIcon {...props} />,
    dotnet: <DotnetIcon {...props} />,
    elixir: <ElixirIcon {...props} />,
    graphql: <GraphqlIcon {...props} />,
    mongo: <MongoIcon {...props} />,
    node: <NodeIcon {...props} />,
    react: <ReactIcon {...props} />,
    ruby: <RubyIcon {...props} />,
    sql: <SqlIcon {...props} />
  }[props.icon];
};
