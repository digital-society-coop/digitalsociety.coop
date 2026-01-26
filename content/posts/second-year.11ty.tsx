import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Container from "../../components/Container";
import List from "../../components/List";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";

export default function SecondYear(): ReactNode {
  return (
    <Page
      title="Insights | Second year"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our second year anniversary."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt="Sparkler (by KAVOWO from https://pixabay.com/photos/sparkler-spark-fireworks-light-4724867/)"
              src="/images/sparkler-4724867_640.jpg"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>
                <span className="text-oniViolet">Digital</span>&#8203;
                <span className="text-waveAqua2">Society</span> is 2 years old!
              </PageTitle>
              <p>20/01/2026</p>
              <p>
                <Strong>Celebrating our second year operating.</Strong>
              </p>
            </div>
          </div>

          <p className="mt-6">
            Just over a year ago we celebrated our{" "}
            <Link href="/posts/first-year/">first year</Link> and it's time for
            another retrospective post!
          </p>

          <Heading>Existing client work</Heading>
          <p>
            We've had the pleasure to continue working with and supporting
            clients from our first year:
          </p>
          <List>
            <li>
              Support, maintainance and smaller features for{" "}
              <Link href="/projects/dudley-editions/">Dudley Editions</Link>, a
              mobile app for creating connections through personalised
              audiobooks.
            </li>
            <li>
              Working with <Link href="https://www.datnexa.com/">Datnexa</Link>{" "}
              on some of their projects, including introducing data warehousing
              best practices in a care related setting and developing a media
              impact reporting tool for a public relations firm.
            </li>
            <li>
              Feature acceleration for{" "}
              <Link href="/projects/vouchsafe/">Vouchsafe</Link>, a platform
              that combines document checks, biometric vouching, and financial
              data verification to help organisations verify identities securely
              and fairly.
            </li>
          </List>

          <Heading>New clients</Heading>
          <p>Our new clients:</p>
          <List>
            <li>
              We built{" "}
              <Link href="/projects/skillstrack/">Youth Work SkillsTrack</Link>{" "}
              for{" "}
              <Link href="https://www.youthlink.scot/">YouthLink Scotland</Link>
              . This is now transforming how 20+ youth work organisations are
              capturing and reporting on the impact of youth work in Scotland
              and we are excited to support the wider roll out this year!
            </li>
            <li>
              We are helping{" "}
              <Link href="https://singularphotonics.com/">
                Singular Photonics
              </Link>{" "}
              with the development of drivers, SDKs and user interface
              applications for their single photon avalanche diode (SPAD)
              sensors. This is an exciting new domain for us, with applications
              including allergen detection and non-invasive health monitoring.
            </li>
            <li>
              <Link href="https://quotech.io/">Quotech</Link> is our latest
              client, who build truly useful insurance technology for
              underwriters and brokers. We are working with them to scale their
              platform for larger customers and transaction volumes.
            </li>
          </List>

          <Heading>Our own projects</Heading>
          <p>
            This year we launched{" "}
            <Link href="https://tapintodata.com/">tap</Link>, which makes it
            easy to create APIs from datasets. While we find great use for it
            for our projects, we have struggled to prioritise commercialisation
            efforts alongside client work.
          </p>
          <p>
            The most successful service we've launched using{" "}
            <Link href="https://tapintodata.com/">tap</Link> is{" "}
            <Link href="https://epcdata.scot/">epcdata.scot</Link>, serving
            Scottish energy performance certificate (EPC) data via API. It gets
            organic weekly sign ups and has served around 310,000 requests to
            date since we started counting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <img
              alt="Screenshot of web analytics platform daily visitors for our post"
              src="/images/internet-fame.png"
              className="self-center h-[200px] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4 flex-1">
              <p>
                For political, financial and "scratching an itch" reasons, we
                made the decision to migrate our infrastructure from US cloud
                providers to Hetzner. Our{" "}
                <Link href="/posts/migrating-to-hetzner-cloud/">
                  post about this
                </Link>{" "}
                blew up (by our standards) getting over 41k views in a single
                day after someone (not us) posted it on{" "}
                <Link href="https://news.ycombinator.com/item?id=45614922">
                  Hacker News
                </Link>
                . Contrary to some Reddit commentators prophesizing the
                overwhelming time we would need to spend maintaining our
                less-managed infrastructure, this has not (yet) been the case.
                There was however a major{" "}
                <Link href="https://www.bbc.co.uk/news/articles/c0jdgp6n45po">
                  AWS outage on October 20th
                </Link>
                , a few days after our post (also not us).
              </p>
              <p>
                We also started working on an exciting new app - watch
                this space!
              </p>
            </div>
          </div>
          <Heading>Community</Heading>
          <p>
            We made a bit more effort to participate in like-minded communities.
          </p>
          <p>
            In March we attended our first{" "}
            <Link href="https://www.cotech.coop/">CoTech</Link> members meeting
            in London and met a lot of great people.
          </p>
          <p>
            In Edinburgh, we most enjoy Meetups organised by{" "}
            <Link href="https://thisiscodebase.com/greentech-futures">
              Greentech Futures
            </Link>
            , as they always have inspiring talks and an engaged crowd for
            networking. We have also enjoyed meeting people during co-working
            sessions with the{" "}
            <Link href="https://luma.com/founders-hub">Founders Hub</Link>.
          </p>
          <p>
            Online, we are now part of{" "}
            <Link href="https://www.dovetail.network/">Dovetail</Link> and you
            can chat with us on{" "}
            <Link href="https://www.agenciesforgood.org/">
              Agencies for Good
            </Link>
            .
          </p>
          <Subheading>
            As always,{" "}
            <Link href="mailto:hello@digitalsociety.coop">get in touch</Link> if
            you have any projects you need help with or would simply like a
            chat!
          </Subheading>
          <p>On to the next one!</p>
        </Container>
      </Section>
    </Page>
  );
}
