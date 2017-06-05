import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Next.js HN PWA</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A Hacker News Progressive Web App built using Next.js"
          />
          <meta name="theme-color" content="#ff80cc" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body className="sans-serif">
          <Main />
          <NextScript />

          <style jsx>
            {
              `
            @import 'tachyons/css/tachyons.min.pure';
          `
            }
          </style>
          <style global jsx>
            {
              `
            body {
              overflow-y: scroll;
              max-width: 100%;
              overflow-x: hidden;
            }

            .page-transition-appear {
              transition: opacity .3s ease-in-out;
              opacity: 0;
            }
            .page-transition-appear.page-transition-appear-active {
              opacity: 1;
            }
            .page-transition-leave {
              transition: opacity .3s ease-in-out;
              opacity: 1;
            }
            .page-transition-leave.page-transition-leave-active {
              opacity: 0;
            }

            .github-corner {
              position: absolute;
              top: 0;
              right: 0;
              height: 5em;
              width: 5em
            }

            .github-corner:hover .octo-arm, .github-corner:focus .octo-arm {
              animation: octocat-wave 560ms ease-in-out
            }

            @keyframes octocat-wave {
              0%, 100% {
                transform: rotate(0)
              }
              20%, 60% {
                transform:rotate(-25deg)
              }
              40%, 80% {
                transform:rotate(10deg)
              }
            }

            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              background: #ff80cc;
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
            }
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #ff80cc, 0 0 5px #ff80cc;
              opacity: 1.0;
              transform: rotate(3deg) translate(0px, -4px);
            }
            `
            }
          </style>
        </body>
      </html>
    );
  }
}
