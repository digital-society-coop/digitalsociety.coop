import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Thumbnail from "../../components/Thumbnail";
import List from "../../components/List";

export default function Tap(): ReactNode {
  return (
    <Page
      title="Projects | tap"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. tap, from CSVs to APIs in minutes."
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="Screenshot of defining data in tap"
              src="/images/data.png"
              thumbClassName="max-sm:hidden"
            />
            <Thumbnail
              alt="tap flow diagram"
              src="/images/architecture.svg"
              containerClassName="px-2 bg-sumiInk0"
            />
            <Thumbnail
              alt="Screenshot of defining models in tap"
              src="/images/models.png"
              thumbClassName="max-sm:hidden"
            />
            <Thumbnail
              alt="Screenshot of listing APIs in tap"
              src="/images/apis.png"
              thumbClassName="max-sm:hidden"
            />
          </div>
          <PageTitle>tap</PageTitle>
          <p className="mb-6">
            <Strong>
              From raw, chaotic CSVs to production-ready APIs in minutes
            </Strong>
          </p>
          <p className="mb-5">
            <Link href="https://tapintodata.com/">tap</Link> is our first SaaS
            product, enabling teams to transform, join and serve data with
            flexible and powerful SQL queries and documented, secured APIs
          </p>

          <p className="mb-5">
            We developed <strong>tap</strong> after seeing organizations
            repeatedly spend days or weeks of developer time and resources to
            make existing data usable - costs that often make potentially
            valuable projects infeasible. <strong>tap</strong> eliminates these
            barriers by handling the technical complexity of data
            transformation. This means organizations can deploy data-driven
            solutions in days rather than weeks, at significantly reduced cost.
          </p>
          <p className="mb-5">Here's how it works:</p>
          <ol className="list-decimal pl-8 flex flex-col gap-2 mb-5">
            <li>
              <strong>Upload your data:</strong> Start with a spreadsheet or any
              other data file.
            </li>
            <li>
              <strong>Shape it how you need it:</strong> Optionally, transform
              your data to make it perfect for your use case. Make use of the
              full power of SQL (the language of data), to:
              <List>
                <li>
                  Choose which columns to include (great for hiding sensitive
                  information).
                </li>
                <li>
                  Clean up your data (remove invalid entries, fix inconsistent
                  formatting, etc.).
                </li>
                <li>
                  Combine it with other datasets (for example, add location
                  coordinates to address data).
                </li>
              </List>
            </li>
            <li>
              <strong>Make it available:</strong> Set up a unique web address
              where other systems can access your data, with whatever{" "}
              <Link href="https://tapintodata.com/docs/filters/">
                search and filtering options
              </Link>{" "}
              you need.
            </li>
          </ol>
          <p className="mb-5">
            That's it! Your data is ready for other systems to connect to with
            all the essentials built in. No complex coding and no server setup.
          </p>
          <p className="mb-5">
            Built using Rust, Apache DataFusion and SolidJS. Deployed to
            Kubernetes on Hetzner via Github Actions.
          </p>
          <p>
            <strong>tap</strong> serves{" "}
            <Link href="/projects/epcdata/">epcdata.scot</Link>.
          </p>
        </article>

        <a
          href="https://app.tapintodata.com"
          aria-label="Open tap app"
          className="text-xl sm:text-2xl self-center my-4 p-3 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
        >
          Try <strong>tap</strong>
        </a>
      </Section>
    </Page>
  );
}
