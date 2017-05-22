import React from "react";
import { Link } from "../routes";

export default () => (
  <div>
    <Link prefetch route="home">
      <a>HN</a>
    </Link> |{" "}
    <Link prefetch route="index" params={{ type: "new" }}>
      <a>New</a>
    </Link> |{" "}
    <Link prefetch route="index" params={{ type: "show" }}>
      <a>Show</a>
    </Link> |{" "}
    <Link prefetch route="index" params={{ type: "ask" }}>
      <a>Ask</a>
    </Link> |{" "}
    <Link prefetch route="index" params={{ type: "jobs" }}>
      <a>Jobs</a>
    </Link>
  </div>
);
