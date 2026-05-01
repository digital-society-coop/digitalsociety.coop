import { JSX } from "react";
import Container from "../../components/Container";
import Page from "../../components/Page";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import Strong from "../../components/Strong";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import ClientScript from "../../components/ClientScript";

export default function PensionSovereigntyPost(): JSX.Element {
  return (
    <Page
      title="Insights | UK pensions"
      description="Our pension fund should be made to invest more than 2.5% in the UK."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt="Image by Alfons Landsmann from https://pixabay.com/photos/coins-money-poverty-homeless-8975531/"
              src="/images/pension-sovereignty.jpg"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>UK pensions</PageTitle>
              <p>05/05/2026</p>
              <p>
                <Strong>
                  Our pension fund should be made to invest more than 2.5% in
                  the UK.
                </Strong>
              </p>
            </div>
          </div>

          <p>
            We pay our pensions into{" "}
            <Link href="https://www.pensionbee.com/uk/climate-plan">
              PensionBee's Climate Plan
            </Link>
            , as it is marketed as ethical and climate-conscious. We don't see a
            point of investing in our future in a way that also actively
            destroys our climate, way of life and environment. Having recently
            reviewed the{" "}
            <Link href="https://www.msci.com/documents/10199/bfe6d5e4-8f85-9a5f-b949-0f770d4f9df4">
              factsheet
            </Link>
            , its biggest holdings are Nvidia, Microsoft, Apple, Alphabet,
            Amazon and Meta. These are companies that are at the forefront of
            pushing AI, driving energy demand to{" "}
            <Link href="https://www.imf.org/en/publications/wp/issues/2025/04/21/power-hungry-how-ai-will-drive-energy-demand-566304">
              unprecedented levels
            </Link>
            . While this by itself seems contradictory, what we found most
            shocking is that less than <Strong>2.5%</Strong> is invested into
            the UK. We checked{" "}
            <Link href="https://www.nestpensions.org.uk/schemeweb/nest/investing-your-pension/fund-choices/ethical-fund.html">
              Nest's Ethical Fund
            </Link>
            , a government-backed provider used by millions, and found the same:
            holdings dominated by large US tech companies.
          </p>

          <p>
            So, while we have been{" "}
            <Link href="/posts/migrating-to-hetzner-cloud/">
              deliberately reducing our reliance on large US technology
              platforms
            </Link>
            , our pension contributions are doing the opposite.
          </p>

          <Heading>It's a UK thing</Heading>

          <p>
            The low UK allocation is not a quirk of these particular funds, as
            UK pension funds overall put just{" "}
            <Link href="https://researchbriefings.files.parliament.uk/documents/CBP-10146/CBP-10146.pdf">
              4.4% of assets into UK equities
            </Link>{" "}
            and in this,{" "}
            <Link href="https://www.newfinancial.org/reports/comparing-the-asset-allocation-of-global-pension-systems">
              the UK is an outlier
            </Link>{" "}
            with the domestic equities as a share of total pension fund assets
            being for each respective country:
          </p>

          <PensionEquityChart />

          <p>
            UK pension schemes{" "}
            <Link href="https://www.icaew.com/insights/viewpoints-on-the-news/2024/sep-2024/chart-of-the-week-uk-pension-funds">
              hold around £2 trillion in assets
            </Link>
            , so even closing part of that gap would represent tens of billions
            flowing into the domestic economy. While some of that sits in
            existing final salary-style schemes that may not be simply
            redirected, there is real opportunity for the newer
            contribution-based pensions. This money could instead be funding
            British businesses, clean energy, housing and infrastructure,
            encouraging long-term growth and a prosperous society we would be
            happy to retire in.
          </p>

          <Heading>A known problem</Heading>

          <p>
            Recognising this,{" "}
            <Link href="https://labour.org.uk/change/kickstart-economic-growth/">
              Labour's 2024 manifesto
            </Link>{" "}
            committed to{" "}
            <q>increase investment from pension funds in UK markets</q>. And to
            be fair, they have followed through, at least in part.
          </p>

          <p>
            The government launched a{" "}
            <Link href="https://www.gov.uk/government/publications/pensions-investment-review-final-report">
              Pensions Investment Review
            </Link>{" "}
            in July 2024, and in May 2025 secured the{" "}
            <Link href="https://www.abi.org.uk/news/news-articles/2025/5/pension-industry-unites-on-mansion-house-accord/">
              Mansion House Accord
            </Link>
            , a voluntary pledge from 17 of the largest pension providers to put
            at least 5% of their assets into UK private markets by 2030. The{" "}
            <Link href="https://bills.parliament.uk/bills/3982">
              Pension Schemes Bill
            </Link>
            , introduced in June 2025 and still working through Parliament,
            would consolidate the market into large "megafunds" and require
            schemes to demonstrate value for money.
          </p>

          <Heading>Why this is not enough</Heading>

          <p>
            The Mansion House Accord is voluntary, has low targets (5%), covers
            only private markets like infrastructure and private equity (not
            ordinary shares in UK companies), and applies only to the default
            funds of its 17 signatories, covering only a fraction of the total
            UK pension market. Progress under a similar earlier pledge saw the
            relevant allocation{" "}
            <Link href="https://www.abi.org.uk/globalassets/files/publications/public/lts/2025/mansionhousecompactprogressupdateoctober2025.pdf">
              grow from 0.36% to 0.6% over a year
            </Link>
            .
          </p>

          <p>
            The Pension Schemes Bill goes further in some respects, creating
            large megafunds that could in theory unlock investment in
            infrastructure, housing and clean energy, and giving the government
            a reserve power to set mandatory UK investment targets if the
            voluntary approach fails. The megafunds do not come into effect
            until 2030, the mandatory targets have not been triggered, and the
            government remains{" "}
            <Link href="https://researchbriefings.files.parliament.uk/documents/LLN-2025-0044/2025-0044-Pension-Schemes-Bill-LARGE.pdf">
              wary of conflicting with pension trustees' duty to prioritise
              their members' financial interests
            </Link>
            , meaning the actual allocation numbers are moving very slowly.
          </p>

          <p>
            The government's actions so far are largely structural, setting up
            the conditions for change rather than delivering it. For a saver who
            wants their contributions going into UK communities today, no
            mainstream workplace pension product currently offers that.
          </p>

          <Heading>What we would like to see</Heading>

          <p>
            We think the government should exercise its reserve powers to
            mandate domestic investment. According to the government's own
            analysis, it could kickstart the{" "}
            <Link href="https://www.gov.uk/government/publications/pension-fund-investment-and-the-uk-economy/pension-fund-investment-and-the-uk-economy">
              crowding in of further private and foreign capital
            </Link>
            , suggesting there is room to increase domestic allocation while
            still delivering competitive returns for members. We think with the
            right mandate in place, there would finally be a pension product we
            would actually choose: one that invests meaningfully in British
            businesses, local infrastructure and communities, alongside a
            sensible allocation to broader responsible global markets.
          </p>

          <p>
            We think this sits naturally alongside initiatives like Scotland's{" "}
            <Link href="https://www.gov.scot/policies/cities-regions/community-wealth-building/">
              Community Wealth Building
            </Link>{" "}
            approach, which pursues the same underlying goal of keeping economic
            benefit rooted in local communities. Together, these kinds of
            policies could deliver local economic growth and reduce the economic
            leverage that large foreign corporations and their governments can
            exert over us.
          </p>

          <p>
            We wrote to our MP, Tracy Gilbert, about this in March and have not
            had a reply. If you know of providers or funds that already do this
            well, or have thoughts on the broader question,{" "}
            <Link href="mailto:hello@digitalsociety.coop">
              we would like to hear from you
            </Link>
            .
          </p>
        </Container>
      </Section>
    </Page>
  );
}

