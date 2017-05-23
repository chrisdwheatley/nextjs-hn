import React from "react";
import { Link } from "../routes";

export default ({ url, title, user, points, time_ago, id, comments_count }) => (
  <span style={{ lineHeight: "1.5em" }}>
    <a href={url}>{title}</a>
    {" "}
    {user &&
      <span>
        {points} points by <Link route="user" params={{ name: user }}>
          <a>{user}</a>
        </Link>
      </span>}
    {" "}
    {time_ago}
    {user &&
      <span>
        {" "}| <Link prefetch route="comments" params={{ id }}>
          <a>{comments_count} comments</a>
        </Link>
      </span>}
  </span>
);
