import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";

export default function TapGenerallyAvailable(): ReactNode {
  return (
    <Page
      title="Posts | tap is generally available"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. tap is generally available!"
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt="Logo for tap"
              src="/images/tap.svg"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>
                <Link href="https://tapintodata.com" target="_blank">
                  tap
                </Link>{" "}
                is generally available!
              </PageTitle>
              <p>15/05/2025</p>
              <p>
                <Strong>
                  Our first SaaS product, enabling teams to transform, join and
                  serve data with flexible and powerful SQL queries and
                  documented, secured APIs
                </Strong>
              </p>
            </div>
          </div>

          <p>
            Data can often be found in files, whether you work with them
            everyday in spreadsheets, came across an interesting open dataset,
            or they're just the easiest way to get data out of a legacy system.{" "}
            <strong>tap</strong> simplifies the transformation, joining and
            serving of data from these files with flexible and powerful SQL
            queries and documented, secured APIs.
          </p>
          <p>
            We developed <strong>tap</strong> after seeing organizations
            repeatedly spend days or weeks of developer time and resources to
            make existing data usable - costs that often make potentially
            valuable projects infeasible. <strong>tap</strong> eliminates these
            barriers by handling the technical complexity of data
            transformation. This means organizations can deploy data-driven
            solutions in days rather than weeks, at significantly reduced cost.
          </p>
          <img
            alt="tap flow diagram"
            src="/images/architecture.svg"
            className="max-w-[300px]"
          />
          <p>
            With <strong>tap</strong> you can:
          </p>
          <ol className="list-disc ml-8 flex flex-col gap-2 max-w-3xl">
            <li>
              Upload <strong>CSV</strong>, <strong>JSONL</strong>,{" "}
              <strong>Parquet</strong> and other files or folders of{" "}
              <strong>any size</strong>.
            </li>
            <li>
              <strong>Analyse</strong>, <strong>transform</strong>,{" "}
              <strong>join</strong> and <strong>enrich</strong> your datasets
              with <strong>SQL</strong>.
            </li>
            <li>
              Create <strong>documented</strong>, <strong>secured</strong> and{" "}
              <strong>performant</strong> APIs with{" "}
              <strong>customisable filters</strong>.
            </li>
          </ol>
          <p>This will allow you to:</p>
          <ol className="list-disc ml-8 flex flex-col gap-2">
            <li>
              Enhance your data wrangling capabilities and share with downstream
              development teams or stakeholders.
            </li>
            <li>
              Focus on user value, removing the toil of consuming open or
              internal data, via{" "}
              <Link
                href="https://tapintodata.com/data-apis.11ty.tsx"
                target="_blank"
              >
                Data APIs
              </Link>
              .
            </li>
            <li>
              Unlock the social <strong>value</strong> of public and private
              data.{" "}
              <Link href="https://tapintodata.com/contact-us" target="_blank">
                Speak to us
              </Link>{" "}
              about your{" "}
              <Link href="https://tapintodata.com/data-portals" target="_blank">
                data sharing
              </Link>{" "}
              needs.
            </li>
          </ol>
          <p>
            For example, if you are a developer a typical workflow in{" "}
            <strong>tap</strong> to go from a static file to a documented,
            secured, monitored and performant API looks as follows:
          </p>
          <ol className="list-decimal ml-8 flex flex-col gap-2">
            <li>
              Upload the files to a storage bucket provided by{" "}
              <strong>tap</strong> or ensure the data at rest never leaves your
              infrastructure by bringing your own storage.
            </li>
            <li>
              Use SQL to join between datasets, transform columns or just expose
              the data from the file as is.
            </li>
            <li>Configure your desired filters for the API.</li>
            <li>Set the url for your API.</li>
            <li>
              Share API keys for the API with your consumer(s)/application.
            </li>
          </ol>
          <p>
            With <strong>tap</strong> goal is to unlock the social value of
            public and private data by making it accessible to those who can use
            it to benefit their communities.
          </p>
        </Container>
      </Section>
    </Page>
  );
}
