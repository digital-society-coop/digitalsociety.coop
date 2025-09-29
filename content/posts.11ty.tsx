import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Heading from "../components/Heading";

export default function Insights(): ReactNode {
  return (
    <Page
      title="Insights"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our insights."
    >
      <Section>
        <PageTitle>Insights</PageTitle>
        <Container>
          <Post
            href="/posts/job-satisfaction/"
            title="Job satisfaction"
            date="27/05/2025"
            description="A self-reflection exercise"
            alt="Zen rock in front of water"
            src="/images/zen.jpg"
          />
          <Post
            href="/posts/tap-generally-available/"
            title="tap is generally available!"
            date="15/05/2025"
            description="Our first data SaaS product"
            alt="Logo for tap"
            src="/images/tap.svg"
          />
          <Post
            href="/posts/first-year/"
            title="Digital Society is 1 years old!"
            date="11/12/2024"
            description="Celebrating our first year projects."
            alt="Birthday cake with one candle"
            src="/images/cake.jpg"
          />
        </Container>
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
    <a
      href={props.href}
      className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-fujiWhite shadow items-start hover:underline"
    >
      <div className="max-h-[15rem] max-w-[20rem] w-full self-center rounded-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
        <img alt={props.alt} src={props.src} className="w-full" />
      </div>
      <div className="flex flex-col gap-2 text-springBlue min-w-0 overflow-hidden w-full">
        <Heading>{props.title}</Heading>
        <p>{props.date}</p>
        <p className="overflow-hidden text-ellipsis text-nowrap">
          {props.description}
        </p>
      </div>
    </a>
  );
}
