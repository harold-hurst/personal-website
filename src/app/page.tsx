"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

const sections = ["about", "projects", "experience"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop - 96 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 96
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl underline font-bold tracking-tight sm:text-5xl">
              Harry Hurst
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              Front End Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="mt-8 flex me-4">
                {sections.map((id) => (
                  <li
                    key={id}
                    className={`group flex-1 transition-all motion-reduce:transition-none ${
                      activeSection === id ? "flex-2" : ""
                    }`}
                  >
                    <a
                      className="py-5 block cursor-pointer pe-4"
                      href={`#${id}`}
                    >
                      <span
                        className={`nav-text inline-flex items-center w-full h-8 px-2 border text-xs font-bold uppercase tracking-widest group-hover:text-slate-50 group-focus-visible:text-slate-50 transition-all duration-300 motion-reduce:transition-none ${
                          activeSection === id
                            ? "text-slate-50"
                            : "text-slate-300"
                        }`}
                      >
                        {id}
                      </span>
                    </a>
                  </li>
                ))}

                {/* <li className="group flex-1 hover:flex-2 transition-all motion-reduce:transition-none">
                  <a
                    className="py-5 block cursor-pointer pe-4"
                    href="#projects"
                  >
                    <span className="nav-text inline-flex items-center w-full h-8 px-2 border text-xs font-bold uppercase tracking-widest text-slate-300  group-hover:text-slate-50 group-focus-visible:text-slate-50 transition-all duration-300 motion-reduce:transition-none">
                      Projects
                    </span>
                  </a>
                </li>

                <li className="group flex-1 hover:flex-2 transition-all motion-reduce:transition-none">
                  <a
                    className="py-5 block cursor-pointer pe-4"
                    href="#experience"
                  >
                    <span className="nav-text inline-flex items-center w-full h-8 px-2 border text-xs font-bold uppercase tracking-widest text-slate-300  group-hover:text-slate-50 group-focus-visible:text-slate-50 transition-all duration-300 motion-reduce:transition-none">
                      Experience
                    </span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4">
                A passionate and dedicated developer, skilled in building static
                and dynamic front-end web services. Knowledge and practical
                experience with modern web frameworks and content management
                systems. Competent in all major development languages with a
                deep understanding of web/browser architecture. With an eye for
                great design, I
              </p>
              <p className="mb-4">
                am able to contribute both to technical and aesthetic aspects of
                front-end development. Having worked in the web development team
                for a large financial organisation as well as on my own personal
                Javascript projects, I have a breadth of abilities and am always
                eager to expand my technical knowledge. I am equally comfortable
                collaborating within teams or managing tasks independently to
                deliver high-quality digital experiences to industry standards
                and web best practices
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.klaviyo.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Klaviyo (opens in a new tab)"
                >
                  Klaviyo
                </a>
              </p>
              <p className="mb-4"></p>
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                Projects
              </h2>
            </div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight hover:text-cyan-400 focus-visible:text-cyan-400  group/link text-base"
                        href="https://harold-hurst.co.uk/gazetteer/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Gazetteer Web App (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Gazetteer Web App
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Mobile first web app that provides profiling for all
                      countries through the presentation of demographic,
                      climatic, geographical and other data.
                    </p>
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                      href="https://github.com/bchiang7/spotify-profile"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="689 stars on GitHub (opens in a new tab)"
                    ></a>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used:"
                    >
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md bg-slate-800/50 group-hover:bg-slate-800/0 px-3 py-1 text-xs font-medium leading-5 text-cyan-400 ">
                          PHP,
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md bg-slate-800/50 group-hover:bg-slate-800/0 px-3 py-1 text-xs font-medium leading-5 text-cyan-400 ">
                          Leaflet JS,
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md bg-slate-800/50 group-hover:bg-slate-800/0 px-3 py-1 text-xs font-medium leading-5 text-cyan-400 ">
                          Bootstrap,
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md bg-slate-800/50 group-hover:bg-slate-800/0 px-3 py-1 text-xs font-medium leading-5 text-cyan-400 ">
                          Javascript
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Image
                    alt="Gazetteer Web App"
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    src="/gazetteer.png"
                  />
                </div>
              </li>
            </ul>
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2024 — Present
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400  group/link text-base"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Senior Frontend Engineer, Accessibility ·{" "}
                              <span className="inline-block">
                                Klaviyo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2018 to 2024"
                    >
                      2018 — 2024
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://upstatement.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Lead Engineer at Upstatement (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Lead Engineer ·{" "}
                              <span className="inline-block">
                                Upstatement
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div>
                          <div className="text-slate-500" aria-hidden="true">
                            Senior Engineer
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-500" aria-hidden="true">
                            Engineer
                          </div>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Build, style, and ship high-quality websites, design
                        systems, mobile apps, and digital experiences for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and spearheading the development of internal
                        tools.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            HTML &amp; SCSS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Next.js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React Native
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            WordPress
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Contentful
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Node.js
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            PHP
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="July to December 2017"
                    >
                      July — Dec 2017
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.apple.com/apple-music/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="UI Engineer Co-op at Apple (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              UI Engineer Co-op ·{" "}
                              <span className="inline-block">
                                Apple
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Developed and styled interactive web apps for Apple
                        Music, including the user interface of Apple Music’s
                        embeddable web player widget for in-browser user
                        authorization and full song playback.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Related links"
                      >
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://developer.apple.com/documentation/musickitjs"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="MusicKit.js (opens in a new tab)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>MusicKit.js</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="9to5Mac (opens in a new tab)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>9to5Mac</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="The Verge (opens in a new tab)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>The Verge</span>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Ember
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            SCSS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            MusicKit.js
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2016 to 2017"
                    >
                      2016 — 2017
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://scout.camd.northeastern.edu/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Developer at Scout Studio (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Developer · Scout{" "}
                              <span className="inline-block">
                                Studio
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Collaborated with other student designers and engineers
                        on pro-bono projects to create new brands, design
                        systems, and websites for organizations in the
                        community.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Jekyll
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            SCSS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            WordPress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="July to December 2016"
                    >
                      July — Dec 2016
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://starry.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Software Engineer Co-op at Starry (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Software Engineer Co-op ·{" "}
                              <span className="inline-block">
                                Starry
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Worked with the UI team to engineer and improve major
                        features of Starry’s customer-facing Android app.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Related links"
                      >
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Android App (opens in a new tab)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>Android App</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="ScreenTime 2.0 (opens in a new tab)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>ScreenTime 2.0</span>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Cordova
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Backbone
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            CSS
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="July to December 2015"
                    >
                      July — Dec 2015
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://us.mullenlowe.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Creative Technologist Co-op · MullenLowe{" "}
                              <span className="inline-block">
                                U.S.
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Developed, maintained, and shipped production code for
                        client websites. Clients included JetBlue, Lovesac, U.S.
                        Cellular, U.S. Department of Defense, and more.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            HTML
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            CSS
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            jQuery
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
              <div className="mt-12">
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé (opens in a new tab)"
                >
                  <span>
                    View Full{" "}
                    <span className="inline-block">
                      Résumé
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Loosely designed in{" "}
              <a
                href="https://www.figma.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Figma (opens in a new tab)"
              >
                Figma
              </a>{" "}
              and coded in{" "}
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visual Studio Code (opens in a new tab)"
              >
                Visual Studio Code
              </a>{" "}
              by yours truly. Built with{" "}
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Next.js (opens in a new tab)"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Tailwind CSS (opens in a new tab)"
              >
                Tailwind CSS
              </a>
              , deployed with{" "}
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Vercel (opens in a new tab)"
              >
                Vercel
              </a>
              . All text is set in the{" "}
              <a
                href="https://rsms.me/inter/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Inter (opens in a new tab)"
              >
                Inter
              </a>{" "}
              typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
