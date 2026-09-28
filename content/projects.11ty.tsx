import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Card, { Img } from "../components/Card";

export default function Projects(): ReactNode {
  return (
    <Page
      title="Projects"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our projects."
    >
      <Section color="green">
        <PageTitle>Some of our projects</PageTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 mb-16">
          <Card
            href="/projects/singular-photonics/"
            title="Singular Photonics"
            description="From light to insight"
            screenshots={
              <Img
                alt="Image of a Singular Photonics SPAD"
                src="/images/singular-photonics.png"
              />
            }
          />
          <Card
            href="/projects/vouchsafe/"
            title="Vouchsafe"
            description="Inclusive identity verification"
            className="bg-sumiInk1"
            screenshots={
              <Img
                alt="Logo for Youth Work SkillsTrack"
                src="/images/vouchsafe.png"
                object="contain"
              />
            }
          />
          <Card
            href="/projects/skillstrack/"
            title="Youth Work SkillsTrack"
            description="Recording and demonstrating the impact of youth work"
            className="bg-white"
            screenshots={
              <Img
                alt="Logo for Youth Work SkillsTrack"
                src="/images/youthlink-logo.png"
                object="contain"
              />
            }
          />
          <Card
            href="/projects/tap/"
            title="tap"
            description="Unlocking the value of data"
            className="bg-sumiInk1"
            screenshots={
              <Img alt="Logo for tap" src="/images/tap.svg" object="contain" />
            }
          />
          <Card
            href="/projects/orang-energy/"
            title="Orang Energy"
            description="Helping reduce your energy bills"
            screenshots={
              <Img
                alt="Screenshot from Orang Energy showing the calculator page"
                src="/images/orang-energy-screenshot-1.png"
              />
            }
          />
          <Card
            href="/projects/epcdata/"
            title="epcdata.scot"
            description="Serving Scottish EPC data as an API"
            screenshots={
              <Img
                alt="Screenshot of epcdata.scot statistics map"
                src="/images/epcdata-example.png"
              />
            }
          />
          <Card
            href="/projects/dudley-editions/"
            title="Dudley Editions"
            description="Creating connections through personalised audiobooks"
            screenshots={
              <>
                <Img
                  alt="Screenshot from Dudley Editions app showing the book library"
                  src="/images/dudley-editions-screenshot-1.jpg"
                  className="w-full object-cover rounded-tl-xl"
                />
                <Img
                  alt="Screenshot from Dudley Editions app showing a book description"
                  src="/images/dudley-editions-screenshot-2.jpg"
                  className="w-full object-cover"
                />
                <Img
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
