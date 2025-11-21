import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Thumbnail from "../../components/Thumbnail";

export default function Vouchsafe(): ReactNode {
  return (
    <Page
      title="Projects | Vouchsafe"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Vouchsafe inclusive identity verification platform."
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="A collage of screenshots from Vouchsafe showing the various functions of the app"
              src="/images/vouchsafe.png"
            />
            <Thumbnail
              alt="Screenshots of the Vouchsafe mobile verification flow"
              src="/images/vouchsafe-mobile.png"
            />
            <Thumbnail
              alt="Screenshot of the Vouchsafe web dashboard"
              src="/images/vouchsafe-dashboard.png"
            />
          </div>
          <PageTitle>Vouchsafe</PageTitle>
          <p className="mb-6">
            <Strong>Inclusive identity verification</Strong>
          </p>
          <p className="mb-5">
            <Link href="https://vouchsafe.id">Vouchsafe</Link> is building a
            more inclusive approach to identity verification, enabling
            businesses to onboard more people with less friction, including
            those without traditional photo ID. Their platform combines document
            checks, biometric vouching, and financial-data verification to help
            organisations verify identities securely and fairly.
          </p>

          <p className="mb-5">
            We worked with Vouchsafe as an embedded delivery partner, joining
            their engineering team to increase development capacity and
            accelerate key feature delivery. Operating through one-week,
            outcome-focused sprints, we took ownership of defined feature areas
            including third-party integrations, workflow automation, and
            improvements to the core verification API.
          </p>
          <p className="mb-5">
            By working collaboratively through shared planning, reviews, and
            continuous communication, we ensured alignment with Vouchsafe’s
            priorities and supported the rapid evolution of their inclusive
            identity platform.
          </p>
          <p className="mb-5">
            Technologies used are Next.js, PostgreSQL and Tailwind CSS. Deployed
            to AWS and Vercel via Github Actions.
          </p>
        </article>

        <p>
          <q className="italic">
            Digital Society exceeded our expectations and put us ahead of our
            anticipated schedule. They helped us out on thorny technical
            challenges, delivering from day 1 and seamlessly slotting into our
            team. We wouldn't hesitate to work with them again! — Jaye Hackett
            (CTO, Vouchsafe)
          </q>
        </p>
      </Section>
    </Page>
  );
}
