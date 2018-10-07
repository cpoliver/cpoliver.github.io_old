import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const title = "Charles P Oliver | Full-Stack Developer";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
