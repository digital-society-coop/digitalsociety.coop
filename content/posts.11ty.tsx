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
        <Post
          href="/posts/tap-generally-available"
          title="tap is generally available!"
          date="15/05/2025"
          description="Our first SaaS product, enabling teams to transform, join and serve data with flexible and powerful SQL queries and documented, secured APIs"
          alt="Logo for tap"
          src="/images/tap.svg"
        />
        <Post
          href="/posts/first-year"
          title="Digital Society is 1 years old!"
          date="11/12/2024"
          description="Celebrating our first year projects."
          alt="Birthday cake with one candle"
          src="/images/cake.jpg"
        />
      </Section>
    </Page>
  );
}

function Post(props: {
  href: string;
  title: string;
  date: string;
  description: string;
  alt: string;
  src: string;
}): React.ReactNode {
  return (
    <Container>
      <a
        href={props.href}
        className="flex flex-col sm:flex-row gap-8 p-4 rounded-xl bg-fujiWhite shadow items-start hover:underline"
      >
        <img
          alt={props.alt}
          src={props.src}
          className="max-h-[15rem] max-w-[20rem] w-full self-center rounded-xl overflow-hidden"
        />
        <div className="flex flex-col gap-4 text-springBlue">
          <Heading>{props.title}</Heading>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </Container>
  );
}
