import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Container from "../components/Container";
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
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Our client projects include</Heading>

          <div className="flex flex-col gap-10">
            <ClientProject
              title="Orang Energy"
              href="https://orang.energy"
              screenshots={
                <>
                  <img
                    alt="Screenshot from Orang Energy showing the calculator page"
                    src="/images/orang-energy-screenshot-1.png"
                    className="h-[11rem] object-contain rounded-xl"
                  />
                  <img
                    alt="Screenshot from Orang Energy showing the installer-directory"
                    src="/images/orang-energy-screenshot-2.png"
                    className="h-[11rem] object-contain rounded-xl"
                  />
                </>
              }
              description="We developed the software for Orang Energy, an energy savings calculator, aimed at showing the savings achievable through sustainable technology in the home and connecting them with qualified local installers."
              stack="Built using Next.js and Tailwind CSS. Deployed to DigitalOcean App Platform via Github Actions."
              testimonial="Working in an agile way, Chris and Endre consistently met the aims of development sprints. Where the technical challenges arose or when late requirement changes were introduced, they communicated in a timely and proactive manner to solve any issues. Not only did they perform as an excellent software development team, they also showed great interest in the product design, and provided their own intelligent insights to help with the product design. I highly recommend Digital Society!"
            />
            <ClientProject
              title="Dudley Editions"
              href="https://dudleyeditions.com"
              screenshots={
                <>
                  <img
                    alt="Screenshot from Dudley Editions app showing the book library"
                    src="/images/dudley-editions-screenshot-2.jpg"
                    className="h-[12rem] object-contain rounded-xl"
                  />
                  <img
                    alt="Screenshot from Dudley Editions app showing a book description"
                    src="/images/dudley-editions-screenshot-1.jpg"
                    className="h-[12rem] object-contain rounded-xl"
                  />
                  <img
                    alt="Screenshot from Dudley Editions app showing my library"
                    src="/images/dudley-editions-screenshot-3.jpg"
                    className="h-[12rem] object-contain rounded-xl"
                  />
                </>
              }
              description="We are the development partner for Dudley Editions, a mobile app to create and share personalised audiobooks in minutes."
              stack="Built using Flutter and NestJS. Deployed to AWS via Github Actions and available on both iOS and Android app stores."
              testimonial="The team at Digital Society are a delight to work with. They're always professional, approachable and flexible. They're committed to delivering high quality products and we couldn't be happier with the ongoing partnership we have them."
            />
          </div>
        </Container>
      </Section>
      <Section light>
        <Container>
          <Heading>What we're building</Heading>

          <div className="mb-6 text-base sm:text-lg">
            <p>Tools we're building ourselves for general use.</p>
          </div>

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
        </Container>
      </Section>
      <Section>
        <Container>
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

function ClientProject(props: {
  title: string;
  href: string;
  screenshots: ReactNode;
  description: string;
  stack: string;
  testimonial?: string;
}): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={props.href}
        className="text-lg sm:text-xl font-bold mb-2"
        target="_blank"
      >
        {props.title}
      </Link>
      <div className="flex flex-row flex-wrap gap-4 items-center">
        {props.screenshots}
      </div>
      <p>{props.description}</p>
      <p>{props.stack}</p>
      {props.testimonial != null && (
        <q className="italic">{props.testimonial}</q>
      )}
    </div>
  );
}
