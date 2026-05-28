import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";

export default function Projects(): ReactNode {
  return (
    <Page
      title="Projects"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our projects."
    >
      <Section color="green">
        <PageTitle>Some of our projects</PageTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 sm:px-12 mb-16">
          <Project
            href="/projects/vouchsafe/"
            title="Vouchsafe"
            description="Inclusive identity verification"
            screenshots={
              <div className="max-h-[15rem] w-full h-full self-center rounded-t-xl overflow-hidden flex flex-col justify-center bg-sumiInk1">
                <img
                  alt="Logo for Youth Work SkillsTrack"
                  src="/images/vouchsafe.png"
                  className="object-contain h-full"
                />
              </div>
            }
          />
          <Project
            href="/projects/skillstrack/"
            title="Youth Work SkillsTrack"
            description="Recording and demonstrating the impact of youth work"
            screenshots={
              <div className="max-h-[15rem] w-full h-full self-center rounded-t-xl overflow-hidden flex flex-col justify-center bg-white">
                <img
                  alt="Logo for Youth Work SkillsTrack"
                  src="/images/youthlink-logo.png"
                  className="object-contain h-full"
                />
              </div>
            }
          />
          <Project
            href="/projects/tap/"
            title="tap"
            description="Unlocking the value of data"
            screenshots={
              <div className="max-h-[15rem] w-full self-center rounded-t-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
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
                className="w-full object-cover rounded-t-xl"
              />
            }
          />
          <Project
            href="/projects/epcdata/"
            title="epcdata.scot"
            description="Serving Scottish EPC data as an API"
            screenshots={
              <img
                alt="Screenshot of epcdata.scot statistics map"
                src="/images/epcdata-example.png"
                className="w-full object-cover rounded-t-xl"
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
                  className="w-full object-cover rounded-tl-xl"
                />
                <img
                  alt="Screenshot from Dudley Editions app showing a book description"
                  src="/images/dudley-editions-screenshot-2.jpg"
                  className="w-full object-cover"
                />
                <img
                  alt="Screenshot from Dudley Editions app showing my library"
                  src="/images/dudley-editions-screenshot-2.jpg"
                  className="w-full object-cover rounded-tr-xl"
                />
              </>
            }
          />
        </div>
      </Section>
    </Page>
  );
}
