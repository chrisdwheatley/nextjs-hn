# nextjs-hn ([nextjs-hn.chrisdwheatley.com](https://nextjs-hn.chrisdwheatley.com/))

A Hacker News Progressive Web App built using Next.js

## Features

* Server-rendered [React](https://facebook.github.io/react/) with [Next.js](https://github.com/zeit/next.js/)
* Aliases React to [Preact](https://preactjs.com/) in production for a smaller bundle size
* Service worker support with [sw-precache](https://github.com/GoogleChrome/sw-precache)
* 100/100 Lighthouse score
* Server side in memory LRU cache to improve time to first byte
* DNS prefetching for client side API requests

## Getting Started

Clone the repository.

```
git clone git@github.com:chrisdwheatley/nextjs-hn.git
```

`cd` into the directory.

```
cd nextjs-hn
```

Install the project dependencies.

```
yarn

or

npm install
```

Start the development server.

```
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000) in your browser of choice.

Testing the Service Worker setup requires running as production.

```
npm run build
```

```
npm start
```

Navigate to [localhost:3000](http://localhost:3000) in your browser of choice.

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
