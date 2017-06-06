import { Link } from "../routes";
import { CSSTransitionGroup } from "react-transition-group";

export default (
  { domain, url, title, user, points, time_ago, id, comments_count }
) => {
  let internalUrl;
  if (url.substring(0, 8) === "item?id=") {
    internalUrl = url.split("=").pop();
  }

  return (
    <article>
      <div className="dt w-100 bb b--black-10">
        <div className="dtc pt2 pl2 pl3-ns w-50 w-65-m w-90-l">
          {internalUrl &&
            <Link prefetch route="comments" params={{ id: internalUrl }}>
              <a
                className="link dim f4 f3-ns f2-l fw3 lh-solid mv0 near-black baskerville"
              >
                {title}
                {" "}
                {domain &&
                  <span className="f7 f6-ns f5-l fw3 black-60 sans-serif">
                    ({domain})
                  </span>}
              </a>
            </Link>}
          {!internalUrl &&
            <a
              className="link dim f4 f3-ns f2-l fw3 lh-solid mv0 near-black baskerville"
              href={url}
            >
              {title}
              {" "}
              {domain &&
                <span className="fw2 f7 f6-ns f3-l black-60 sans-serif">
                  ({domain})
                </span>}
            </a>}
          <div className="mt2 mb3 f7 f6-ns fw3 mb0 black-60">
            {time_ago} {user &&
              <span>
                by <Link route="user" params={{ name: user || "pg" }}>
                  <a className="link grow black-60">{user}</a>
                </Link> ({points} points)
              </span>}
          </div>
        </div>
        {user &&
          <Link prefetch route="comments" params={{ id }}>
            <a
              className="dtc center link v-mid pr1 pr3-ns w-10 grow near-black"
            >
              <svg
                className="fr pr2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 25 25"
                transform="scale(1.75)"
              >
                <path
                  d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
                />
                <text
                  x="12"
                  y="10"
                  textAnchor="middle"
                  fontSize="8"
                  alignmentBaseline="central"
                >
                  {comments_count}
                </text>
              </svg>
            </a>
          </Link>}
      </div>
    </article>
  );
};
