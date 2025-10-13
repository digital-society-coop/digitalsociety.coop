import { JSX } from "react";
import Container from "../../components/Container";
import Page from "../../components/Page";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import Strong from "../../components/Strong";
import Link from "../../components/Link";
import Heading from "../../components/Heading";

export default function HetznerMigrationPost(): JSX.Element {
  return (
    <Page
      title="Posts | Migrating to Hetzner"
      description="We saved 76% on our cloud bills while tripling our capacity by migrating to Hetzner from AWS and DigitalOcean. Digital Society is a not-for-profit cooperative helping you get your projects off the ground and realise the value of your data."
    >
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              alt=""
              src="/images/hetzner-logo.png"
              className="self-center max-w-[20rem] rounded-xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <PageTitle>
                Migrating to Hetzner
              </PageTitle>
              <p>02/10/2025</p>
              <p>
                <Strong>
                  We saved 76% on our cloud bills while tripling our capacity by migrating to Hetzner from AWS and DigitalOcean.
                </Strong>
              </p>
            </div>
          </div>

          <Heading>Background</Heading>

          <p>
            All the software we build at{" "}
            <span className="text-oniViolet">Digital</span>
            <span className="text-waveAqua2">Society</span>{" "}
            runs in the cloud.
            Prior to the migration we ran workloads on two platforms:
          </p>

          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-4 items-start">
              <a href="https://aws.amazon.com/">
                <img
                  className="h-16"
                  alt="AWS"
                  src="/images/aws-logo.svg"
                />
              </a>
              <div className="flex flex-col ml-4 gap-4">
                <p>
                  We use AWS for some of our core hosting needs (DNS via <Link href="https://aws.amazon.com/route53">Route53</Link> and sending emails via <Link href="https://aws.amazon.com/ses/">SES</Link>).
                </p>
                <p>
                  We also chose AWS to host <Link href="https://tapintodata.com/">tap</Link>, our first SaaS product, using a variety of AWS services (<Link href="https://aws.amazon.com/ecs/">ECS</Link> for container orchestration, <Link href="https://aws.amazon.com/rds/">RDS</Link> for relational databases, <Link href="https://aws.amazon.com/elasticloadbalancing/application-load-balancer/">ALB</Link> for ingress, and a long tail of peripheral services, as is the AWS way).
                </p>
                <p>
                  We chose AWS for familiarity since we have worked with it for nearly 15 years.
                  We also prize their reliability, particularly when it comes to API stability.
                  We automate as much of our infrastructure management as possible, and don't want to spend time chasing API breaking changes.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-4 items-start mb-4">
              <a href="https://www.digitalocean.com/">
                <img
                  className="h-8"
                  alt="DigitalOcean"
                  src="/images/digitalocean-logo.svg"
                />
              </a>
              <div className="flex flex-col ml-4 gap-4">
                <p>
                  We used <Link href="https://www.digitalocean.com/products/kubernetes">DigitalOcean Kubernetes</Link> to host several lightweight services, such as <Link href="https://epcdata.scot/">epcdata.scot</Link>, and monitoring services (<Link href="https://umami.is/">Umami</Link> for web analytics, <Link href="https://openobserve.ai/">OpenObserve</Link> for telemetry, and <Link href="https://uptime.kuma.pet/">Uptime Kuma</Link> for availability monitoring).
                </p>
                <p>
                  We chose DigitalOcean for its relatively simple and cost-effective managed Kubernetes offering, where you pay for the cluster's resources (nodes, block storage, load balancers) but the controlplane is free.
                </p>
                <p>
                  We chose Kubernetes for familiarity since we have worked with it for nearly 10 years.
                  Although it requires a lot of <Link href="https://github.com/digital-society-coop/runtime">boilerplate configuration</Link>, once it has been set up Kubernetes enables a frictionless developer experience for deploying applications quickly.
                </p>
              </div>
            </li>
          </ul>

          <p>
            Why two cloud providers?
            Initially we used only DigitalOcean, but a data intensive SaaS like tap needs a lot of cloud resources and AWS have a generous <Link href="https://aws.amazon.com/startups/credits#packages">$1,000 credit</Link> package for self-funded startups.
            Building tap with AWS credits let us experiment with our infrastructure needs without worrying about the cost.
          </p>

          <Heading>Credits don't last forever</Heading>

          <p>
            In the spirit of minimising our operational costs we opted to use AWS' serverless container runtime, <Link href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html">Fargate</Link>.
            This lets us pay per-second for the CPU and memory used by our application.
            Fargate's monthly pricing scales down fairly well, with a minimal workload (0.25 CPU, 0.5 GiB RAM) costing around $10/month.
          </p>

          <p>
            However, tap is a data-intensive SaaS that needs to be able to execute complex queries over gigabytes of data in seconds.
            Even though we use the blazingly fast <Link href="https://www.rust-lang.org/">Rust</Link> programming language and modern, efficient data technologies like <Link href="https://arrow.apache.org/">Apache Arrow</Link> and <Link href="https://datafusion.apache.org/">DataFusion</Link>, we have found the minimum resource requirements for good performance to be around 2x CPUs and 4 GiB RAM – ideally even more to get a good experience for demanding queries.
          </p>

          <p>
            How much does a 2x CPU, 4 GiB RAM container cost on AWS Fargate?
            Just over $70/month.
            We run two worker instances, which need these higher resources, along with smaller web instances and all the other infrastructure needed to host an application on AWS (load balancer, relational DB, NAT gateway, ...).
            All together, our total costs for two environments of tap grew to <Strong>$449.50/month</Strong>.
          </p>

          <p>
            In the end we used up our free credits in less than 6 months, and as a bootstrapped startup absorbing that kind of running cost is painful.
          </p>

          <Heading>Investigating alternatives</Heading>

          <p>
            Faced with these high running costs we started to investigate alternative cloud providers.
            Around the same time, tariff wars and the growth of AI-powered technofeudalism made us look specifically for <Link href="https://european-alternatives.eu/">UK or EU based</Link> cloud providers.
          </p>

          <p>
            We quickly came across <Link href="https://www.hetzner.com/cloud/">Hetzner</Link>, and while their offering is geared towards self-managed VPS, meaning additional maintenance compared to managed solutions, we were sold on their pricing (more detail later).
            So much so that we decided to migrate our DigitalOcean infrastructure as well.
          </p>

          <p>
            Since most of our services were already running in Kubernetes, and tap was already container-based, we decided we would run Kubernetes. Having operated Kubernetes clusters before this wasn't a decision taken lightly, but we discovered <Link href="https://www.talos.dev/">Talos Linux</Link> which promised to simplify the cluster setup and maintenance.
          </p>

          <p>
            Our existing Kubernetes clusters in DigitalOcean used a <Link href="https://github.com/digital-society-coop/runtime">runtime</Link> that we created to cover basic infrastructure needs for web applications. Combined with Kubernetes' native container orchestration features, these covered all the functionality we were using in AWS and DigitalOcean except for managed PostgreSQL databases. Given that these are critical pieces of infrastructure, we wanted a robust solution that included detailed monitoring, automated failover, seamless upgrades, and scheduled backups. We found <Link href="https://cloudnative-pg.io/">CloudNativePG</Link> which ticks all our boxes.
          </p>

          <Heading>The new stack</Heading>

          <p>
            Altogether, this is the stack we landed on:
          </p>

          <ul className="flex flex-col gap-3 pl-4">
            <li>
              <Link href="https://www.hetzner.com/cloud/">Hetzner</Link> as the core infrastructure provider. We use their ARM shared vCPU cloud servers, block storage volumes, load balancers, networks, firewalls, and S3-compatible object storage.
            </li>
            <li>
              <Link href="https://www.talos.dev/">Talos Linux</Link> as the operating system for cloud servers. Talos lets you manage Kubernetes nodes in a similar way to Kubernetes resources, by applying declarative configuration from which the OS figures out the actual changes (if any) to make on the node.
            </li>
            <li>
              <Link href="https://cloudnative-pg.io/">CloudNativePG</Link> fills the role of a managed database service (e.g. RDS) for the cluster. PostgreSQL clusters can be declared in Kubernetes manifests alongside the workload(s) using them, and can be configured with scheduled backups, failover replicas, configuration overrides, etc.
            </li>
            <li>
              <Link href="https://github.com/kubernetes/ingress-nginx">Ingress NGINX Controller</Link> fills the role of a managed load balancer or API gateway for the cluster, consolidating and making available the ingress routes declared by workloads.
            </li>
            <li>
              <Link href="https://github.com/kubernetes-sigs/external-dns">ExternalDNS</Link> allows DNS names to be associated with ingress resources. Roughly, Ingress NGINX Controller manages HTTP routing <em>in</em> the cluster while ExternalDNS handles routing <em>to</em> the cluster.
            </li>
            <li>
              <Link href="https://cert-manager.io/">cert-manager</Link> creates TLS certificates to secure workload routes with HTTPS.
            </li>
          </ul>

          <p>
            All infrastructure is codified using <Link href="https://developer.hashicorp.com/terraform">Terraform</Link> and <Link href="https://helm.sh/">Helm</Link> with deployments automated through <Link href="https://docs.github.com/en/actions">GitHub Actions</Link>.
          </p>

          <Heading>What a savings</Heading>

          <p>
            It's not easy to do a strictly apples-to-apples comparison between cloud providers since they tend to differ in features (technical or contractual, e.g. SLAs), but an easy point of comparison is our monthly bill:
          </p>

          <div className="flex gap-8 xs:px-4 xs:gap-16 sm:px-8 sm:gap-24 md:px-12 md:gap-48 lg:px-36 lg:gap-[33%]">
            <div className="flex flex-col justify-between gap-2 flex-1 bg-fujiWhite text-springBlue rounded-xl py-4">
              <p className="pb-1 px-4 border-b-2 border-sumiInk0">AWS and DigitalOcean*</p>
              <span className="px-4 text-3xl">$559.36</span>
            </div>
            <div className="flex flex-col justify-between gap-2 flex-1 bg-fujiWhite text-springBlue rounded-xl py-4">
              <p className="pb-1 px-4 border-b-2 border-sumiInk0">Hetzner</p>
              <p className="px-4">
                <span className="text-3xl">$132.96</span> <span className="text-autumnGreen">-76%</span>
              </p>
            </div>
          </div>

          <p className="xs:px-4 sm:px-8 md:px-12 lg:px-36 text-sm">
            * Based on peak invoice amount. Technically DigitalOcean peaked in July ($109.86) before we started our migration. AWS peaked in August ($449.50) since we migrated tap later.
          </p>

          <p>We get a lot more capacity for this price as well:</p>

          <div className="flex gap-8 xs:px-4 xs:gap-16 sm:px-8 sm:gap-24 md:px-12 md:gap-48 lg:px-36 lg:gap-[33%]">
            <div className="flex flex-col justify-between gap-2 flex-1 bg-fujiWhite text-springBlue rounded-xl py-4">
              <p className="pb-1 px-4 border-b-2 border-sumiInk0">AWS and DigitalOcean</p>
              <p className="px-4"><span className="text-2xl">12</span> vCPUs</p>
              <p className="px-4"><span className="text-2xl">24 GiB</span> RAM</p>
            </div>
            <div className="flex flex-col justify-between gap-2 flex-1 bg-fujiWhite text-springBlue rounded-xl py-4">
              <p className="pb-1 px-4 border-b-2 border-sumiInk0">Hetzner*</p>
              <p className="px-4"><span className="text-2xl">44</span> vCPUs <span className="text-autumnGreen">+367%</span></p>
              <p className="px-4"><span className="text-2xl">88 GiB</span> RAM <span className="text-autumnGreen">+367%</span></p>
            </div>
          </div>

          <p className="xs:px-4 sm:px-8 md:px-12 lg:px-36 text-sm">
            * This is just the capacity available for workloads, with controlplanes excluded (an additional 6 vCPUs and 12 GiB RAM).
          </p>

          <Heading>Challenges</Heading>

          <p>
            So much for the upsides, but the migration wasn't always straightforward. Our cloud estate is small in the grand scheme of things but inevitably there were challenges.
          </p>

          <Strong>Hetzner's network zones are not equivalent to AWS' availability zones.</Strong>

          <p>
            AWS's topology is based on <Link href="https://aws.amazon.com/about-aws/global-infrastructure/regions_az/">regions and availability zones</Link>. Typically your infrastructure will live in a single region, but be split across availability zones for fault tolerance. Notably, private networking is region-wide (i.e. servers in different availability zones can easily communicate over private networks).
          </p>

          <p>
            Hetzner's topology is based on <Link href="https://docs.hetzner.com/cloud/general/locations/">locations and network zones</Link>. There is only one EU network zone, <code>eu-central</code>, which has 3 locations. Since servers in different locations in the same network zone can communicate over private networks, we equivalated them to AWS' availability zones.
          </p>

          <p>
            In reality, there is significant latency between Hetzner locations that make running multi-location workloads challenging, and potentially harmful to performance as we discovered through our post-deployment monitoring.
          </p>

          <p>
            Instead, we opted to use a single location (Nuremberg) and use <Link href="https://docs.hetzner.com/cloud/placement-groups/overview">placement groups</Link> to improve resilience. Placement groups ensure that virtual servers in the same group run on different physical servers, significantly reducing the likelihood that they will fail together.
          </p>

          <Strong>A service being docker-based doesn't mean it will be trivial to migrate.</Strong>

          <p>
            On AWS we deployed our SaaS product, tap, to the Elastic Container Service (ECS) container runtime. This meant we were already building and push containers as part of the automated build and we had expected that migrating the rest of the configuration from ECS CloudFormation to Kubernetes manifests wouldn't be too laborious.
          </p>

          <p>
            Unfortunately hadn't considered the deployment automation around the configuration. In particular, we had scripts to gather the right configuration from GitHub and pass it along to CloudFormation. The difficulty wasn't in adapting the scripts to Kubernetes, but rather that we hadn't anticipated the work and so that part of the migration took longer than we expected.
          </p>

          <p>
            In the end we used <Link href="https://kustomize.io/">Kustomize</Link> as the glue between sensitive configuration in GitHub and our Kubernetes manifests. We moved our non-sensitive configuration out of GitHub settings and into config files in the repo itself since this works more easily with Kustomize. It also makes tracking and reviewing changes to these settings easier, so we are happy with the result.
          </p>

          <Heading>Conclusions</Heading>

          <p>
            Hetzner is an incredibly cost-effective cloud provider. While their offerings are less expansive and hands-off than AWS or DigitalOcean's, it's possible to mitigate this with your stack if you don't mind getting your hands dirty.
          </p>

          <p>
            We're particularly happy that this will allow us to keep <Link href="https://tapintodata.com/">tap</Link> running cheaply and performantly while we develop and launch it.
          </p>
        </Container>
      </Section>
    </Page>
  )
}
