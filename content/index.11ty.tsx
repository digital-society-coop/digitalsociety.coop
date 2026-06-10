import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Heading from "../components/Heading";
import DotRotation from "../components/DotRotation";
import Project from "../components/Project";

export default function Home(): ReactNode {
  return (
    <Page
      title="Home"
      description="Digital Society, a not-for-profit co-operative helping you connect the dots and get your projects off the ground with best practice and at pace."
    >
      <Section background={<DotRotation side="right" />}>
        <div className="sm:w-[70%] pb-12">
          <h1 className="text-4xl sm:text-5xl my-20 text-oniViolet font-semibold">
            Digital Society is founded on the belief that technology can improve
            society.
          </h1>

          <h2 className="text-2xl sm:text-3xl">
            We connect the dots on your most complex and ambitious projects,
            building bespoke digital solutions with best practice and at pace.
          </h2>
          <p className="text-end mt-12">
            <a
              href="/about/"
              className="mt-12 text-nowrap self-center p-2 rounded-lg border border-waveAqua2 hover:outline outline-waveAqua2 bg-waveAqua2! hover:bg-waveAqua1! text-sumiInk1!"
            >
              More about us {"→"}
            </a>
          </p>
        </div>
      </Section>
      <Section color="green">
        <Heading anchor="projects">Featured Projects</Heading>
        <div className="flex flex-col sm:flex-row sm:justify-start gap-8 sm:gap-16 sm:px-12">
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
              <div className="p-4 max-h-[15rem] w-full self-center rounded-t-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
                <img
                  alt="Logo for tap"
                  src="/images/tap.svg"
                  className="w-full"
                />
              </div>
            }
          />
        </div>
        <a
          href="/projects/"
          className="mt-4 self-end text-nowrap p-2 rounded-lg border border-oniViolet2 hover:outline outline-oniViolet2 bg-oniViolet2! hover:bg-oniViolet!"
        >
          More projects {"→"}
        </a>
      </Section>
      <Section color="light">
        <Heading anchor="services">
          Flexible services that adapt to your organisation
        </Heading>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-8 sm:gap-12 sm:px-12 mb-12">
          <Service
            title="Agile product development"
            description="Whether web, mobile, or custom software, our sprint-based approach adapts to your timeline and evolves with your priorities."
          />
          <Service
            title="Staff augmentation"
            description="Need to accelerate development with people who deliver from day one? That's our specialty."
          />
          <Service
            title="Data engineering"
            description="Get more from your data by building it on solid foundations. We handle the engineering, modeling, and integration."
          />
          <Service
            title="DevOps bootstrapping"
            description="We'll help with your infrastructure, optimize your cloud spending, and transform how your team ships code."
          />
        </div>
      </Section>
      <Section background={<DotRotation side="left" />}>
        <Quotes>
          <Quote
            quote="We couldn't be happier with the experience we've had of working with Chris and Endre."
            author="Jane Dailly (National Grants Manager, YouthLink Scotland)"
          />
          <Quote
            quote="Digital Society exceeded our expectations and put us ahead of our anticipated schedule."
            author="Jaye Hackett (CTO, Vouchsafe)"
          />
          <Quote
            quote="I highly recommend Digital Society!"
            author="Andrew Hall (Founder & Director, Turbine Education)"
          />
          <Quote
            quote="The team at Digital Society are a delight to work with."
            author="Blythe Robertson (Director, Dudley Editions)"
          />
        </Quotes>
        <a
          data-umami-event="out-mail"
          href="mailto:hello@digitalsociety.coop"
          className="text-nowrap text-lg sm:text-xl self-center p-3 rounded-xl border border-waveAqua2 hover:outline outline-waveAqua2 bg-waveAqua2! hover:bg-waveAqua1! text-sumiInk1! mb-12"
        >
          Say hello! 👋
        </a>
      </Section>
    </Page>
  );
}

function Service(props: {
  title: string;
  description: string;
}): React.ReactNode {
  return (
    <div className="flex-[1_0_45%] flex flex-col gap-4 p-4 rounded-xl bg-oniViolet2 shadow justify-start">
      <h2 className="text-xl sm:text-2xl min-w-0 font-bold">{props.title}</h2>
      <p className="min-w-0">{props.description}</p>
    </div>
  );
}

function Quotes(props: { children: React.ReactNode }): React.ReactNode {
  return (
    <div className="slideshow-container relative self-center w-full max-w-2xl h-50 overflow-hidden cursor-pointer">
      <style>
        {`
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            5% { opacity: 1; transform: translateY(0); }
            20% { opacity: 1; transform: translateY(0); }
            25% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 0; transform: translateY(-20px); }
        }

        .quote {
            animation: fadeInOut 16s infinite;
        }

        .quote:nth-child(1) {
            animation-delay: 0s;
        }

        .quote:nth-child(2) {
            animation-delay: 4s;
        }

        .quote:nth-child(3) {
            animation-delay: 8s;
        }

        .quote:nth-child(4) {
            animation-delay: 12s;
        }

        .slideshow-container:hover .quote {
            animation-play-state: paused;
        }
      `}
      </style>
      {props.children}
    </div>
  );
}

function Quote(props: { quote: string; author: string }): React.ReactNode {
  return (
    <div className="quote absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0">
      <q className="quote-text text-lg sm:text-xl leading-relaxed mb-2 italic">
        {props.quote}
      </q>
      <p className="sm:text-lg">— {props.author}</p>
    </div>
  );
}
