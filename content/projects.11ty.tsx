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
        <PageTitle>Some of our projects</PageTitle>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-4">
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
                  src="/images/dudley-editions-screenshot-2.jpg"
                  className="w-full object-cover"
                />
              </>
            }
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
