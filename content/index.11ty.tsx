import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading.tsx";
import DotRotation from "../components/DotRotation";
import Card, { Img } from "../components/Card";

export default function Home(): ReactNode {
  return (
    <Page
      title="Home"
      description="Digital Society, a not-for-profit co-operative helping you connect the dots and get your projects off the ground with best practice and at pace."
    >
      <Section background={<DotRotation side="right" />}>
        <div className="sm:w-[70%] pb-12">
          <h1 className="text-4xl sm:text-5xl my-14 text-oniViolet font-semibold">
            We connect the dots on your complex software problems.
          </h1>

          <h2 className="text-2xl sm:text-3xl">
            We are a not-for-profit co-operative of technical experts, building
            bespoke digital solutions with best practice and at pace.
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
      <Section color="light" anchor="services">
        <div>
          <Heading>Our services</Heading>
          <Subheading>We can help you with:</Subheading>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-8 sm:gap-12">
          <Service
            title="Web applications"
            description="We build high performance web services, whether they are APIs, platforms or full-stack applications."
          />
          <Service
            title="Native applications"
            description="Mobile applications, native desktop applications with a GUI or just a CLI, we built them all."
          />
          <Service
            title="DevOps bootstrapping"
            description="We'll help with your infrastructure, optimize your cloud spending, and transform how your team ships code."
          />
        </div>
        <Subheading>We offer two delivery models:</Subheading>
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-start gap-8 sm:gap-12">
          <DeliveryWay
            title="End-to-end delivery partner"
            description="We'll take responsibility for the full software life-cycle, from design through to the building and finally operating. Our sprint-based approach adapts to your timeline and evolves with your priorities."
          />
          <DeliveryWay
            title="Staff augmentation"
            description="Best suited for for organisations that already have an engineering team that need to accelerate development with people who slot in to your ways of working and deliver from day one."
          />
        </div>
        <Subheading>
          We are the technical leads you know you need. We take the effort to
          understand the domain you operate in through a process of co-design
          and research to ensure you ship exactly what you need, at the time you
          need it and in a way that's suitable immediately and in the future.
          You can rely on us to build confidence in your project with your
          internal and external stakeholders and drive delivery forward.
        </Subheading>
      </Section>
      <Section color="green" anchor="projects">
        <Heading>Featured Projects</Heading>
        <div className="flex flex-col sm:flex-row sm:justify-start gap-8 sm:gap-16">
          <Card
            href="/projects/vouchsafe/"
            title="Vouchsafe"
            description="Inclusive identity verification"
            className="bg-sumiInk1"
            screenshots={(
              <Img
                alt="Logo for Youth Work SkillsTrack"
                src="/images/vouchsafe.png"
                object="contain"
              />
            )}
          />
          <Card
            href="/projects/skillstrack/"
            title="Youth Work SkillsTrack"
            description="Recording and demonstrating the impact of youth work"
            className="bg-white"
            screenshots={(
              <Img
                  alt="Logo for Youth Work SkillsTrack"
                  src="/images/youthlink-logo.png"
                object="contain"
              />
            )}
          />
          <Card
            href="/projects/tap/"
            title="tap"
            description="Unlocking the value of data"
            className="bg-sumiInk1"
            screenshots={(
              <Img
                alt="Logo for tap"
                src="/images/tap.svg"
                object="contain"
              />
            )}
          />
        </div>
        <a
          href="/projects/"
          className="mt-4 self-end text-nowrap p-2 rounded-lg border border-oniViolet2 hover:outline outline-oniViolet2 bg-oniViolet2! hover:bg-oniViolet!"
        >
          More projects {"→"}
        </a>
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
    <div className="flex-[1_0_30%] flex flex-col gap-4 py-4 px-6 rounded-xl bg-waveAqua2/80 shadow justify-start">
      <h2 className="text-xl sm:text-2xl min-w-0 font-bold">{props.title}</h2>
      <p className="min-w-0">{props.description}</p>
    </div>
  );
}

function DeliveryWay(props: {
  title: string;
  description: string;
}): React.ReactNode {
  return (
    <div className="flex-[1_0_45%] flex flex-col gap-4 py-4 px-6 rounded-xl bg-oniViolet2 shadow justify-start">
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
