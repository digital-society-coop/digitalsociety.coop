import type { ReactNode } from "react";

import Page from "../components/Page";
import Section from "../components/Section";
import Container from "../components/Container";
import Strong from "../components/Strong";
import Link from "../components/Link";
import List from "../components/List";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PageTitle from "../components/PageTitle";

export default function How(): ReactNode {
  return (
    <Page
      title="How we work"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. How we work."
    >
      <Section>
        <PageTitle>How we work</PageTitle>
        <Container>
          <Heading>Agile practices</Heading>

          <p>
            We subscribe to the{" "}
            <Link
              href="https://agilemanifesto.org/principles.html"
            >
              principles behind the Agile Manifesto
            </Link>{" "}
            and this is reflected in how we work:
          </p>

          <List>
            <li>
              We break down pieces of work into smaller deliverable chunks.
            </li>
            <li>
              We consider automated release and test pipelines a critical part
              of software we deliver, allowing us to release frequently and
              fearlessly.
            </li>
            <li>
              We communicate frequently, but not unnecessarily, both
              synchronously and asynchronously.
            </li>
            <li>
              We aim for flexible arrangements with clients in which we can
              always address the highest priority work in the face of changing
              requirements.
            </li>
          </List>

          <Heading>Our approach</Heading>

          <p>
            We approach our engagements and deliverables with an iterative flow
            through the following phases:
          </p>

          <Subheading>Discovery</Subheading>

          <p>
            The aim of this phase is to gain context of the work, assess the
            best approach and better predict what lies ahead. The typical
            artefacts produced at this stage would be:
          </p>

          <List>
            <li>
              <Strong>Decision logs</Strong>: Our most frequently produced
              documentation, underpinning our technical decision making.
            </li>
            <li>
              <Strong>Technical documentation</Strong>: Mostly applicable at the
              beginning of engagements, for projects that do not already have
              architecture diagrams or a documented data model. Artefacts are
              considered "living documents" and will be updated as the software
              evolves. In our typical work, documentation is informed by the
              Decision Logs.
            </li>
            <li>
              <Strong>Risk register</Strong>: As we gain understanding of a
              project, we may produce a technical risk register to manage
              technical debt and other technical risks. This is a living
              document, with the initial version produced at the beginning of an
              engagement. This supports conversations with clients about
              managing technical risks and prioritising their mitigation (or
              not, if the risk appetite is high).
            </li>
          </List>

          <Subheading>Delivery</Subheading>

          <p>
            In this phase we deliver the work agreed in the Discovery phase to
            the standards defined in our "Definition of done".
          </p>

          <p>
            While we take reasonable measures to manage uncertainty (e.g. by
            breaking down work and undertaking Discovery), our agile practices
            allow us to change course in the face of changing requirements,
            priorities, or uncovering "unknown unknowns".
          </p>

          <Subheading>Reflection and planning</Subheading>

          <p>
            We demonstrate functionality and gather feedback continuously as we
            deliver work, however this final phase allows for a retrospective of
            the outcome and identifying process improvements.
          </p>

          <p>
            It is also when upcoming work can be prioritised and planned,
            kicking off the Discovery phase of the next iteration.
          </p>

          <Heading>Decision making</Heading>

          <p>
            Decisions are made daily about architecture, implementation, future
            direction, technology choices, etc. We believe that capturing these
            in a lightweight and standardised format has benefits, both to
            support better decisions and as a reference. For this we use
            Decision Logs, an iteration on{" "}
            <Link href="https://www.ietf.org/standards/rfcs/">
              Requests for comment (RFCs)
            </Link>{" "}
            and{" "}
            <Link
              href="https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"
            >
              Architectural decision records (ADRs)
            </Link>
            . A decision log captures:
          </p>

          <List>
            <li>
              <Strong>Context</Strong>: Why is the decision important? This sets
              out the criteria for the decision.
            </li>
            <li>
              <Strong>Options</Strong>: What are the options to decide between?
              This could range from architecture and technology choices to
              binary choices such as whether something needs to be done or not.
              This section records the evaluation of the available options
              against the criteria defined in "Context".
            </li>
            <li>
              <Strong>Decision</Strong>: Which option was chosen? This follows a
              discussion with the wider team or stakeholders to make the choice
              in light of the appraisal.
            </li>
          </List>

          <Heading>Definition of done</Heading>

          <p>We consider work "done" when it:</p>

          <List>
            <li>Satisfies the user or acceptance criteria defined.</li>
            <li>Passes quality assurance.</li>
            <li>Is documented, if applicable.</li>
            <li>Is deployed to all environments and released to users.</li>
          </List>

          <Heading>Technical conventions</Heading>

          <p>
            We use standards, such as{" "}
            <Link
              href="https://www.conventionalcommits.org/en/v1.0.0/"
            >
              conventional commits
            </Link>{" "}
            and{" "}
            <Link href="https://conventionalcomments.org/">
              conventional comments
            </Link>{" "}
            with our code. They enable clearer communication and automation.
          </p>

          <p>
            We believe in the usefulness of code linters and formatters and work
            with tools that do this automatically and verify adherence in CI
            pipelines.
          </p>

          <p>
            We have a preference to work with statically typed languages, as a
            means for quality assurance and documentation it provides.
          </p>
        </Container>
      </Section>
    </Page>
  );
}
