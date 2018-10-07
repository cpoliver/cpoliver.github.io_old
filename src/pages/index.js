import React from "react";

import Layout from "../components/_Layout";
import {
  Header,
  Currently,
  Skills,
  Previously,
  Footer
} from "../components/sections";

const IndexPage = () => (
  <Layout>
    <Header />
    <Currently />
    <Skills />
    <Previously />
    <Footer />
  </Layout>
);

export default IndexPage;
