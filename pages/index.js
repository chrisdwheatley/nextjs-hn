import fetch from "isomorphic-fetch";
import { Link } from "../routes";
import Navigation from "../components/navigation";

const Listing = ({ data }) => (
  <div>
    <Navigation />
    <ul>
      {data.map(({
        comments_count,
        id,
        points,
        time_ago,
        title,
        url,
        user
      }, index) => (
        <li key={id}>
          {index + 1}
          {" "}
          <a href={url}>{title}</a>
          {" "}
          <span>
            {user &&
              <span>
                {points}
                {" "}
                points by
                {" "}
                <Link route="user" params={{ name: user }}><a>{user}</a></Link>
              </span>}
            {" "}
            {time_ago}
            {user &&
              <span>
                {" "}|{" "}
                <Link prefetch route="comments" params={{ id }}>
                  <a>{comments_count} comments</a>
                </Link>
              </span>}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

Listing.getInitialProps = async ({ query: { type } }) => {
  const allowed = ["news", "new", "show", "ask", "jobs"];
  if (!type || !allowed.includes(type)) {
    type = "news";
  }
  if (type === "new") {
    type = "newest";
  }

  const res = await fetch(`https://node-hnapi.herokuapp.com/${type}`);
  const json = await res.json();
  return { data: json };
};

export default Listing;
