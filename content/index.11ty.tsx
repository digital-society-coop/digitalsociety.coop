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
            href="/projects/vouchsafe/"
            title="Vouchsafe"
            description="Inclusive identity verification"
            screenshots={
              <div className="max-h-[15rem] w-full h-full self-center rounded-xl overflow-hidden flex flex-col justify-center bg-sumiInk1">
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
              <div className="max-h-[15rem] w-full h-full self-center rounded-xl overflow-hidden flex flex-col justify-center bg-white">
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
              <div className="max-h-[15rem] w-full self-center rounded-xl overflow-hidden bg-sumiInk1 aspect-320/213 flex flex-col justify-center">
                <img
                  alt="Logo for tap"
                  src="/images/tap.svg"
                  className="w-full"
                />
              </div>
            }
          />
        </div>
        <p className="text-start">
          <Link href="/projects/">More projects {"\u2192"}</Link>
        </p>
      </Section>
      <Section>
        <div className="flex flex-col sm:flex-row justify-between gap-8 items-start">
          <Heading anchor="services">
            Flexible services that adapt to your organisation
          </Heading>
          <a
            data-umami-event="out-mail"
            href="mailto:hello@digitalsociety.coop"
            className="text-nowrap text-xl sm:text-2xl self-center p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
          >
            Tell us how we can help
          </a>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-8">
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
        <Quotes>
          <Quote
            quote="We couldn’t be happier with the experience we’ve had of working with Chris and Endre."
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

function Service(props: {
  title: string;
  description: string;
}): React.ReactNode {
  return (
    <div className="flex-[1_0_45%] flex flex-col gap-4 p-4 rounded-xl bg-sumiInk2 shadow justify-start">
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
