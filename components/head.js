import Head from "next/head";

module.exports = () => (
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
    <link rel="stylesheet" href="/static/tachyons.min.css" />
    <style global jsx>
      {
        `
      body {
        overflow-y: scroll;
        max-width: 100%;
        overflow-x: hidden;
      }
    `
      }
    </style>
  </Head>
);
