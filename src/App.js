import React, { useState, useEffect } from 'react';

export default function App() {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // Toggle the theme state
    setIsDarkMode(!isDarkMode);
  };

  // Update the theme when the state changes
  useEffect(() => {
    // Update the class and localStorage based on the current mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);
  return (
    <div className="main dark:text-gray-400 text-zinc-600 scroll-smooth dark:selection:bg-green-300 dark:selection:text-green-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-stone-50 sm:text-5xl">
                <a href="/">Kyle Holliday</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-900 dark:text-stone-50 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I like to build (and occasionally design) mobile-friendly,
                accessible products that provide a great user experience.
              </p>
              <div className="pointer-events-auto">
                <button
                  type="button"
                  aria-label="Switch to light theme"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 mt-4"
                  onClick={toggleTheme}
                >
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-blue-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-blue-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-600"
                  >
                    <path
                      d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                  >
                    <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                    <path
                      d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                      fill="none"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 dark:bg-gray-400 bg-blue-500 transition-all group-hover:w-16 dark:group-hover:bg-green-600 group-hover:bg-blue-500 group-focus-visible:w-16 dark:group-focus-visible:bg-green-600 group-focus-visible:bg-blue-500 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest dark:group-hover:text-green-600 group-hover:text-blue-500 dark:group-focus-visible:text-green-600 group-focus-visible:text-blue-500">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 dark:bg-gray-400 bg-blue-500 transition-all group-hover:w-16 dark:group-hover:bg-green-600 group-hover:bg-blue-500 group-focus-visible:w-16 dark:group-focus-visible:bg-green-600 group-focus-visible:bg-blue-500 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest dark:group-hover:text-green-600 group-hover:text-blue-500 dark:group-focus-visible:text-green-600 group-focus-visible:text-blue-500">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 dark:bg-gray-400 bg-blue-500 transition-all group-hover:w-16 dark:group-hover:bg-green-600 group-hover:bg-blue-500 group-focus-visible:w-16 dark:group-focus-visible:bg-green-600 group-focus-visible:bg-blue-500 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest dark:group-hover:text-green-600 group-hover:text-blue-500 dark:group-focus-visible:text-green-600 group-focus-visible:text-blue-500">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block dark:hover:text-gray-200 hover:text-slate-400"
                  href="https://github.com/kyleholliday"
                  target="_blank"
                  rel="noreferrer"
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
              <li className="mr-5 text-xs">
                <a
                  className="block dark:hover:text-gray-200 hover:text-slate-400"
                  href="https://dribbble.com/KyleHolliday"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Dribbble</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block dark:hover:text-gray-200 hover:text-slate-400"
                  href="https://www.linkedin.com/in/kyle-holliday/"
                  target="_blank"
                  rel="noreferrer"
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
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  Howdy. I'm Kyle. I've got a passion for front-end development
                  and have been involved in the world of software engineering
                  for the better part of a decade. My knowledge mainly focuses
                  on crafting seamless user experiences using React, Angular,
                  and JavaScript. While coding makes up the majority of my
                  portfolio, I also enjoy designing with tools like Figma and
                  Sketch.
                </p>
                <p className="mb-4">
                  Throughout my career, I've had the privilege of contributing
                  to a variety of endeavors, from small startups to Fortune 500
                  companies and financial institutions. Looking ahead, my focus
                  remains on leveraging technology to build impactful solutions.
                  Excited about the future, I bring a creative blend of
                  programming and design skills to every project. Let's shape
                  the digital landscape together.
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              aria-label="experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200">
                  Experience
                </h2>
              </div>
              <div>
                <ol>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 dark:text-gray-400 text-zinc-600"
                        aria-label="2018 to Present"
                      >
                        2024 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.premierinc.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Senior Front End Developer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Senior Front End Developer · <> </>
                                <span className="inline-block">
                                  Premier Inc.
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal"></p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              CSS/SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Git
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Figma
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Sanity CMS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Craft CMS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 dark:text-gray-400 text-zinc-600"
                        aria-label="2018 to Present"
                      >
                        2023 — 2024
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.firstcitizens.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Software Developer at First Citizens Bank"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Developer · <> </>
                                <span className="inline-block">
                                  First Citizens Bank
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Designed and developed internal applications in
                          JavaScript and Angular. Migrated large-scale internal
                          applications from AngularJS to Angular 2+, as well as
                          updated design systems.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              CSS/SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Storybook
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TIBCO
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Azure
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-400 text-zinc-600 sm:col-span-2"
                        aria-label="July to December 2017"
                      >
                        2020 — 2023
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.captechconsulting.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Software Engineer / Senior Consultant at CapTech Consulting"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer / Senior Consultant · <> </>
                                <span className="inline-block">
                                  CapTech Consulting
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Developed high-quality production applications for a
                          diverse array of development projects, teams, and
                          clients including Bank of America, Capital One, and
                          PGA Tour. Designed and implemented award-winning
                          responsive, accessible, and mobile-friendly interfaces
                          using modern day technology libraries. Utilized tools
                          like Figma, Sketch, and Invision in the design
                          process. Employed agile methodologies and project
                          management techniques to deliver projects on time.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Related links"
                        ></ul>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              CSS/SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Craft CMS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Sanity CMS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-400 text-zinc-600 sm:col-span-2"
                        aria-label="July to December 2017"
                      >
                        2016 — 2020
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.signupgenius.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Web Developer at SignUpGenius"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Web Developer · <> </>
                                <span className="inline-block">
                                  SignUpGenius
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Coded dynamic and responsive applications, landing
                          pages and emails. Designed multiple applications,
                          landing pages, and emails in a team-based environment
                          using tools such as Sketch and Invision Freehand.
                          Worked on and with multiple teams in tandem (UI/UX,
                          Development, Marketing, and Testing) to produce the
                          best product in the least amount of time.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Related links"
                        ></ul>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              CSS/SCSS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="skills"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200">
                  Skills
                </h2>
              </div>
              <div>
                <ol>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-400 text-zinc-600 sm:col-span-2"
                        aria-label="2018 to Present"
                      >
                        Programming Languages
                      </header>
                      <div className="z-10 sm:col-span-6">
                        {/* <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.firstcitizens.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Software Developer at First Citizens Bank"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Programming Languages</span>
                            </a>
                          </div>
                        </h3> */}
                        <ul className="flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              HTML
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              CSS/SCSS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-400 text-zinc-600 sm:col-span-2"
                        aria-label="2018 to Present"
                      >
                        Libraries & Frameworks
                      </header>
                      <div className="z-10 sm:col-span-6">
                        {/* <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.firstcitizens.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Software Developer at First Citizens Bank"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Programming Languages</span>
                            </a>
                          </div>
                        </h3> */}
                        <ul className="flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Node
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Next.js
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Tailwind
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Bootstrap
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-400 text-zinc-600 sm:col-span-2"
                        aria-label="2018 to Present"
                      >
                        Tools & Platforms
                      </header>
                      <div className="z-10 sm:col-span-6">
                        {/* <h3 className="font-medium leading-snug text-slate-900 dark:text-gray-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                              href="https://www.firstcitizens.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Software Developer at First Citizens Bank"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Programming Languages</span>
                            </a>
                          </div>
                        </h3> */}
                        <ul className="flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Git
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              GitHub
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Azure
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Netlify
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Vercel
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Bitbucket
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Docker
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Craft CMS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Sanity CMS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Jira
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Figma
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Sketch
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Photoshop
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              InVision
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              npm
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Yarn
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5 dark:text-green-300 text-blue-500 dark:bg-green-400/10 bg-blue-400/10">
                              Gulp
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center leading-tight text-slate-900 dark:text-gray-200 font-semibold group"
                    aria-label="View Resume"
                    href="/Kyle-Holliday-Resume.pdf"
                    target="_blank"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition dark:group-hover:border-green-600 group-hover:border-blue-500 motion-reduce:transition-none">
                        View Resume <> </>
                      </span>
                      <span className="whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
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
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200">
                  Latest Personal Projects
                </h2>
              </div>
              <div>
                <ul>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/60 dark:lg:group-hover:dark:bg-zinc-700/50"></div>
                      <div className="z-10 sm:order-2 sm:col-span-4">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                            href="https://www.bijou-movies.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Bijou Movies and TV Database"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Bijou{' '}
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Movie and TV database app that utilizes React,
                          TypeScript, and a handful of APIs. Discover a world of
                          entertainment with over a million movies and TV shows.
                          From upcoming and newly released blockbusters to
                          trending TV.
                        </p>
                      </div>
                      <img
                        alt=""
                        loading="lazy"
                        width="300"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-4"
                        srcSet="bijou.png"
                        src="bijou.png"
                      />
                    </div>
                  </li>
                  {/* <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/60 dark:lg:group-hover:dark:bg-zinc-700/50"></div>
                      <div className="z-10 sm:order-2 sm:col-span-4">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                            href="https://holliday-spotify-app-1268cb18a08c.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify Profile App"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Spotify Profile App{' '}
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          An application that uses Spotify's API, React, and
                          Node.js to show your profile, top artists, top tracks,
                          and some other fun stuff.{' '}
                          <span className="dark:text-green-500 text-blue-500">
                            With the current Spotify API rules, you'll need to
                            email me so I can add your login/email to the list
                            for entry (unfortunately)
                          </span>
                          .
                        </p>
                      </div>
                      <img
                        alt=""
                        loading="lazy"
                        width="300"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-4"
                        srcSet="spotify-profile.png"
                        src="spotify-profile.png"
                      />
                    </div>
                  </li> */}
                  {/* <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/60 dark:lg:group-hover:dark:bg-zinc-700/50"></div>
                      <div className="z-10 sm:order-2 sm:col-span-4">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-base"
                            href="https://www.bijou-movies.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Bijou Movies and TV Database"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Bijou{' '}
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Movie and TV database app that utilizes the TMDB and
                          JustWatch APIs. Discover a world of entertainment with
                          over a million movies and TV shows. From upcoming and
                          newly released blockbusters to trending TV, we've got
                          your popcorn ready.
                        </p>
                      </div>
                      <img
                        alt=""
                        loading="lazy"
                        width="300"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-4"
                        srcSet="bijou.png"
                        src="bijou.png"
                      />
                    </div>
                  </li> */}
                </ul>
              </div>
            </section>
            <section>
              <p>
                This site was made with React, TypeScript, and SCSS/Tailwind by{' '}
                <a
                  className="dark:text-green-500 text-blue-500"
                  href="https://github.com/kyleholliday/portfolio2024"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kyle Holliday
                </a>{' '}
                and is hosted via{' '}
                <a
                  className="dark:text-green-500 text-blue-500"
                  href="https://netlify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify
                </a>
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
