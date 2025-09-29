import type { ReactNode } from "react";
import Link from "./Link";
import ClientScript from "./ClientScript";

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
        <ClientScript fn={initMenu} />
      </head>

      <body className="h-full margin-0 flex flex-col bg-sumiInk1 text-lighterYellow has-[#mobile-menu:checked]:overflow-hidden">
        <header>
          <nav className="flex flex-row justify-between p-4 shadow gap-1 w-full lg:z-1">
            <a href="/" aria-label="Back to the home page" className="z-50">
              <img
                className="h-[3rem] aspect-square block"
                alt="Digital Society Ltd logo"
                src="/images/logo-transparent-256x256.png"
              />
            </a>
            <label
              className="relative z-40 self-center p-2 sm:hidden text-lg"
              htmlFor="mobile-menu"
            >
              <input
                className="peer hidden"
                type="checkbox"
                id="mobile-menu"
                defaultChecked={false}
              />
              <div className="relative z-50 block cursor-pointer">
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <div className="fixed inset-0 z-40 h-full w-full bg-sumiInk3/50 backdrop-blur-sm hidden peer-checked:block">
                &nbsp;
              </div>
              <div className="fixed top-[56px] right-0 z-40 w-full h-full -translate-y-full transition duration-300 hidden peer-checked:block peer-checked:translate-y-0">
                <div className="float-top bg-sumiInk2 p-4 shadow-lg">
                  <menu className="flex flex-col gap-6 items-center">
                    <li>
                      <Link href="/#projects" className="font-bold text-xl">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/#products" className="font-bold text-xl">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/#team" className="font-bold text-xl">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/posts/" className="font-bold text-xl">
                        Insights
                      </Link>
                    </li>
                    <li>
                      <a
                        data-umami-event="out-mail"
                        href="mailto:hello@digitalsociety.coop"
                        className="font-bold text-xl self-center px-3 py-1 sm:mt-0 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
                      >
                        Get in touch {"\u2197"}
                      </a>
                    </li>
                  </menu>
                </div>
              </div>
            </label>
            <div className="hidden sm:flex flex-row items-center gap-3 gap-2 md:gap-10 z-100">
              <Link href="/#projects" className="font-bold">Projects</Link>
              <Link href="/#products" className="font-bold">Products</Link>
              <Link href="/#team" className="font-bold">Team</Link>
              <Link href="/posts/" className="font-bold">Insights</Link>
              <a
                data-umami-event="out-mail"
                href="mailto:hello@digitalsociety.coop"
                className="font-bold self-center px-3 py-1 rounded-xl border border-linkBlue hover:outline outline-linkBlue bg-linkBlue! hover:bg-waveBlue2! text-lighterYellow!"
              >
                Get in touch {"\u2197"}
              </a>
            </div>
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
              <Link href="/posts">Insights</Link>
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

function initMenu (): void {
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    if (!(menuToggle instanceof HTMLInputElement)) {
      throw new Error("Failed to initialise menu: couldn't find valid mobile-menu");
    }

    window.addEventListener('hashchange', function() {
      menuToggle.checked = false;
    });

    const anchorLinks = document.querySelectorAll('a[href^="/#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.checked = false;
      });
    });
  });
}
