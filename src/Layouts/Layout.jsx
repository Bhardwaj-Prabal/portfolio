import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Liam's Personal Portfolio!" />
        <meta name="viewport" content="1024" />
        
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </Helmet>
      {children}
      <style jsx global>{`
        :root {
          --background-color: #13151a;
          --header-color: #ffffff;
          --subheader-color: #e0e0e0;
          --card-color: #1a1c21;
          --text-color: #d0d0d0;
          --footer-color: #13151a;
          --accent: 0, 102, 255;
          --accent-light: 153, 194, 255;
          --accent-dark: 49, 10, 101;
          --accent-gradient: linear-gradient(
            45deg,
            rgb(var(--accent)),
            rgb(var(--accent-light)) 30%,
            white 60%
          );
        }
        html,
        body {
          background-image: linear-gradient(
            45deg,
            #0f1012 0%,
            #11141a 25%,
            #13151a 50%,
            #151820 75%,
            #181b25 100%
          );
        }
        html {
          font-family: system-ui, sans-serif;
          background: var(--background-color);
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          overflow-x: hidden;
          margin: 0;
        }
        * {
          scrollbar-width: auto;
          scrollbar-color: var(--text-color) var(--background-color);
        }
        *::-webkit-scrollbar {
          width: 16px;
        }
        *::-webkit-scrollbar-track {
          background: var(--background-color);
        }
        *::-webkit-scrollbar-thumb {
          background-color: var(--text-color);
          border-radius: 10px;
          border: 3px solid var(--text-color);
        }
        @import url("https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css");
        code {
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
        h1 {
          color: var(--header-color);
          margin: 1em 1em 0.25em;
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          text-align: center;
        }
        h2 {
          color: var(--subheader-color);
          margin: 0.5em;
          font-size: 1.5rem;
          font-weight: 400;
          text-align: center;
        }
        .title {
          padding: 1rem;
          margin: 1rem;
        }
        .text-link {
          color: var(--header-color);
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          position: relative;
        }
        .text-link:after {
          bottom: 0;
          content: "";
          height: 2px;
          left: 50%;
          position: absolute;
          background: var (--header-color);
          transition:
            width 0.2s ease 0s,
            left 0.2s ease 0s;
          width: 0;
        }
        .text-link:hover:after {
          width: 100%;
          left: 0;
        }
        p {
          font-size: 1rem;
          color: var (--text-color);
          margin: 0.2em;
        }
        strong {
          color: var(--header-color);
        }
      `}</style>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"
        defer
      ></script>
    </>
  );
};

export default Layout;
