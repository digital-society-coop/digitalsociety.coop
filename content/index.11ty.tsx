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
            We build bespoke digital tools for complex requirements in web
            applications, data engineering and cloud.
          </Heading>

          <div className="mb-12 text-lg sm:text-xl flex flex-col gap-4">
            <p>
              With our agile, sprint-based approach, engagements last as long as
              you need and evolve with your priorities.
            </p>
            <p>
              We are motivated by our mission to harness technology to improve
              society and operate as a worker-owned not-for-profit co-operative.
            </p>
          </div>
        </Container>
      </Section>
      <Section light>
        <Container>
          <Heading>We get your projects off the ground</Heading>
          <p className="text-base sm:text-lg">
            With our bespoke application development experience, no requirement
            is too complex or ambitious. We will bring your project to life with
            best practice and at pace.
          </p>
          <h3 className="text-lg sm:text-xl font-bold mt-6">
            Some examples of our work
          </h3>
          <div className="flex flex-col gap-10">
            <Example
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
            <Example
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
          <a
            data-umami-event="out-mail"
            href="mailto:hello@digitalsociety.coop"
            className="text-xl sm:text-2xl self-center my-4 p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
          >
            Start your project with us
          </a>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>We help you realise the value of your data</Heading>

          <p className="text-base sm:text-lg">
            Poor fundamentals can limit the value you get from your data. We
            will help you lay your data foundations with our data engineering,
            modelling and integration expertise.
          </p>

          <h3 className="text-lg sm:text-xl font-bold mt-6">
            Some examples of our work
          </h3>
          <div className="flex flex-col gap-10">
            <Example
              title="tap"
              href="https://tapintodata.com"
              screenshots={
                <>
                  <img
                    alt="Screenshot of defining data in tap"
                    src="/images/data.png"
                    className="h-[11rem] object-contain rounded-xl"
                  />
                  <img
                    alt="Screenshot of defining models in tap"
                    src="/images/models.png"
                    className="h-[11rem] object-contain rounded-xl"
                  />
                  <img
                    alt="Screenshot of listing APIs in tap"
                    src="/images/apis.png"
                    className="h-[11rem] object-contain rounded-xl"
                  />
                </>
              }
              description="A SaaS platform allowing you to transform, join and serve data with flexible and powerful SQL queries and documented, secured APIs. We built this tool to unlock the social value of public and private data."
              stack="Built using Rust, Apache DataFusion and SolidJS. Deployed to AWS via Github Actions."
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Data portals powered by tap
              </h4>
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <img
                  alt="Screenshot of the home page for epcdata.scot"
                  src="/images/home-epcdata.png"
                  className="h-[11rem] object-contain rounded-xl"
                />
                <img
                  alt="Screenshot of the API documenation page for epcdata.scot"
                  src="/images/documentation-epcdata.png"
                  className="h-[11rem] object-contain rounded-xl"
                />
                <img
                  alt="Screenshot of the Example usage page for healthdata.scot"
                  src="/images/example-healthdata.png"
                  className="h-[11rem] object-contain rounded-xl"
                />
              </div>
              <p>
                <Link href="https://epcdata.scot" target="_blank">
                  epcdata.scot
                </Link>{" "}
                and{" "}
                <Link href="https://healthdata.scot" target="_blank">
                  healthdata.scot
                </Link>{" "}
                are data portals that enable consuming datasets from
                applications, removing the toil and enabling innovation. Powered
                by tap.
              </p>
              <p>
                Built using Fresh. Deployed to Kubernetes via Github Actions.
              </p>
            </div>
          </div>
          <a
            data-umami-event="out-mail"
            href="mailto:hello@digitalsociety.coop"
            className="text-xl sm:text-2xl self-center my-4 p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
          >
            Get more from your data
          </a>
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

function Example(props: {
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
