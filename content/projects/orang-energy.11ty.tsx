import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Thumbnail from "../../components/Thumbnail";

export default function OrangEnergy(): ReactNode {
  return (
    <Page
      title="Projects | Orang Energy"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Orang Energy energy savings calculator."
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="Screenshot from Orang Energy showing the calculator page"
              src="/images/orang-energy-screenshot-1.png"
            />
            <Thumbnail
              alt="Screenshot from Orang Energy showing the installer-directory"
              src="/images/orang-energy-screenshot-2.png"
            />
          </div>
          <PageTitle>Orang Energy</PageTitle>
          <p className="mb-6">
            <Strong>Helps to reduce your energy bills</Strong>
          </p>
          <p className="mb-5">
            <Link href="https://orang.energy/">Orang Energy</Link> is an energy
            savings calculator, aimed at showing the savings achievable through
            sustainable technology in the home and connecting homeowners with
            qualified local installers.
          </p>

          <p className="mb-5">
            <Link href="https://www.turbine.education/">Turbine Education</Link>{" "}
            originally approached us to build a heatpump installer directory in
            time for an event. User research revealed that users actually needed
            a holistic energy-saving calculator, and a more varied installer
            registry. Our agile, outcome-focused approach allowed us to pivot
            smoothly and deliver what became Orang Energy, a tool that better
            served users' needs.
          </p>
          <p className="mb-5">
            Built using Next.js, PostgreSQL and Tailwind CSS. Deployed to
            DigitalOcean App Platform via Github Actions.
          </p>
          <p>
            Enabling Orang Energy for Scottish users was an inspiration for{" "}
            <Link href="/projects/tap/">tap</Link> and{" "}
            <Link href="/projects/epcdata/">epcdata.scot</Link>.
          </p>
        </article>

        <p>
          <q className="italic">
            Working in an agile way, Chris and Endre consistently met the aims
            of development sprints. Where the technical challenges arose or when
            late requirement changes were introduced, they communicated in a
            timely and proactive manner to solve any issues. Not only did they
            perform as an excellent software development team, they also showed
            great interest in the product design, and provided their own
            intelligent insights to help with the product design. I highly
            recommend Digital Society!
          </q>{" "}
          — Andrew Hall (Founder & Director, Turbine Education)
        </p>
      </Section>
    </Page>
  );
}
