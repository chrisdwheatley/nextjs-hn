import { Link } from "../routes";

export default () => (
  <nav className="mw7 center">
    <Link prefetch route="home">
      <a className="link dim moon-gray f5 dib ph3 pv4">
        Home
      </a>
    </Link>
    <Link prefetch route="index" params={{ type: "new" }}>
      <a className="link dim moon-gray f5 dib ph3 pv4">
        New
      </a>
    </Link>
    <Link prefetch route="index" params={{ type: "show" }}>
      <a className="link dim moon-gray f5 dib ph3 pv4">
        Show
      </a>
    </Link>
    <Link prefetch route="index" params={{ type: "ask" }}>
      <a className="link dim moon-gray f5 dib ph3 pv4">
        Ask
      </a>
    </Link>
    <Link prefetch route="index" params={{ type: "jobs" }}>
      <a className="link dim moon-gray f5 dib ph3 pv4">
        Jobs
      </a>
    </Link>
  </nav>
);
