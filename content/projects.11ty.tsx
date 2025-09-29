import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";

export default function Projects(): ReactNode {
  return (
    <Page
      title="Projects"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our projects."
    >
      <Section>
        <PageTitle>Projects</PageTitle>
        <div className="max-w-6xl p-4 w-screen flex flex-col sm:flex-row flex-wrap items-center sm:justify-start gap-4">
          <Project
            href="/posts/first-year/"
            title="Digital Society is 1 years old!"
            description="Celebrating our first year projects."
            alt="Birthday cake with one candle"
            src="/images/cake.jpg"
          />
        </div>
      </Section>
    </Page>
  );
}

function Project(props: {
  href: string;
  title: string;
  description: string;
  alt: string;
  src: string;
}): React.ReactNode {
  return (
    <a
      href={props.href}
      className="flex flex-col max-w-[24rem] gap-4 p-4 rounded-xl bg-fujiWhite shadow items-start hover:underline"
    >
      <div className="max-h-[15rem] w-full self-center rounded-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
        <img alt={props.alt} src={props.src} className="w-full" />
      </div>
      <div className="flex flex-col gap-2 text-springBlue min-w-0 overflow-hidden w-full">
        <h2 className="text-2xl sm:text-3xl">
          {props.title}
        </h2>
        <p className="overflow-hidden text-ellipsis text-nowrap">
          {props.description}
        </p>
      </div>
    </a>
  );
}
