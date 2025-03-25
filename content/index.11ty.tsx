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
      description="Digital Society, a not-for-profit cooperative building digital products for social good | Home page"
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
          <Heading>
            We get your projects off the ground
          </Heading>

          <div className="text-base sm:text-lg flex flex-col gap-4">
            <p>
              <Link event="out-mail" href="mailto:hello@digitalsociety.coop">
                Get in touch
              </Link>{" "}
              if you have a project you want to kick-start with best practices
              and at pace.
            </p>
            <p>We have extensive experience in:</p>
            <div className="flex flex-row flex-wrap justify-between">
              <Figure
                alt="coding representation"
                src="/images/code.svg"
                caption="Web and application development"
              />
              <Figure
                alt="data representation"
                src="/images/database.svg"
                caption="Data engineering"
              />
              <Figure
                alt="cloud representation"
                src="/images/cloud.svg"
                caption="Cloud engineering"
              />
            </div>
            <p>
              We recognize that development extends far beyond delivery and
              ensure that we meet evolving needs and remain sustainable over
              time. Read more on <Link href="/how">how we work</Link>.
            </p>
          </div>

          <Heading>Who we've worked with</Heading>

          <div className="flex flex-row flex-wrap justify-between">
            <Link
              className="mx-auto"
              event="out-dudley-editions"
              href="https://dudleyeditions.com/"
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
            >
              <Figure
                alt="Vouchsafe Logo"
                src="/images/vouchsafe.jpg"
                caption="Vouchsave"
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
