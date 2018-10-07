import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import { title } from "../content";
import { color } from "../styles";

const Body = styled.body`
  color: ${color.text.primary};
`;

const Layout = ({ children }) => (
  <Body>
    <Helmet
      bodyAttributes={{
        style: `background-color: ${color.background.primary}`
      }}
      title={title}
      meta={[
        { name: "description", content: title },
        {
          name: "keywords",
          content:
            "charles oliver, code, developer, front-end, full-stack, javascript, contract, uk"
        }
      ]}
    >
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700"
        rel="stylesheet"
      />
    </Helmet>
    <div
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </Body>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
