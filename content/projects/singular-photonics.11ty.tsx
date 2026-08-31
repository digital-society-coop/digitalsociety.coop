import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Thumbnail from "../../components/Thumbnail";

export default function SkillsTrack(): ReactNode {
  return (
    <Page
      title="Projects | Singular Photonics"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Singular Photonics."
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="Image of a Singular Photonics SPAD"
              src="/images/singular-photonics.png"
              thumbClassName="object-cover"
            />
          </div>
          <PageTitle>Singular Photonics</PageTitle>
          <p className="mb-6">
            <Strong>From light to insight</Strong>
          </p>
          <p className="mb-5">
            <Link href="https://singularphotonics.com/">
              Singular Photonics
            </Link>{" "}
            builds innovative SPAD (single photon avalanche diode) sensors
            capable of performing advanced digital processing directly within
            the sensor itself. A SPAD is able to detect single photons, and
            hence produces a significant volume of data that creates challenges
            for data transfer and power consumption. By performing processing
            on-chip, Singular Photonics' products offer compact,
            energy-efficient, and highly versatile solutions for a wide range of
            technological challenges. Applications span medical imaging (e.g.
            non-invasive blood flow monitoring), industrial automation,
            scientific instrumentation, environmental sensing, and quantum
            technologies.
          </p>
          <p>
            We worked with Singular Photonics as an embedded delivery partner,
            joining their engineering team to increase development capacity and
            accelerate key feature delivery.
          </p>
        </article>

        <p>
          <q className="italic">
            Thank you for all your help over the last few months, we have really
            appreciated the support.
          </q>{" "}
          — Shahida Imani (CEO, Singular Photonics)
        </p>
      </Section>
    </Page>
  );
}
