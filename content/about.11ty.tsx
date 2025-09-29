import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Link from "../components/Link";

export default function Insights(): ReactNode {
  return (
    <Page
      title="About"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. About us."
    >
      <Section>
        <PageTitle>
          We are an agile not-for-profit co-operative of technical experts
        </PageTitle>
        <Subheading>
          <span>
            <span className="text-oniViolet">Digital</span>&#8203;
            <span className="text-waveAqua2">Society</span>
          </span>{" "}
          was founded on the belief that technology can improve society.
        </Subheading>
        <p>
          Motivated by this belief we operate as a worker-owned not-for-profit
          co-operative and seek out projects inline with this mission.
        </p>
        <p>
          We bring our deep technical expertise and agile approach to all
          challenges and seek to build sustainable, cost-effective, and lasting
          solutions.{" "}
          <Link href="/how/">Read more about how we work {"\u2192"}</Link>
        </p>
        <Heading anchor="team">Meet the team</Heading>
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
