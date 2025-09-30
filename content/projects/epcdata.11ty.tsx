import type { ReactNode } from "react";

import Page from "../../components/Page";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Strong from "../../components/Strong";
import PageTitle from "../../components/PageTitle";
import Thumbnail from "../../components/Thumbnail";
import List from "../../components/List";

export default function EpcData(): ReactNode {
  return (
    <Page
      title="Projects | epcdata.scot"
      description="Digital Society, a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data. epcdata.scot REST API for for Scottish EPCs"
    >
      <Section>
        <article className="w-full">
          <div className="mb-8 sm:mb-1 mr-0 min-sm:mr-6 max-sm:w-full flex flex-col gap-2 float-left">
            <Thumbnail
              alt="Screenshot of the home page for epcdata.scot"
              src="/images/home-epcdata.png"
              thumbClassName="object-cover max-sm:hidden"
            />
            <Thumbnail
              alt="Screenshot of epcdata.scot statistics map"
              src="/images/epcdata-example.png"
              thumbClassName="object-cover"
            />
            <Thumbnail
              alt="Screenshot of the API documenation page for epccdata.scot"
              src="/images/epcdata-documentation.png"
              thumbClassName="object-cover max-sm:hidden"
            />
          </div>
          <PageTitle>epcdata.scot</PageTitle>
          <p className="mb-6">
            <Strong>
              An unofficial REST API for Scottish domestic Energy Performance
              Certificates (EPCs)
            </Strong>
          </p>
          <p className="mb-5">
            We built{" "}
            <Link href="https://epcdata.scot" target="_blank">
              epcdata.scot
            </Link>{" "}
            while working on{" "}
            <Link href="/projects/orang-energy/">Orang Energy</Link>, an energy
            savings calculator for properties across UK.
          </p>
          <p className="mb-5">
            Energy Performance Certificates (EPCs) provide energy efficiency
            information and specifications for a dwelling, such as floor area
            and materials used. We needed to be able to lookup certificates
            based on addresses performantly across this data. While England and
            Wales has an API that returns EPC data from address lookup,{" "}
            <Link
              href="https://statistics.gov.scot/resource?uri=http%3A%2F%2Fstatistics.gov.scot%2Fdata%2Fdomestic-energy-performance-certificates--extended-historic-dataset"
              target="_blank"
            >
              Scotland publishes
            </Link>{" "}
            the data as CSV files only. The data files are a ZIP of 18 CSV files
            totalling 7.17 GB.
          </p>
          <p className="mb-5">
            Using <Link href="/projects/tap/">tap</Link> we:
          </p>
          <List>
            <li>
              Cleaned and standardised address data and field naming
              conventions.
            </li>
            <li>
              Deduplicated the data to only return latest certificate for an
              address.
            </li>
            <li>
              Enhanced compatibility by mimicking the England & Wales EPC API
              structure.
            </li>
            <li>
              Enabled performant geospatial queries through enrichment with ONS
              postcode lookup data and H3 indexing.
            </li>
            <li>
              Secured access with API key authentication while maintaining
              accessibility.
            </li>
            <li>
              Serve the complete dataset with various filtering with sub-100ms
              response times.
            </li>
          </List>

          <p className="my-5">
            <Link href="https://epcdata.scot" target="_blank">
              epcdata.scot
            </Link>{" "}
            is used both by us and external organisations that came across our
            data portal when looking for an API for EPCs. It enables focusing on
            user value rather than the laborious process of data transformation
            and building out a data service around the EPC dataset.
          </p>
          <p className="mb-5">
            Rather than forcing each user to solve the same data challenges, the
            API provides reusable building blocks that eliminate duplication and
            accelerate innovation. It supports use cases such as energy savings
            calculators, lead generation, property research and climate policy.
          </p>
          <p className="mb-5">
            Built using Fresh. Deployed to Kubernetes on Hetzner via Github
            Actions.
          </p>
        </article>
      </Section>
    </Page>
  );
}
