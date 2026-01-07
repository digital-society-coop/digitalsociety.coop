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
      title="Projects | Youth Work SkillsTrack"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. Youth Work SkillsTrack."
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="Screenshot from Youth Work SkillsTrack showing a form page"
              src="/images/youthlink-form.png"
              thumbClassName="object-cover"
            />
            <Thumbnail
              alt="Screenshot from Youth Work SkillsTrack showing a dashboard"
              src="/images/youthlink-dashboard.png"
              thumbClassName="object-cover"
            />
          </div>
          <PageTitle>Youth Work SkillsTrack</PageTitle>
          <p className="mb-6">
            <Strong>
              Recording and demonstrating the impact of youth work
            </Strong>
          </p>
          <p className="mb-5">
            <Link href="https://youthlink.scot/">YouthLink Scotland</Link> are
            the national agency for youth work and the collective voice of the
            sector. We are their development partner for{" "}
            <Link href="https://impact.youthlink.scot/">
              Youth Work SkillsTrack
            </Link>
            , which we continue to support.
          </p>
          <p className="mb-5">
            <Link href="https://impact.youthlink.scot/">
              Youth Work SkillsTrack
            </Link>{" "}
            serves two key purposes. First, it provides youth work practitioners
            with a user-friendly tool to record and track the impact of their
            sessions on young people. Second, it enables organizations to
            demonstrate their collective impact to funders through aggregated,
            anonymized data dashboards.
          </p>
          <p>
            Built using Next.js, PostgreSQL and Tailwind CSS. Deployed to
            DigitalOcean App Platform via Github Actions.
          </p>
        </article>

        <p>
          <q className="italic">
            We couldn’t be happier with the experience we’ve had of working with
            Chris and Endre. Not only is the tool they designed exactly what we
            wanted (and more), their support to help us (and our co-design
            partners) realise it on behalf of the youth work sector was “above
            and beyond”. They were really interested in what we were trying to
            achieve and that together with their expertise, professionalism,
            friendliness and conscientiousness made them a pleasure to work
            with. The sprint model worked so well for us, it kept momentum going
            and it felt that every aspect of the work was purposeful and
            in-hand. We’re delighted that we will have an ongoing partnership
            with them as the tool is rolled out.
          </q>{" "}
          — Jane Dailly (National Grants Manager, YouthLink Scotland)
        </p>
      </Section>
    </Page>
  );
}
