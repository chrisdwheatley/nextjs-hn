import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Next.js HN PWA</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
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
        </body>
      </html>
    );
  }
}
