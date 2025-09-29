import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Container from "../../components/Container";
import List from "../../components/List";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Heading from "../../components/Heading";

export default function JobSatisfaction(): ReactNode {
  return (
    <Page
      title="Insights | Job satisfaction"
      description="Digital Society, a not-for-profit cooperative building digital products for social good. Job satisfaction."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt="Zen rocks in front of water"
              src="/images/zen.jpg"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>Job satisfaction</PageTitle>
              <p>27/05/2025</p>
              <p>
                <Strong>A self-reflection exercise.</Strong>
              </p>
            </div>
          </div>
          <p>
            One of the driving discussions that led to the creation of{" "}
            <span className="text-oniViolet">Digital</span>&#8203;
            <span className="text-waveAqua2">Society</span> was a wider
            exploration of what it means to be satisfied at work. A result of
            this is a crude methodology for evaluating job satisfaction that we
            think is a useful exercise of self-reflection worth sharing.
          </p>
          <p>
            You can try this by prioritizing your "how?", "what?" and "why?" and
            pair this with that of your current workplace/role/job with the aid
            of these questions:
          </p>

          <Heading>How?</Heading>
          <p>This could be summarised as the "culture":</p>
          <List>
            <li>
              <Strong>People</Strong>: Are the people you work with good to work
              with? If you are looking to make friends at work, are these people
              that could be that?
            </li>
            <li>
              <Strong>Processes</Strong>: Are there strong processes at work? Is
              improvement of these processes part of those processes? Are new
              people onboarded well? When something goes wrong, is the reaction
              to try to improve the processes or to blame someone?
            </li>
            <li>
              <Strong>Agency</Strong>: Do you feel like you have agency over
              your day? Can you have a say on the direction of your workplace?
            </li>
            <li>
              <Strong>Tools</Strong>: Do you get to use the tools you want to at
              your work? Are these tools provided by your workplace?
            </li>
            <li>
              <Strong>Learning</Strong>: Are you challenged at work? Are you
              learning things you see beneficial for your future? Is learning
              part of your job and do you get to do it as part of your day?
            </li>
          </List>

          <Heading>What?</Heading>
          <p>
            This is related to the mission of the workplace and your part in it:
          </p>
          <List>
            <li>
              <Strong>Values</Strong>: Does what you are working on align with
              your values? Does the mission of the workplace align with yours?
              Does the leadership resonate with you?
            </li>
            <li>
              <Strong>Meaning</Strong>: Do you feel like your contribution is
              meaningful and is a vital part of the bigger whole?
            </li>
            <li>
              <Strong>Acknowledgment</Strong>: Do you feel like your efforts are
              acknowledged?
            </li>
            <li>
              <Strong>Accomplishment</Strong>: Do you get a sense of
              accomplishment from work? Do you feel like your workplace is on
              course to achieve its mission?
            </li>
          </List>

          <Heading>Why?</Heading>
          <p>
            This is related to how a job fits into or affords your wider life:
          </p>
          <List>
            <li>
              <Strong>Schedule</Strong>: Does it fit with your schedule or
              lifestyle you want? Does it match your desired routines for
              bedtime? Do you need to work shifts and is unpredictable? Can you
              take holidays when you want?
            </li>
            <li>
              <Strong>Flexibility</Strong>: Do you feel agency over your time?
              Given your tasks are done, can you run chores when you need to
              without asking for time off? Can you get time off when it is
              convenient for you? Can you work part-time?
            </li>
            <li>
              <Strong>Remuneration</Strong>: Do you get paid a salary you find
              fair? Is the salary enough to support your lifestyle? Are there
              share options or potential for a big exit? Does it have great
              pension or other supplementary packages?
            </li>
            <li>
              <Strong>Stability</Strong>: Do you think role/company will exist
              in a desired timescale?
            </li>
          </List>

          <p>
            In thinking about this, you can assign some kind of numeric scoring,
            both to your own priorities and your work, to see how they stack up.
            I like to visualise this with a radar chart. For example:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Figure
              alt="radar chart of a misaligned job to priorities"
              src="/images/misaligned-job.png"
              caption="Misaligned priorities"
            />
            <Figure
              alt="radar chart of a job aligned with priorities"
              src="/images/aligned-job.png"
              caption="Aligned priorities"
            />
            <Figure
              alt="radar chart of a perfect job"
              src="/images/perfect-job.png"
              caption="Perfect job"
            />
          </div>

          <p>
            Hopefully by doing this, you can understand what you may need to
            change about your current workplace, what to look for in your next
            job, or just gain a better understanding as to why you are so happy
            all time! At <span className="text-oniViolet">Digital</span>
            &#8203;
            <span className="text-waveAqua2">Society</span> we try to use this
            exercise to continously improve our workplace and incorporated it
            into our retrospectives.
          </p>
        </Container>
      </Section>
    </Page>
  );
}

function Figure(props: {
  src: string;
  alt: string;
  caption: string;
}): ReactNode {
  return (
    <figure className="text-center mx-auto my-6">
      <img
        className="h-[15rem] aspect-square object-contain mx-auto rounded-xl"
        alt={props.alt}
        src={props.src}
      />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
}
