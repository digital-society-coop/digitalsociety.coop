import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Heading from "../components/Heading";

export default function Posts(): ReactNode {
  return (
    <Page
      title="Posts"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our posts."
    >
      <Section>
        <PageTitle>Posts</PageTitle>
        <Container>
          <a
            href="/posts/first-year"
            className="flex flex-col sm:flex-row gap-8 p-4 rounded-xl bg-fujiWhite shadow items-start hover:underline"
          >
            <img
              alt="Birthday cake with one candle"
              src="/images/cake.jpg"
              className="max-h-[15rem] max-w-[20rem] w-full self-center rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4 text-springBlue">
              <Heading>Digital Society is 1 years old!</Heading>
              <p>11/12/2024</p>
              <p>Celebrating our first year projects.</p>
            </div>
          </a>
        </Container>
      </Section>
    </Page>
  );
}
