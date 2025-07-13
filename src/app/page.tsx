"use client";

import Image from "next/image";
import EmailForm from "../components/EmailForm";

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
              Harry Hurst<i className="text-cyan-400">.</i>
            </h1>
            <h2 className="group/group1 mt-3 text-lg font-medium tracking-tight sm:text-xl">
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[15ms]"
                aria-hidden="true"
              >
                F
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[30ms]"
                aria-hidden="true"
              >
                r
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[45ms]"
                aria-hidden="true"
              >
                o
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[60ms]"
                aria-hidden="true"
              >
                n
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[75ms]"
                aria-hidden="true"
              >
                t{" "}
              </span>

              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[105ms]"
                aria-hidden="true"
              >
                E
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[120ms]"
                aria-hidden="true"
              >
                n
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[135ms]"
                aria-hidden="true"
              >
                d{" "}
              </span>

              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[165ms]"
                aria-hidden="true"
              >
                W
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[180ms]"
                aria-hidden="true"
              >
                e
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[195ms]"
                aria-hidden="true"
              >
                b{" "}
              </span>

              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[225ms]"
                aria-hidden="true"
              >
                D
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[240ms]"
                aria-hidden="true"
              >
                e
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[255ms]"
                aria-hidden="true"
              >
                v
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[270ms]"
                aria-hidden="true"
              >
                e
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[285ms]"
                aria-hidden="true"
              >
                l
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[300ms]"
                aria-hidden="true"
              >
                o
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[315ms]"
                aria-hidden="true"
              >
                p
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[330ms]"
                aria-hidden="true"
              >
                e
              </span>
              <span
                className="group-hover/group1:text-cyan-400 transition duration-75 delay-[345ms]"
                aria-hidden="true"
              >
                r
              </span>
            </h2>
            <p className="mt-4 max-w-sm leading-normal">
              I develop performant, scalable, and accessible web applications
              using modern frameworks and clean, maintainable code.
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
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://github.com/harold-hurst"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://www.linkedin.com/in/harryhurstdev/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Resume (opens in a new tab)"
                title="Resume"
              >
                <span className="sr-only">Resume</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-file-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>
              </a>
            </li>
          </ul>
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-cyan-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4">
                A passionate and dedicated developer, skilled in building static
                and dynamic front-end web services. Knowledge and practical
                experience with modern web frameworks and content management
                systems. Competent in a range of development languages with a
                strong understanding of web/browser architecture.
              </p>
              <p className="mb-4">
                With an eye for great design, I am able to contribute both to
                technical and aesthetic aspects of front-end development. Having
                worked in the web development team for a large financial
                organisation as well as on my own personal Javascript projects,
                I have a breadth of abilities and am always eager to expand my
                technical knowledge. I am equally comfortable collaborating
                within teams or managing tasks independently to deliver
                high-quality digital experiences to industry standards and web
                best practices.
              </p>
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-cyan-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                Projects
              </h2>
            </div>
            <ul className="projectsList">
              <li className="mb-12 cursor-pointer">
                <div className="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used:"
                    >
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 text-xs font-medium leading-5  ">
                          APIs
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 text-xs font-medium leading-5  ">
                          PHP
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 not-only:py-1 text-xs font-medium leading-5  ">
                          Leaflet JS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 not-last:not-only:py-1 text-xs font-medium leading-5  ">
                          Bootstrap
                        </div>
                      </li>{" "}
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

              <li className="mb-12 cursor-pointer">
                <div className="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight hover:text-cyan-400 focus-visible:text-cyan-400  group/link text-base"
                        href="https://harold-hurst.co.uk/company_directory/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Company Directory Web App (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Company Directory Web App
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
                      Interact with a back end server database from a mobile or
                      desktop based client that allows for creation, retrieval
                      and modification of company personnel.
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used:"
                    >
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 text-xs font-medium leading-5  ">
                          SQL
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 text-xs font-medium leading-5  ">
                          Bootstrap
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 not-last:not-only:py-1 text-xs font-medium leading-5  ">
                          CRUD
                        </div>
                      </li>{" "}
                      <li className="mr-1.5 mt-2">
                        <div className="border border-cyan-400 transition-all duration-300 px-3 rounded py-1 not-only:py-1 text-xs font-medium leading-5  ">
                          jQuery
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Image
                    alt="Company Directory Web App"
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    src="/company_directory.png"
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-cyan-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol className="experienceList">
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2"
                      aria-label="March 2025 to Present"
                    >
                      March 2025 — Present
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400  group/link text-base"
                            href="https://www.aegon.co.uk/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Junior Web Developer, at Aegon UK (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Web | Software Development Traineeship ·{" "}
                              <span className="inline-block">
                                IT Career Switch
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
                        A comprehensive full-stack program focused on both
                        front-end and back-end technologies. Gained hands-on
                        experience in HTML5, CSS3, JavaScript, React, Python,
                        PHP, SQL, and Git, while also earning
                        industry-recognized certifications such as Microsoft
                        98-383. Built a professional-grade portfolio through
                        guided real-world projects, demonstrating practical
                        skills in responsive design, dynamic web applications,
                        and version control.
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Related links"
                      >
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                            href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Full Stack Engineer (opens in a new tab)"
                          >
                            <i className="bi bi-code-slash me-2"></i>
                            <span>Full Stack Engineer</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                            href="https://www.codecademy.com/learn/introduction-to-javascript"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Learn Javascript (opens in a new tab)"
                          >
                            <i className="bi bi-filetype-js me-2"></i>
                            <span>Javascript Essentials</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                            href="https://www.codecademy.com/learn/learn-bootstrap"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Learn Bootstrap (opens in a new tab)"
                          >
                            <i className="bi bi-bootstrap me-2"></i>
                            <span>Bootstrap</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                            href="https://www.codecademy.com/learn/paths/php-skill"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Learn PHP (opens in a new tab)"
                          >
                            <i className="bi bi-filetype-php me-2"></i>
                            <span>PHP</span>
                          </a>
                        </li>
                        <li className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                            href="https://www.codecademy.com/learn/learn-java"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Learn Java (opens in a new tab)"
                          >
                            <i className="bi bi-filetype-java me-2"></i>
                            <span>Java</span>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            Python
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            Java
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            C#
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            jQuery
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            PHP
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            SQL Databases
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
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      Jan — Dec 2022
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400  group/link text-base"
                            href="https://www.aegon.co.uk/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Junior Web Developer, at Aegon UK (opens in a new tab)"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Junior Web Developer ·{" "}
                              <span className="inline-block">
                                Aegon UK
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
                        Daily maintenance and updates of public website using
                        Adobe AEM CMS. Migration of company website to new
                        hosting platform. Cross-browser and device testing using
                        BrowserStack to ensure accessible website content.
                        Collaboration with other departments to update online
                        articles, promotional material, FAQ pages and images.
                        SEO using tools such as Semrush
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            Adobe AEM
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            Semrush
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="border border-cyan-400 transition-all duration-300 rounded px-3 py-1 text-xs font-medium leading-5  ">
                            Google Analytics
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
              <div className="mt-12">
                <a
                  className="inline-flex items-baseline leading-tight hover:text-cyan-400 focus-visible:text-cyan-400 font-semibold text-slate-200 group/link text-base"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé (opens in a new tab)"
                >
                  <span>
                    View Full CV{" "}
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
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Contact me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-cyan-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                Contact
              </h2>
            </div>
            <div>
              <EmailForm />
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm sm:pb-0">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Next.js (opens in a new tab)"
              >
                Next.js
              </a>{" "}
              for fast, server-rendered React pages and styled using{" "}
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Tailwind (opens in a new tab)"
              >
                Tailwind css
              </a>{" "}
              for utility-first responsiveness. Deployed via{" "}
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Vercel (opens in a new tab)"
              >
                Vercel
              </a>
              . Typography is set in the clean, modern Inter typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
