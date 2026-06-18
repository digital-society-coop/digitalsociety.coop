import { JSX } from "react";
import Container from "../../components/Container";
import Page from "../../components/Page";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import Strong from "../../components/Strong";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import BeforeAfter from "../../components/BeforeAfter";

export default function PensionSovereigntyPost(): JSX.Element {
  return (
    <Page
      title="Insights | We've had a glow up!"
      description="Our pension fund should be made to invest more than 2.5% in the UK."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <div className="max-w-[20rem] flex flex-row items-center gap-4 self-center">
              <img
                alt="Digital Society icon"
                src="/images/DigitalSociety_Icon_Colour_Dark.png"
                className="flex-1 rounded-xl overflow-hidden"
              />
              <img
                alt="Digital Society light logo"
                src="/images/DigitalSociety_Logo_Colour_Light.svg"
                className="flex-1 overflow-hidden"
              />
            </div>
            <div className="flex flex-col gap-4">
              <PageTitle>We've had a glow up!</PageTitle>
              <p>22/06/2026</p>
              <p>
                <Strong>
                  A new logo and a fresh lick of paint for our website.
                </Strong>
              </p>
            </div>
          </div>

          <p>
            After two years of using a logo we'd thrown together ourselves, we
            knew it was time for a change. We wanted something that truly
            reflected who we are and what we do, but we also knew that getting
            there would take a professional touch. We were recommended{" "}
            <Link href="https://annapatience.com/">Anna Patience</Link>, and
            couldn't be happier with her work!
          </p>

          <p>
            She helped us with far more than just the logo, and this post
            showcases all of it.
          </p>

          <Heading>The logo and icon</Heading>

          <div className="self-center flex flex-col md:flex-row gap-8 items-center md:items-end mb-4">
            <Figure
              alt="Old Digital Society logo"
              src="/images/old-logo.png"
              caption="Old logo and icon"
            />
            <p className="hidden md:block self-center">→</p>
            <p className="md:hidden">↓</p>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center sm:items-end">
              <Figure
                alt="Digital Society light logo"
                src="/images/DigitalSociety_Logo_Colour_Light.svg"
                caption="New light logo"
              />
              <Figure
                alt="Digital Society dark logo"
                src="/images/DigitalSociety_Logo_Colour_Dark.png"
                caption="New dark logo"
                className="bg-lighterYellow px-2"
              />
              <Figure
                alt="Digital Society icon"
                src="/images/DigitalSociety_Icon_Colour_Dark.png"
                caption="New icon"
              />
            </div>
          </div>
          <p>
            Previously, we used the same image for both our icon and logo. Now
            we have a proper logo with variations (more on that below) and a
            distinct icon. And we think it works on so many levels.
          </p>
          <p>
            The design is minimal and professional, yet full of meaning.
            Connecting the dots is what we do best: understanding complex
            domains and building effective digital solutions within them. And in
            the wider sense, technology can enable and bring people together
            into a <q>digital society</q>, if you will.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-end self-center gap-8 sm:gap-0">
            <Figure
              alt="CoTech listing"
              src="/images/cotech-partner.png"
              caption={
                <>
                  Monochrome logo on{" "}
                  <Link href="https://www.cotech.coop/" target="_blank">
                    CoTech
                  </Link>
                </>
              }
            />
            <Figure
              alt="Dovetail listing"
              src="/images/dovetail-partner.png"
              caption={
                <>
                  Partner listing on{" "}
                  <Link href="https://www.dovetail.network/" target="_blank">
                    Dovetail
                  </Link>
                </>
              }
            />
          </div>

          <Heading>New website design</Heading>

          <div className="max-w-100 self-center mb-4">
            <BeforeAfter
              before={{
                alt: "test",
                src: "/images/old-homepage.png",
              }}
              after={{
                alt: "test",
                src: "/images/new-homepage.png",
              }}
              caption="Drag to see the before and after of our homepage"
            />
          </div>

          <p>
            We are now using a shiny new font (
            <Link href="https://fonts.google.com/specimen/Outfit?preview.script=Latn">
              Outfit
            </Link>
            ), the existing colour palette more playfully and have a jazzy new
            background, all based on a helpful brand summary Anna gave us.
          </p>

          <Heading>Logo variations</Heading>

          <p>
            We also wanted a logo that has our full URL (to make us easier to
            find), which would be ideal for print, and a logo we can use on our
            other estates (such as{" "}
            <Link href="https://epcdata.scot" target="_blank">
              epcdata.scot
            </Link>
            ).
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-end self-center gap-8 sm:gap-0">
            <Figure
              alt="Digital Society Logo with .coop"
              src="/images/DigitalSociety_Logo_URL_Colour_Light.svg"
              caption="Logo with domain"
            />
            <Figure
              alt="Made by Digital Society Logo"
              src="/images/DigitalSociety_MadeBy_Logo_Colour_Light.svg"
              caption="Made by logo"
            />
          </div>
          <div className="max-w-100 self-center mb-4">
            <BeforeAfter
              before={{
                alt: "test",
                src: "/images/epcdata-before.png",
              }}
              after={{
                alt: "test",
                src: "/images/epcdata-after.png",
              }}
              caption={
                <>
                  Drag to see the before and after of{" "}
                  <Link href="https://epcdata.scot" target="_blank">
                    epcdata.scot
                  </Link>
                </>
              }
            />
          </div>
        </Container>
      </Section>
    </Page>
  );
}

function Figure(props: {
  alt: string;
  src: string;
  caption: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <figure className="w-50 flex flex-col gap-2 items-center">
      <img
        alt={props.alt}
        src={props.src}
        className={`self-center max-w-45 h-40 rounded-xl overflow-hidden ${props.className ?? ""} object-scale-down`}
      />
      <figcaption className="text-katanaGray text-center text-sm">
        {props.caption}
      </figcaption>
    </figure>
  );
}
