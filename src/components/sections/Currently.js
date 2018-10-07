import React from "react";

import { employment } from "../../content";
import Employment from "../Employment";
import Section from "../Section";

export default () => (
  <Section title="Currently">
    <Employment {...employment.current} />
  </Section>
);
