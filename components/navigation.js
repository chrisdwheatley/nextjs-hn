import { Link } from "../routes";

const navItems = ["home", "new", "show", "ask", "jobs"];

export default ({ current }) => {
  return (
    <section className="center bg-near-black mh4">
      <nav className="mw7 center">
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
                  `${current === item ? "pink" : "near-white dim"} link f6 dib ph2 ph3-ns pv4 fw3`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>

            </Link>
          );
        })}
      </nav>
    </section>
  );
};
