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
          <a className="near-white link f6 f4-ns dib pl2 pr1 ph3-ns pv3 fw5">
            Next.js HN
          </a>
        </Link>
        {navItems.map(item => {
          const isTopStories = item === "top";

          return (
            <Link
              key={item}
              prefetch
              route={isTopStories ? "top" : "index"}
              params={isTopStories ? {} : { type: item }}
            >
              <a
                className={
                  `${current === item ? "pink" : "near-white grow"} link f7 f5-ns dib ph1 ph2-ns pv4 fw3`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </Link>
          );
        })}
      </nav>
      <a
        href="https://github.com/chrisdwheatley/nextjs-hn-pwa"
        className="github-corner link white"
        aria-label="View source on Github"
      >
        <GitHubRibbon />
      </a>
    </section>
  );
};
