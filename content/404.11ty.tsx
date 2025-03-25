import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Heading from "../components/Heading";

export default function NotFound(): ReactNode {
  return (
    <Page
      title="404"
      description="Digital Society, a not-for-profit cooperative building digital products for social good. Page not found."
    >
      <Section className="my-30">
        <PageTitle>404</PageTitle>
        <Heading>Page not found</Heading>
      </Section>
    </Page>
  );
}
