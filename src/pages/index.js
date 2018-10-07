import React from "react";

import Layout from "../components/_Layout";
import Employment from "../components/Employment";
import Section from "../components/Section";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Header>
      <Profile />
    </Header>
    <Section>
      <Employment />
    </Section>
    <Section>
      <Skills />
    </Section>
    <Section>
      <Employment />
    </Section>
    <Footer />
  </Layout>
);

export default IndexPage;
