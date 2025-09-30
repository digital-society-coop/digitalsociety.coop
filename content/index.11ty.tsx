import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Link from "../components/Link";
import Heading from "../components/Heading";

export default function Home(): ReactNode {
  return (
    <Page
      title="Home"
      description="The home page for Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data."
    >
      <Section>
        <h1 className="text-8xl sm:text-9xl my-20">
          <span className="text-oniViolet">Digital</span>&#8203;
          <span className="text-waveAqua2">Society</span>
        </h1>

        <Heading>
          No requirement is too complex or ambitious. We build bespoke digital
          tools with best practice and at pace.
        </Heading>
        <p className="text-end">
          <Link href="/about/">More about us {"\u2192"}</Link>
        </p>
      </Section>
      <Section light>
        <div className="flex flex-col sm:flex-row justify-between gap-8 items-start">
          <Heading anchor="projects">
            Get your web, data and cloud projects off the ground
          </Heading>
          <a
            data-umami-event="out-mail"
            href="mailto:hello@digitalsociety.coop"
            className="text-nowrap text-xl sm:text-2xl self-center p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
          >
            Start your project with us
          </a>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mt-6">Featured projects</h3>
        <div className="flex flex-col sm:flex-row sm:justify-start gap-8">
          <Project
            href="/projects/tap/"
            title="tap"
            description="Unlocking the value of data"
            screenshots={
              <div className="max-h-[15rem] w-full self-center rounded-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
                <img
                  alt="Logo for tap"
                  src="/images/tap.svg"
                  className="w-full"
                />
              </div>
            }
          />
          <Project
            href="/projects/orang-energy/"
            title="Orang Energy"
            description="Helping reduce your energy bills"
            screenshots={
              <img
                alt="Screenshot from Orang Energy showing the calculator page"
                src="/images/orang-energy-screenshot-1.png"
                className="w-full object-cover"
              />
            }
          />
          <Project
            href="/projects/dudley-editions/"
            title="Dudley Editions"
            description="Creating connections through personalised audiobooks"
            screenshots={
              <>
                <img
                  alt="Screenshot from Dudley Editions app showing the book library"
                  src="/images/dudley-editions-screenshot-1.jpg"
                  className="w-full object-cover"
                />
                <img
                  alt="Screenshot from Dudley Editions app showing a book description"
                  src="/images/dudley-editions-screenshot-2.jpg"
                  className="w-full object-cover"
                />
                <img
                  alt="Screenshot from Dudley Editions app showing my library"
                  src="/images/dudley-editions-screenshot-3.jpg"
                  className="w-full object-cover"
                />
              </>
            }
          />
        </div>
        <p className="text-start">
          <Link href="/projects/">More projects {"\u2192"}</Link>
        </p>
      </Section>
      <Section>
        <Heading anchor="products">
          We help you realise the value of your data
        </Heading>

        <p className="text-base sm:text-lg">
          Poor fundamentals can limit the value you get from your data. We will
          help you lay your data foundations with our data engineering,
          modelling and integration expertise.
        </p>

        <a
          data-umami-event="out-mail"
          href="mailto:hello@digitalsociety.coop"
          className="text-xl sm:text-2xl self-center my-4 p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
        >
          Get more from your data
        </a>
      </Section>
    </Page>
  );
}

function Project(props: {
  href: string;
  title: string;
  description: string;
  screenshots: React.ReactNode;
}): React.ReactNode {
  return (
    <a
      href={props.href}
      className="flex-1 flex flex-col gap-4 p-4 rounded-xl bg-fujiWhite shadow items-start hover:underline"
    >
      <div className="max-h-[15rem] w-full self-center rounded-xl overflow-hidden aspect-320/213 flex gap-2 items-between">
        {props.screenshots}
      </div>
      <h2 className="text-xl sm:text-2xl text-springBlue min-w-0">
        <strong className="font-extrabold">{props.title}</strong>{" "}
        <span className="font-light">-</span> {props.description}
      </h2>
    </a>
  );
}
