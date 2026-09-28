import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import DotRotation from "../components/DotRotation";
import Card, { Img } from "../components/Card";

export default function Insights(): ReactNode {
  return (
    <Page
      title="Insights"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our insights."
    >
      <Section>
        <PageTitle>Insights</PageTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 sm:px-12">
          <Card
            href="/posts/glow-up/"
            title="We've had a glow up!"
            date="22/06/2026"
            description="A new logo and a fresh lick of paint for our website."
            className="bg-sumiInk2 px-8 py-9"
            screenshots={
              <Img
                alt="Digital Society light logo"
                src="/images/DigitalSociety_Logo_Colour_Light.svg"
                object="contain"
              />
            }
          />
          <Card
            href="/posts/pension-sovereignty/"
            title="UK pensions"
            date="05/05/2026"
            description="Our pension fund should be made to invest more than 2.5% in the UK."
            screenshots={
              <Img
                alt="Image by Alfons Landsmann from https://pixabay.com/photos/coins-money-poverty-homeless-8975531/"
                src="/images/pension-sovereignty.jpg"
              />
            }
          />
          <Card
            href="/posts/second-year/"
            title="Digital Society is 2 years old!"
            date="20/01/2026"
            description="Celebrating our second year operating."
            screenshots={
              <Img
                alt="Sparkler (by KAVOWO from https://pixabay.com/photos/sparkler-spark-fireworks-light-4724867/)"
                src="/images/sparkler-4724867_640.jpg"
              />
            }
          />
          <Card
            href="/posts/migrating-to-hetzner-cloud/"
            title="Migrating to Hetzner"
            date="02/10/2025"
            description="Saving 76% on our cloud bills and tripling our capacity."
            className="bg-[#d50c2d]!"
            screenshots={
              <Img
                alt="Hetzner Logo"
                src="/images/hetzner-logo.png"
                object="contain"
              />
            }
          />
          <Card
            href="/posts/job-satisfaction/"
            title="Job satisfaction"
            date="27/05/2025"
            description="A self-reflection exercise."
            screenshots={
              <Img alt="Zen rock in front of water" src="/images/zen.jpg" />
            }
          />
          <Card
            href="/posts/tap-generally-available/"
            title="tap is generally available!"
            date="15/05/2025"
            description="Our first data SaaS product."
            className="bg-sumiInk2 p-8"
            screenshots={
              <Img alt="Logo for tap" src="/images/tap.svg" object="contain" />
            }
          />
          <Card
            href="/posts/first-year/"
            title="Digital Society is 1 years old!"
            date="11/12/2024"
            description="Celebrating our first year projects."
            screenshots={
              <Img alt="Birthday cake with one candle" src="/images/cake.jpg" />
            }
          />
        </div>
      </Section>
    </Page>
  );
}
