import React from "react";
import { Link } from "../routes";

export default () => (
  <nav class="w-100 border-box pa3 bg-light-yellow">
    <Link prefetch route="home">
      <a className="link dim navy mr3 f4 b" href="#" title="Home">Home</a>
    </Link>
    <Link prefetch route="index" params={{ type: "new" }}>
      <a className="link dim navy mr3 f4 b" href="#" title="About">New</a>
    </Link>
    <Link prefetch route="index" params={{ type: "show" }}>
      <a className="link dim navy mr3 f4 b" href="#" title="Store">Show</a>
    </Link>
    <Link prefetch route="index" params={{ type: "ask" }}>
      <a className="link dim navy mr3 f4 b" href="#" title="Contact">Ask</a>
    </Link>
    <Link prefetch route="index" params={{ type: "jobs" }}>
      <a className="link dim navy mr3 f4 b" href="#" title="Contact">Jobs</a>
    </Link>
  </nav>
);
