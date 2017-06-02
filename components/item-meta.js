import { Link } from "../routes";

export default (
  { domain, url, title, user, points, time_ago, id, comments_count }
) => (
  <article>
    <div className="dt w-100 bb b--black-10">
      <a className="link dtc dim pt2 pl3" href={url}>
        <h1 className="fw4 lh-title mv0 black baskerville">
          {title}
        </h1>
        <div className="mt2 mb3 f6 fw4 mb0 black-60">
          {time_ago} by {user} ({points} points)
        </div>
      </a>
      <Link prefetch route="comments" params={{ id }}>
        <a className="dtc link grow v-mid pr3 w-10">
          <svg
            className="pv3 fr"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            viewBox="0 0 30 30"
            transform="scale(1.75)"
          >
            <path
              d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
            />
            <text
              x="12"
              y="9"
              textAnchor="middle"
              fontSize="10"
              alignmentBaseline="central"
            >
              {comments_count}
            </text>
          </svg>
        </a>
      </Link>
    </div>
  </article>
);
