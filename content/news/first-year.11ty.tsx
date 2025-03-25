import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Container from "../../components/Container";
import List from "../../components/List";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";

export default function NotFound(): ReactNode {
  return (
    <Page
      title="News | First year"
      description="Digital Society, a not-for-profit cooperative building digital products for social good. First year."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt="Birthday cake with one candle"
              src="/images/cake.jpg"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>
                <span className="text-oniViolet">Digital</span>&#8203;
                <span className="text-waveAqua2">Society</span> is 1 years old!
              </PageTitle>
              <p>11/12/2024</p>
              <p>
                <Strong>Celebrating our first year projects.</Strong>
              </p>
            </div>
          </div>

          <p>
            One year ago today (11/12/2023), we took the leap into
            entrepreneurship and started working full-time at/on{" "}
            <span className="text-oniViolet">Digital</span>&#8203;
            <span className="text-waveAqua2">Society</span>, a not-for-profit
            worker’s cooperative building digital products for social good. Our
            mission: to create a sustainable, empowering work environment while
            tackling meaningful projects that better society.
          </p>
          <p>
            We first set out as a software development agency, aiming to tackle
            interesting real world problems, build relationships, and be
            inspired. With no previous agency or tendering experience, or
            portfolio, we found most of our projects through our network. We’ve
            met some awesome people and worked on exciting projects:
          </p>
          <List>
            <li>
              <Link href="https://orang.energy/">Orang Energy</Link>: We are the
              development partner for Orang Energy, helping people save energy
              and money through a comprehensive energy savings calculator and
              connecting them with qualified local installers.
            </li>
            <li>
              <Link href="https://dudleyeditions.com/">Dudley Editions</Link>:
              We are the development partner for Dudley Editions, helping to
              launch a mobile app for creating connections through personalised
              audiobooks.
            </li>
            <li>
              <Link href="https://www.peterborough.gov.uk/">
                Peterborough City Council
              </Link>
              : We worked with{" "}
              <Link href="https://www.datnexa.com/">Datnexa</Link> to help
              Peterborough City Council make better use of their data for
              technology enabled care.
            </li>
            <li>
              <Link href="https://www.vouchsafe.id/">Vouchsafe</Link>: We
              provided software development support to Vouchsafe, helping to
              increase access to public services and products by making use of
              the trusted relationships people already have.
            </li>
            <li>
              <Link href="https://www.lostdot.cc/">Lost Dot</Link>: We helped
              maintain and enhance the application site for Lost Dot, a charity
              organising long distance bike races.
            </li>
            <li>
              <Link href="https://www.datnexa.com/">WA Health</Link>: We
              provided technical project scoping advice to WA Health, in their
              mission to streamline GP workflows.
            </li>
          </List>
          <p>
            We have also managed to dedicate time to building an in-house data
            accessibility product. While we aren’t quite ready to unveil the
            product itself (watch this space!), an artefact of this work is{" "}
            <Link href="https://epcdata.scot">https://epcdata.scot</Link>, which
            simplifies programmatic access to Scottish domestic Energy
            Performance Certificates.
          </p>
          <p>
            Please don’t hesitate to get in touch if you have an interesting
            project you’d like to get off the ground. We’re particularly
            interested in data accessibility – publishing, integration, sharing,
            etc – or anything whose goal is to better society through software.
          </p>
          <p>
            We’d also love to chat if you are thinking of taking a leap and
            starting something similar, to share ideas, or to otherwise
            collaborate.
          </p>
          <p>We’re excited to see what year 2 brings!</p>
        </Container>
      </Section>
    </Page>
  );
}
