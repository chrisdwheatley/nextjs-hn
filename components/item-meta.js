import React from "react";
import { Link } from "../routes";

export default (
  { domain, url, title, user, points, time_ago, id, comments_count }
) => (
  <article>
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href={url}>
      <div className="dtc v-top pl2">
        <h1 className="f3 fw1 baskerville mt0 lh-title black">{title}</h1>{" "}
        <a className="f6 fw4 mt2 mb0 black-60">{domain}</a>{" "}
        <a className="f6 fw4 mt2 mb0 black-60">+{points}</a>{" "}
        <a className="f6 fw4 mt2 mb0 black-60">{time_ago}</a>{" "}
        <Link prefetch route="comments" params={{ id }}>
          <a className="link f6 fw4 mt2 mb0 black ba b--black-20 pa1">
            {comments_count} comments
          </a>
        </Link>
      </div>
    </a>
  </article>
);
