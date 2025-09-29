import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";

export default function DudleyEditions(): ReactNode {
  return (
    <Page
      title="Projects | Dudley Editions"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Dudley Editions app."
    >
      <Section>
        <article className="w-full">
          <div className="mr-0 min-sm:mr-6 max-sm:w-full sm:max-w-1/2 flex flex-row gap-2 float-left">
            <img
              alt="Screenshot from Dudley Editions app showing the book library"
              src="/images/dudley-editions-screenshot-1.jpg"
              className="w-full"
            />
            <img
              alt="Screenshot from Dudley Editions app showing a book description"
              src="/images/dudley-editions-screenshot-2.jpg"
              className="w-full"
            />
            <img
              alt="Screenshot from Dudley Editions app showing my library"
              src="/images/dudley-editions-screenshot-3.jpg"
              className="w-full"
            />
          </div>
          <PageTitle>Dudley Editions</PageTitle>
          <p className="mb-6">
            <Strong>
              Creating connections through personalised audiobooks
            </Strong>
          </p>
          <p className="mb-5">
            <Link href="https://dudleyeditions.com/" target="_blank">
              Dudley Editions
            </Link>{" "}
            is a cross-platform (iOS and Android) mobile app that allows you to
            clone your voice and create and share audiobooks from your voice in
            minutes.
          </p>

          <p className="mb-5">
            We have been the development partner that helped the app go live on
            both app stores, integrated with both platorms' payment APIs and
            integrated with the text-to-speech service that drives the
            application. We continue to provide ongoing support.
          </p>
          <p>
            Built using Flutter and NestJS. Deployed to AWS via Github Actions.
          </p>
        </article>

        <p>
          <q className="italic">
            The team at Digital Society are a delight to work with. They're
            always professional, approachable and flexible. They're committed to
            delivering high quality products and we couldn't be happier with the
            ongoing partnership we have them.
          </q>{" "}
          — Blythe Robertson (Director, Dudley Editions)
        </p>
      </Section>
    </Page>
  );
}
