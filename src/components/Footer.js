import { footer } from "../data";

export default function Footer() {
  return (
    <section>
      <p>
        {footer.text}{" "}
        <a
          className="dark:text-green-500 text-blue-500"
          href={footer.authorUrl}
          target="_blank"
          rel="noreferrer"
        >
          {footer.authorName}
        </a>{" "}
        {footer.hostingText}{" "}
        <a
          className="dark:text-green-500 text-blue-500"
          href={footer.hostingUrl}
          target="_blank"
          rel="noreferrer"
        >
          {footer.hostingName}
        </a>
      </p>
    </section>
  );
}
