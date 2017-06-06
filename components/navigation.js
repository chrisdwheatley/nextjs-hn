import { Link } from "../routes";
import GitHubRibbon from "../static/github-ribbon.svg";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const navItems = ["top", "new", "show", "ask", "jobs"];

export default ({ current }) => {
  return (
    <section className="center bg-near-black mh4">
      <nav className="mw7 center">
        <Link prefetch route="top">
          <a
            className="near-white link hover-pink f6 f4-ns dib pl2 pr1 ph3-ns pv3 fw5"
          >
            Next.js HN
          </a>
        </Link>
        {navItems.map(item => {
          const isTopStories = item === "top";

          return (
            <Link
              key={item}
              prefetch
              route={isTopStories ? "top" : "first"}
              params={isTopStories ? {} : { type: item }}
            >
              <a
                className={
                  `${current === item ? "pink" : "near-white grow hover-pink"} ttc link f7 f5-ns dib ph1 ph2-ns pv4 fw3`
                }
              >
                {item}
              </a>
            </Link>
          );
        })}
      </nav>
      <a
        href="https://github.com/chrisdwheatley/nextjs-hn"
        className="github-corner link white"
        aria-label="View source on Github"
      >
        <GitHubRibbon />
      </a>
      <style global jsx>
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
        .tc {
          text-align: center;
        }
        `
        }
      </style>
    </section>
  );
};
