import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Container from "../components/Container";
import Figure from "../components/Figure";
import Link from "../components/Link";
import Heading from "../components/Heading";

export default function Home(): ReactNode {
  return (
    <Page
      title="Home"
      description="The home page for Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data."
    >
      <Section className="min-h-screen">
        <Container>
          <h1 className="text-8xl sm:text-9xl mb-20">
            <span className="text-oniViolet">Digital</span>&#8203;
            <span className="text-waveAqua2">Society</span>
          </h1>

          <Heading>
            A not-for-profit cooperative building digital products for social
            good
          </Heading>

          <div className="mb-12 text-lg sm:text-xl flex flex-col gap-2">
            <p>
              Our mission is to harness technology for the betterment of
              society, whether through client projects or in-house product
              development.
            </p>
            <p>
              Believing that people thrive when motivated by ownership and
              agency, we operate as a worker-owned cooperative.
            </p>
          </div>
        </Container>
      </Section>
      <Section light>
        <Container>
          <Heading>We can help you with</Heading>

          <div className="text-base sm:text-lg flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1 flex flex-col gap-4">
                <img
                  className="h-[6rem] aspect-square object-contain self-start"
                  alt="coding representation"
                  src="/images/code.svg"
                />
                <h3 className="text-lg sm:text-xl font-bold">
                  Getting your projects off the ground
                </h3>
                <p>
                  With our bespoke application development experience, no
                  requirement is too complex or ambitious. We will bring your
                  project to life with best practice and at pace.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <img
                  className="h-[6rem] aspect-square object-contain self-start"
                  alt="data representation"
                  src="/images/database.svg"
                />
                <h3 className="text-lg sm:text-xl font-bold">
                  Help you realise the value of your data
                </h3>
                <p>
                  We enjoy working across the data pipeline, from the
                  foundational "plumbing" and modelling to the last-mile
                  prediction and insights.
                </p>
              </div>
            </div>
            <p>
              With our agile, sprint-based approach, our engagements last as
              long as you need and evolve with your priorities. Read more on{" "}
              <Link href="/how">how we work</Link>.
            </p>
            <a
              data-umami-event="out-mail"
              href="mailto:hello@digitalsociety.coop"
              className="text-xl sm:text-2xl self-center my-4 p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
            >
              Start your project with us
            </a>
          </div>

          <Heading>Our clients include</Heading>

          <div className="flex flex-row flex-wrap justify-between">
            <Link
              className="mx-auto"
              event="out-dudley-editions"
              href="https://dudleyeditions.com/"
              target="_blank"
            >
              <Figure
                alt="Dudley Editions Logo"
                src="/images/dudley-editions.png"
                caption="Dudley Editions"
              />
            </Link>
            <Link
              className="mx-auto"
              event="out-lost-dot"
              href="https://www.lostdot.cc/"
              target="_blank"
            >
              <Figure
                alt="Lost Dot Logo"
                src="/images/lost-dot.webp"
                caption="Lost Dot"
              />
            </Link>
            <Link
              className="mx-auto"
              event="out-peterborough-city-council"
              href="https://www.peterborough.gov.uk/"
              target="_blank"
            >
              <Figure
                alt="Peterborough City Council Logo"
                src="/images/peterborough-city-council.png"
                caption="Peterborough City Council"
              />
            </Link>
            <Link
              className="mx-auto"
              event="out-turbine-education"
              href="https://www.turbine.education/"
              target="_blank"
            >
              <Figure
                alt="Turbine Education Logo"
                src="/images/turbine-education.webp"
                caption="Turbine Education"
              />
            </Link>
            <Link
              className="mx-auto"
              event="out-vouchsafe"
              href="https://vouchsafe.id/"
              target="_blank"
            >
              <Figure
                alt="Vouchsafe Logo"
                src="/images/vouchsafe.jpg"
                caption="Vouchsafe"
              />
            </Link>
            <Link
              className="mx-auto"
              event="out-youthlink-scotland"
              href="https://www.youthlink.scot/"
              target="_blank"
            >
              <Figure
                alt="YouthLink Scotland Logo"
                src="/images/youthlink-logo.svg"
                caption="YouthLink Scotland"
              />
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>What we're building</Heading>

          <div className="mb-6 text-base sm:text-lg">
            <p>Tools we're building ourselves for general use.</p>
          </div>

          <div className="mb-12">
            <ul className="flex flex-col gap-6">
              <Example
                hostname="epcdata.scot"
                description="An unofficial REST API for Scottish domestic Energy Performance Certificates (EPCs)."
                logo="/images/epcdata-scot.svg"
              />
              <Example
                hostname="healthdata.scot"
                description="An unofficial REST API for Scottish health service location data."
                logo="/images/healthdata-scot.svg"
              />
              <Example
                hostname="tapintodata.com"
                description="A minimalist platform to unlock the social value of public and private data."
                logo="/images/tap.svg"
              />
            </ul>
          </div>

          <Heading>Meet the team</Heading>
          <div className="flex flex-row flex-wrap justify-between gap-6">
            <Member
              name="Chris Connelly"
              src="/images/chris.jpg"
              title="Founder & all-rounder"
              description="Chat to him about Rust, running or coffee."
            />
            <Member
              name="Endre Kadas"
              src="/images/endre.jpg"
              title="Founder & all-rounder"
              description="Chat to him about DIY, ferments or gardening."
            />
          </div>
        </Container>
      </Section>
    </Page>
  );
}

function Example(props: {
  logo: string;
  hostname: string;
  description: string;
}): ReactNode {
  return (
    <li className="flex flex-row items-center gap-6 text-lg sm:text-xl">
      <img
        alt={`${props.hostname} logo`}
        src={props.logo}
        className="w-16 aspect-1"
      />
      <div className="flex flex-col gap-2">
        <Link href={`https://${props.hostname}`} target="_blank">
          {props.hostname}
        </Link>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

function Member(props: {
  name: string;
  src: string;
  title: string;
  description: string;
}): ReactNode {
  return (
    <div className="flex-1 flex flex-row gap-4 min-w-[280px]">
      <img
        className="h-[8rem] object-contain rounded-xl"
        alt={`Photo of ${props.name}`}
        src={props.src}
      />
      <div className="flex flex-col gap-2 align-start justify-end">
        <h3 className="text-lg sm:text-xl font-bold">{props.name}</h3>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
