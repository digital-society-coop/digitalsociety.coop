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
            Just over a year we celebrated our{" "}
            <Link href="/posts/first-year/">first year</Link> and it's time for
            another retrospective post!
          </p>

          <Heading>Existing client work</Heading>
          <p>
            We've had the pleasure to continue work with and support clients
            from our first year:
          </p>
          <List>
            <li>
              Support, maintainance and smaller features for{" "}
              <Link href="/projects/dudley-editions/">Dudley Editions</Link>.
            </li>
            <li>
              Subcontracted for{" "}
              <Link href="https://www.datnexa.com/">Datnexa</Link> to introduce
              data warehousing best practices in a care related setting.
            </li>
            <li>
              Did further feature acceleration for{" "}
              <Link href="/projects/vouchsafe/">Vouchsafe</Link>.
            </li>
          </List>

          <Heading>New clients</Heading>
          <p>Our new clients:</p>
          <List>
            <li>
              We built{" "}
              <Link href="/projects/vouchsafe/">Youth Work SkillsTrack</Link>{" "}
              for{" "}
              <Link href="https://www.youthlink.scot/">YouthLink Scotland</Link>
              . This is now transforming how 20+ youth work organisations are
              capturing and reporting on the impact of youth work in Scotland
              and are excited to support the wider roll out this year!
            </li>
            <li>
              We help{" "}
              <Link href="https://singularphotonics.com/">
                Singular Photonics
              </Link>{" "}
              with the development of drivers, SDKs and user interface
              applications for their single photon avalanche diode (SPAD)
              sensors. This is a completely new domain for us, with exciting
              applications, such non-invasive health monitoring!
            </li>
            <li>
              <Link href="https://quotech.io/">Quotech</Link> is our latest
              client, who have built a tech platform for insurance underwiting
              and continue to innovate in this space.
            </li>
          </List>
          <p>On to the next one!</p>

          <Heading>Our projects</Heading>
          <p>
            This year we launched{" "}
            <Link href="https://tapintodata.com/">tap</Link>, which makes it
            easy to create APIs from datasets. While we find great use for it
            for our projects, we did not have great success in commercialising
            it yet, albeit we've also prioritised client work.
          </p>
          <p>
            The most successful service we've launched on top of{" "}
            <Link href="https://tapintodata.com/">tap</Link> is{" "}
            <Link href="https://epcdata.scot/">epcdata.scot</Link> serving
            Scottish energy performance certificate (EPC) data via API. It gets
            weekly sign ups and have served around 310k requests to date since
            we started counting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <img
              alt="Screenshot of web analytics platform daily visitors for our post"
              src="/images/internet-fame.png"
              className="self-center h-[200px] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4 flex-1">
              <p>
                Due to political, financial and because we had an "itch to
                scratch", we made the decision to migrate our infrastructure
                from US cloud providers to Hetzner. Our{" "}
                <Link href="/posts/migrating-to-hetzner-cloud/">
                  post about this
                </Link>{" "}
                blew up (by our standards) getting over 41k views in a single
                day after someone (not us) posted it on{" "}
                <Link href="https://news.ycombinator.com/item?id=45614922">
                  Hacker News
                </Link>
                . Contrary to some of the commenters (mostly on Reddit)
                prophesizing the overwhelming time we need to spend maintinging
                our new more bare-bones infrastructure, this has not yet been
                the case. There was a major{" "}
                <Link href="https://www.bbc.co.uk/news/articles/c0jdgp6n45po">
                  AWS outage on October 20th
                </Link>{" "}
                however, a few days after our post.
              </p>
              <p>
                We also started to work on our friend's exciting new app, watch
                this space!
              </p>
            </div>
          </div>
          <Heading>Community</Heading>
          <p>
            We made a bit more effort to be part of harmonious communities. In
            March we attended our first{" "}
            <Link href="https://www.cotech.coop/">CoTech</Link> members meeting
            in London and met a lot of great, like minded people. In Edinburgh,
            we most enjoy Meetups organised by{" "}
            <Link href="https://thisiscodebase.com/greentech-futures">
              Greentech Futures
            </Link>
            , as they always have inspiring talks and enjoyed meeting people
            during our co-working sessions with the{" "}
            <Link href="https://luma.com/founders-hub">Founders Hub</Link>. We
            are now part of{" "}
            <Link href="https://www.dovetail.network/">Dovetail</Link> and can
            chat with us on{" "}
            <Link href="https://www.agenciesforgood.org/">
              Agencies for Good
            </Link>
            .
          </p>
          <Subheading>
            As always,{" "}
            <Link href="mailto:hellog@digitalsociety.coop">get in touch</Link>{" "}
            if you have any projects you need help with or would simply like a
            chat!
          </Subheading>
          <p>On to the next one!</p>
        </Container>
      </Section>
    </Page>
  );
}
