import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
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
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <div className="main dark:text-gray-200 text-zinc-600 scroll-smooth dark:selection:bg-green-300 dark:selection:text-green-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
