import type { ReactNode } from "react";
import Link from "./Link";

export default function Page(props: {
  title: string;
  description: string;
  children: ReactNode;
}): ReactNode {
  const webAnalyticsSrc = process.env.WEB_ANALYTICS_SRC;
  const webAnalyticsId = process.env.WEB_ANALYTICS_ID;

  return (
    <html lang="en" className="h-full margin-0">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Digital Society | ${props.title}`}</title>
        <link rel="icon" href="/images/logo-transparent-256x256.png" />
        <meta name="description" content={props.description} />

        <link rel="stylesheet" href="/tailwind.css" />
        <script
          defer
          src={webAnalyticsSrc}
          data-website-id={webAnalyticsId}
        ></script>
      </head>

      <body className="h-full margin-0 flex flex-col bg-sumiInk1 text-lighterYellow">
        <header>
          <nav className="p-4">
            <a href="/" aria-label="Back to the home page">
              <img
                className="h-[3rem] aspect-square block"
                alt="Digital Society Ltd logo"
                src="/images/logo-transparent-256x256.png"
              />
            </a>
          </nav>
        </header>
        <main>{props.children}</main>
      </body>
      <footer className="self-center max-w-6xl p-4 w-screen grid grid-rows-[repeat(4,min-content)] sm:grid-rows-[repeat(2,min-content)] grid-cols-1 sm:grid-cols-3 gap-4 border-t border-fujiWhite [&_a]:text-lighterBlue pb-8">
        <div className="flex flex-row gap-2 order-3 sm:order-first">
          <a
            href="https://www.uk.coop/directory/digital-society"
            aria-label="To uk.coop"
          >
            <img
              className="h-[80px] aspect-square block m-4"
              alt="Cooperatives UK logo"
              src="/images/coop.svg"
            />
          </a>
          <iframe
            className="w-[80px] h-[80px] m-4"
            src="https://registry.blockmarktech.com/certificates/5755ab18-de66-4e41-a99e-709338cd7c3f/widget/?tooltip_position=bottom_right&theme=transparent&hover=t"
          />
        </div>
        <div className="order-first sm:order-2">
          <h3 className="mb-2 text-lg">About us</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/how">How we work</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="order-2 sm:order-3">
          <h3 className="mb-2 text-lg">Contact us</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                event="out-github"
                href="https://github.com/digital-society-coop"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                event="out-linkedin"
                href="https://www.linkedin.com/company/digitalsociety-coop"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link event="out-mail" href="mailto:hello@digitalsociety.coop">
                hello@digitalsociety.coop
              </Link>
            </li>
          </ul>
        </div>
        <p className="col-span-full order-last">
          Digital Society Ltd is a private company limited by guarantee without
          share capital registered in Scotland (SC768012).
        </p>
      </footer>
    </html>
  );
}
