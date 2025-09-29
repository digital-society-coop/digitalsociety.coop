import type { ReactNode } from "react";

import Page from "../components/Page";
import Link from "../components/Link";
import List from "../components/List";
import Section from "../components/Section";
import Strong from "../components/Strong";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PageTitle from "../components/PageTitle";
import Container from "../components/Container";

export default function PrivacyPolicy(): ReactNode {
  return (
    <Page
      title="Privacy policy"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Our privacy policy."
    >
      <Section>
        <PageTitle>Privacy policy</PageTitle>
        <Container>
          <p>
            The following is to explain your rights and give you the information
            you are entitled to under the General Data Protection Regulation
            (GDPR) and Data Protection Act 2018 (DPA 2018).
          </p>

          <Heading>How we get personal information and why we have it</Heading>

          <Subheading>This website</Subheading>
          <p>
            We don't collect any personal information on this website, nor do we
            store any cookies.
          </p>

          <Subheading>Clients &amp; partners</Subheading>
          <p>
            During the course of our work, we'll collect information about
            client representatives, partners and potential new members,
            including:
          </p>
          <List>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Employer</li>
            <li>Job title</li>
            <li>Testimonials</li>
            <li>Day rates</li>
            <li>Working hours and flexible working arrangements</li>
          </List>
          <p>
            We use several third-party services to do our work, which involves
            processing this data:
          </p>
          <List>
            <li>
              <a href="https://github.com/">GitHub</a> (
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                privacy policy
              </a>
              )
            </li>
            <li>
              <a href="https://www.google.com/drive/">Google Drive</a> (
              <a href="https://policies.google.com/privacy">privacy policy</a>)
            </li>
            <li>
              <a href="https://slack.com/">Slack</a> (
              <a href="https://slack.com/intl/en-gb/trust/privacy/privacy-policy">
                privacy policy
              </a>
              )
            </li>
          </List>
          <p>We do not collect any special category data.</p>
          <Heading>Your rights and contacting us</Heading>

          <p>Under data protection law, you have rights including:</p>

          <List>
            <li>
              <Strong>Right of access</Strong>: You have the right to ask us for
              copies of your personal information.
            </li>
            <li>
              <Strong>Right to rectification</Strong>: You have the right to ask
              us to rectify personal information you think is inaccurate. You
              also have the right to ask us to complete information you think is
              incomplete.
            </li>
            <li>
              <Strong>Right to erasure</Strong>: You have the right to ask us to
              erase your personal information in certain circumstances.
            </li>
            <li>
              <Strong>Right to restriction of processing</Strong>: You have the
              right to ask us to restrict the processing of your personal
              information in certain circumstances.
            </li>
            <li>
              <Strong>Right to object to processing</Strong>: You have the right
              to object to the processing of your personal information in
              certain circumstances.
            </li>
            <li>
              <Strong>Right to data portability</Strong>: You have the right to
              ask that we transfer the personal information you gave us to
              another organisation, or to you, in certain circumstances.
            </li>
          </List>

          <p>
            You are not required to pay any charge for exercising your rights.
            If you make a request, we have one month to respond to you.
          </p>

          <p>
            Please contact us at{" "}
            <Link href="mailto:support@digitalsociety.coop" target="_blank">
              support@digitalsociety.coop
            </Link>{" "}
            if you wish to make a request.
          </p>

          <p>
            Our postal address is Digital Society Ltd, Flat 2 10 Tinto Place,
            Edinburgh, EH6 5FL.
          </p>

          <Heading>Complaints</Heading>

          <p>
            You can complain to the ICO if you are unhappy with how we have used
            your data.
          </p>

          <p>
            Information Commissioner’s Office Wycliffe House Water Lane Wilmslow
            Cheshire SK9 5AF
          </p>

          <p>
            Helpline number:{" "}
            <Link href="tel:03031231113" target="_blank">
              0303 123 1113
            </Link>
          </p>

          <p>
            ICO website:{" "}
            <Link href="https://www.ico.org.uk" target="_blank">
              https://www.ico.org.uk
            </Link>
          </p>
        </Container>
      </Section>
    </Page>
  );
}
