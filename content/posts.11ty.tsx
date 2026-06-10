import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import DotRotation from "../components/DotRotation";

export default function Insights(): ReactNode {
  return (
    <Page
      title="Insights"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our insights."
    >
      <Section background={<DotRotation side="left" />}>
        <PageTitle>Insights</PageTitle>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-8 sm:gap-16 sm:px-12">
          <Post
            href="/posts/pension-sovereignty/"
            title="UK pensions"
            date="05/05/2026"
            description="Our pension fund should be made to invest more than 2.5% in the UK."
            alt="Image by Alfons Landsmann from https://pixabay.com/photos/coins-money-poverty-homeless-8975531/"
            src="/images/pension-sovereignty.jpg"
          />
          <Post
            href="/posts/second-year/"
            title="Digital Society is 2 years old!"
            date="20/01/2026"
            description="Celebrating our second year operating."
            alt="Sparkler (by KAVOWO from https://pixabay.com/photos/sparkler-spark-fireworks-light-4724867/)"
            src="/images/sparkler-4724867_640.jpg"
          />
          <Post
            href="/posts/migrating-to-hetzner-cloud/"
            title="Migrating to Hetzner"
            date="02/10/2025"
            description="Saving 76% on our cloud bills and tripling our capacity"
            alt=""
            src="/images/hetzner-logo.png"
            imgContainerClass="bg-[#d50c2d]!"
          />
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
            imgContainerClass="bg-sumiInk2 p-8"
          />
          <Post
            href="/posts/first-year/"
            title="Digital Society is 1 years old!"
            date="11/12/2024"
            description="Celebrating our first year projects."
            alt="Birthday cake with one candle"
            src="/images/cake.jpg"
          />
        </div>
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
  imgContainerClass?: string;
}): React.ReactNode {
  return (
    <a
      href={props.href}
      className="flex-1 flex flex-col rounded-xl bg-lighterYellow shadow items-start hover:underline min-w-[calc((100%-2*4*var(--spacing))/4)] max-w-full"
    >
      <div
        className={`max-h-[15rem] w-full self-center overflow-hidden aspect-320/213 flex gap-2 items-between rounded-t-xl ${props.imgContainerClass ?? ""}`}
      >
        <img alt={props.alt} src={props.src} className="w-full object-cover" />
      </div>
      <div className="text-sumiInk2 min-w-0 p-4 text-center flex flex-col gap-2 justify-between self-center">
        <h2 className="text-xl sm:text-2xl font-extrabold">{props.title}</h2>
        <p className="text-lg sm:text-xl">{props.date}</p>
        <p className="text-lg sm:text-xl">{props.description}</p>
      </div>
    </a>
  );
}