function PensionEquityChart(): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[260px]">
        <canvas
          id="nfChart"
          role="img"
          aria-label="Bar chart: USA >60%, Japan ~50%, Australia ~40%, Italy ~40%, France 26%, UK 4.4%"
        />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js"></script>
      <ClientScript
        fn={function nfChartInit() {
          const labels = ["USA", "Japan", "Australia", "Italy", "France", "UK"];
          const values = [62, 49, 40, 40, 26, 4.4];
          const exact = [false, false, false, false, false, true];

          const canvas = document.getElementById(
            "nfChart",
          ) as HTMLCanvasElement;
          const ctx = canvas.getContext("2d")!;
          const Chart = (window as any).Chart;
          const ChartDataLabels = (window as any).ChartDataLabels;

          const barBlue = "#7E9CD8"; // crystalBlue
          const barRed = "#C34043"; // autumnRed
          const gray = "#DCD7BA"; // fujiWhite

          const pattern = (color: string) => {
            const c = document.createElement("canvas");
            c.width = 8;
            c.height = 8;
            const cx = c.getContext("2d")!;
            cx.fillStyle = color + "55";
            cx.fillRect(0, 0, 8, 8);
            cx.strokeStyle = color;
            cx.lineWidth = 1.5;
            cx.beginPath();
            cx.moveTo(0, 8);
            cx.lineTo(8, 0);
            cx.stroke();
            return ctx.createPattern(c, "repeat");
          };

          const bgColors = labels.map((l, i) =>
            l === "UK" ? barRed : exact[i] ? barBlue : pattern(barBlue),
          );

          Chart.register(ChartDataLabels);

          new Chart(canvas, {
            type: "bar",
            data: {
              labels,
              datasets: [
                {
                  data: values,
                  backgroundColor: bgColors,
                  borderColor: labels.map((l) =>
                    l === "UK" ? barRed : barBlue,
                  ),
                  borderWidth: 1,
                  borderRadius: 3,
                  borderSkipped: false,
                },
              ],
            },
            options: {
              indexAxis: "y",
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
                datalabels: {
                  anchor: "end",
                  align: "end",
                  formatter: (value: any, ctx: any) =>
                    (exact[ctx.dataIndex] ? "" : "~") + value + "%",
                  color: gray,
                  font: { size: 12 },
                },
              },
              scales: {
                x: {
                  min: 0,
                  max: 70,
                  ticks: {
                    callback: (v: any) => v + "%",
                    color: gray,
                    font: { size: 12 },
                  },
                  grid: { color: "rgba(114,113,105,0.2)" },
                },
                y: {
                  ticks: {
                    color: (c: any) => (c.tick.label === "UK" ? barRed : gray),
                    font: { size: 13 },
                    autoSkip: false,
                  },
                  grid: { display: false },
                },
              },
            },
          });
        }}
      />
    </div>
  );
}
