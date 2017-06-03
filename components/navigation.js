import { Link } from "../routes";
import GitHubRibbon from "../components/github-ribbon";

const navItems = ["home", "new", "show", "ask", "jobs"];

export default ({ current }) => {
  return (
    <section className="center bg-near-black mh4">
      <nav className="mw7 center">
        <Link
          key="home"
          prefetch
          route="home"
        >
          <a className="near-white dim link f6 f4-ns dib pl2 pr1 ph3-ns pv4 fw5">
            Next.js HN
          </a>
        </Link>
        {navItems.map(item => {
          const isHome = item === "home";

          return (
            <Link
              key={item}
              prefetch
              route={isHome ? "home" : "index"}
              params={isHome ? {} : { type: item }}
            >
              <a
                className={
                  `${current === item ? "pink" : "near-white dim"} link f7 f5-ns dib ph1 ph2-ns pv4 fw3`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </Link>
          );
        })}
      </nav>
      <GitHubRibbon link="https://github.com/chrisdwheatley/nextjs-hn-pwa" />
    </section>
  );
};
