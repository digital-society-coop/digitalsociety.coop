import { ReactNode } from "react";
import Container from "../../components/Container";
import Page from "../../components/Page";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import Strong from "../../components/Strong";
import Link from "../../components/Link";
import Heading from "../../components/Heading";

export default function WhyTap(): ReactNode {
  return (
    <Page
      title="Why we're building tap"
      description="Unlock data use-cases beyond analytics with tap (tapintodata.com). Digital Society is a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt=""
              src="/images/tap-screenshot.png"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>
                Why we're building tap
              </PageTitle>
              <p>21/10/2025</p>
              <p>
                <Strong>
                  An easy, cost-effective, and comprehensive tool to bridge the gap between data and applications.
                </Strong>
              </p>
            </div>
          </div>

          <p>
            One of the software products we are building at{" "}
            <span className="text-oniViolet">Digital</span>
            <span className="text-waveAqua2">Society</span>{" "}
            is <Link href="https://tapintodata.com">tap</Link>, a SaaS tool for turning data files into production-ready APIs in seconds.
            But why did we build it?
            What problem is it solving?
            Who should use it?
          </p>

          <Heading>Why did we build it?</Heading>

          <p>
            We'll answer the first question by looking at a couple of our experiences from projects we've worked on.
          </p>

          <h3 className="text-xl sm:text-2xl my-3">
            An energy savings calculator
          </h3>

          <p>
            One of our <Link href="/#services" target="_blank">agile product development</Link> projects is <Link href="https://orang.energy">orang.energy</Link>, a home energy savings calculator that uses details about the user's home (dimensions, insulation levels, heaters) and habits (heating, hot water use) to estimate energy use and explore ways to reduce their energy bills.
            Filling this in requires a lot of input from users, and in many cases they might not know the details off the top of their head.
          </p>

          <p>
            To simplify the user experience and deliver a more immediately relevant assessment we look up the latest EPC (<Link href="https://energysavingtrust.org.uk/advice/guide-to-energy-performance-certificates-epcs/">Energy Performance Certificate</Link>) for the user's home and use the details to initialise the calculator.
          </p>

          <p>
            This sounds reasonable enough, but a number of decisions need to be made to satify this seemingly simple requirement.
          </p>

          <ol className="flex flex-col gap-3 list-decimal *:ml-10">
            <li>
              <p>
                <Strong>Where do we get the EPC data from?</Strong>{" "}
                A quick web search for "energy performance certificate data" leads to <Link href="https://epc.opendatacommunities.org/">epc.opendatacommunities.org</Link> for England and Wales and <Link href="https://www.scottishepcregister.org.uk/">scottishepcregister.org.uk</Link> for Scotland.
                There are various caveats on the available data and its usage, but it's suitable for the calculator.
                So far, so good.
              </p>
            </li>
            <li>
              <p>
                <Strong>How do we integrate the data with the calculator app?</Strong>{" "}
                There are many ways to approach integrating data into an application, but one of the most straightforward and widely supported is to use a web API (<Link href="https://tapintodata.com/docs/knowledge-base/what-is-an-api/">What is an API?</Link>).
              </p>
              <p className="mt-3">
                The England and Wales publisher offers a <Link href="https://epc.opendatacommunities.org/docs/api/domestic">Domestic EPC API</Link> which supports looking up EPCs by address, perfect for our use-case.
                This is great!
                We can easily integrate this API for addresses in England and Wales.
              </p>
              <p className="mt-3">
                Unfortunately, the Scotland publisher does not offer an API.
                This is annoying, but not insurmountable.
                While integrating an existing API is straightforward, integrating without one is still possible - we just have more decisions to make!
              </p>
            </li>
            <li>
              <p>
                <Strong>How do we integrate the Scotland data?</Strong>{" "}
                A separate body <Link href="https://statistics.gov.scot/data/domestic-energy-performance-certificates--extended-historic-dataset">publishes</Link> the data as a collection of 40 CSV files (spreadsheets) totalling around 3 GB in size (note: at time of writing the link is down).
                The most direct way to integrate the data would be to include the CSV files within the calculator, and read through them to find the EPC for an address.
                Given the total size of the data, the fact that there are over a million records, and the presence of a number of data quality issues, this doesn't seem like a very efficient approach.
              </p>
              <p className="mt-3">
                The most abstracted approach would be to create a new web API from the data.
                This could match the format of the England and Wales API in order to make integration straightforward.
              </p>
              <p className="mt-3">
                In either case, an efficient solution wouldn't read and parse all the files on every search.
                Ideally it would read the files once into a data structure optimised for searching by address.
              </p>
              <p className="mt-3">
                This is the perfect job for a database, and we are already using <Link href="https://www.postgresql.org/">PostgreSQL</Link> for other features of the app.
                So why don't we just:
              </p>
              <ol className="mt-3 flex flex-col gap-3 list-decimal *:ml-10">
                <li>
                  Create a table in the database to store EPC records, making sure this is optimised for address lookups.
                  Extra decisions:
                </li>
                <ul className="flex flex-col gap-3 list-disc *:ml-10">
                  <li>
                    How should the table be structured?
                    It could parse out separate columns or store the whole record in a semi-structured manner.
                    The former would probably make lookup easier while the latter would make import easier.
                  </li>
                </ul>

                <li>
                  Load the EPC records into the table.
                  Extra decisions:
                </li>
                <ul className="flex flex-col gap-3 list-disc *:ml-10">
                  <li>
                    How should this be performed?
                    There are several ways to load data into a database with different performance characteristics and different tolerance for data inconsistency.
                  </li>
                  <li>
                    How should inconsistent data be handled?
                    It could be thrown out (potentially with a warning - what should you do with the warnings?) or it could interrupt the loading forcing you to fix the data or the loader.
                  </li>
                  <li>
                    When should this be performed?
                    At the very least it should be repeatable in order to load new data when the source is updated.
                  </li>
                </ul>

                <li>
                  Use the table when making EPC lookups.
                </li>

                <li>
                  <em>Deep breath.</em>
                </li>
              </ol>
            </li>
          </ol>

          <p>
            Things were looking very simple until step 3, when suddenly there's an explosion of decisions to be made.
            At the end of the process we've added a chunk of complexity to the app to serve a fairly small (but still valuable) proportion of users.
            Under the time constraints of the project, we had to choose to support only England and Wales to start with.
          </p>

          <h3 className="text-xl sm:text-2xl my-3">
            A geospatial data visualiser
          </h3>

          <p>
            In a past employment we worked on GeoHub - an internal web app for analysing geographic areas (such as streets and city districts) by combining and overlaying data from disparate sources including public data such as census records and commercial data such as consumer segmentation and footfall.
          </p>

          <p>
            There were two teams working on the project: a web app team and a data analysis team.
            Handover between the teams happened in the form of parquet files (an efficient data storage format) in cloud storage.
            The data in the parquet files consisted of a geographic coordinate (an <Link href="https://h3geo.org/">H3</Link> cell ID at resolution 11, roughly 2,000m<sup>2</sup> or about one-fifth as big as <Link href="https://maps.app.goo.gl/iBpaFiHZZg9P4hhf6">Trafalgar Square</Link>) and a value for that coordinate.
            These parquet files were typically quite large, with some being around a terrabyte (1,000 GB).
          </p>

          <p>
            The web app team was responsible for integrating the data into the web app in a way that let users combine arbitrary datasets and overlay the results on a map.
            The scale of the data posed two challenges:
          </p>

          <ul className="flex flex-col gap-3 list-disc *:ml-10">
            <li>
              <p>
                Serving an arbitrary slice of data with interactive latency (e.g. around a second or less).
                We found that Amazon Aurora PostgreSQL was able to achieve this as long as the the geographic coordinate column was indexed, made possible thanks to the H3 represenation of areas as a single ID.
              </p>
            </li>
            <li>
              <p>
                Loading the data in a reasonable amount of time (e.g. a few hours or less).
                The data was changed often, either with new datasets or updates to existing datasets in the wake of methodology changes, and it was desirable to test changes at least once a day.
              </p>
              <p className="mt-3">
                This proved harder to deal with, but in the end we had success with an in-house ETL tool that used <Link href="https://datafusion.apache.org/">Apache DataFusion</Link> to efficiently ingest the parquet data and write it out, in parallel, to partitioned tables in the database using PostgreSQL's <Link href="https://www.postgresql.org/docs/current/sql-copy.html#SQL-COPY-BINARY-FORMAT">binary <code>COPY</code> format</Link>.
              </p>
            </li>
          </ul>

          <p>
            Making this work took a lot of expertise on the web app team, particularly in terms of squeezing performance from a database and leveraging relatively niche (but blazingly fast) technologies like <Link href="https://rust-lang.org/">Rust</Link> (the primary programming language for working with DataFusion).
            While it achieved its objectives, the result relied on very few individuals to support it which represented a business continuity hazard (what if, hypothetically, those individuals left the company to start their own?).
          </p>

          <Heading>What problem is it solving?</Heading>

          <p>
            These experiences relate to integrating data into applications, and in both cases we found it too time consuming and required too much expertise for the scale of the project. You shouldn't need £10,000s and deep engineering expertise to bring data into your apps.
          </p>

          <p>
            There are a miriad of data integration technologies that could claim to help here, from full-featured workflow and integration platforms such as <Link href="https://airflow.apache.org/">Apache Airflow</Link> and <Link href="https://www.mulesoft.com/">MuleSoft</Link> to targeted micro-SaaS tools like <Link href="https://www.csvgetter.com/">CSV Getter</Link>.
            These are great tools but tend to fall into being either:
          </p>

          <ul className="flex flex-col gap-3 list-disc *:ml-10">
            <li>
              Cost-efficient (perhaps even free), but requiring significant technical investment to deploy and combine with other technologies to complete the picture.
              E.g. Apache Airflow is open source and could facilitate a robust ETL workflow to bring data into an application database, but deploying Airflow is some work and requires authoring workflow logic following a different paradigm from the rest of your application.
            </li>

            <li>
              Comprehensive, but prohibitively expensive or complicated.
              Data integration platforms such as MuleSoft typically have a bewildering product architecture and breadth of functionality, long sales cycles ("contact us") and enterprise-oriented pricing (£1,000s).
            </li>

            <li>
              Easy-to-use and cost-effective, but with sharp cliffs in functionality.
              Micro-SaaS tools like CSV Getter are perfect for the use-cases they've been designed for, but lack the flexibility required to avoid bringing in additional tooling for more complex or changing requirements.
            </li> 
          </ul>

          <p>
            We think there should be something in between these solutions that brings the best features of each - easy-<em>enough</em>-to-use, cost-effective <em>enough</em>, and comprehensive <em>enough</em> to be the single tool you'll need to integrate data into applications.
          </p>

          <p>
            This is tap: an easy, cost-effective, and comprehensive tool to bridge the gap between data and applications.
          </p>

          <Heading>Who should use it?</Heading>

          <p>
            We think tap will be useful to web app developers and data publishers.
          </p>

          <ul className="flex flex-col gap-3 list-disc *:ml-10">
            <li>
              <p>
                <Strong>For web app developers</Strong> tap turns data integration challenges into an API call.
              </p>
              <p className="mt-3">
                Whatever the scale or format of data you need to work with, you can use tap to create an API for the data that supports your query patterns and comes with API keys and OpenAPI documentation for seamless integration.
              </p>
              <p className="mt-3">
                Need to clean, transform, or combine your data?
                No problem.
                tap includes a fully-featured SQL engine so you don't need to incorporate additional ETL or an expensive data warehouse.
              </p>
            </li>

            <li>
              <p>
                <Strong>For data publishers</Strong> tap makes it trivial to create a delivery mechanism that works for your users.
              </p>
              <p className="mt-3">
                Web APIs are the bread-and-butter of data integration - save your users expensive integration work by serving them directly, without needing extra infrastructure or backend coding skills.
              </p>
              <p className="mt-3">
                tap's object storage based architecture means that pricing is based on storage and requests, with none of the overheads associated with running a data warehouse to serve requests 24/7.
              </p>
            </li>
          </ul>
        </Container>
      </Section>
    </Page>
  )
}
