import { Link } from "../routes";

export default (
  { domain, url, title, user, points, time_ago, id, comments_count }
) => (
  <article>
    <div className="dt w-100 bb b--black-10">
      <a className="link dtc dim pt2 pl2 pl3-ns w-50 w-65-m w-90-l" href={url}>
        <h2 className="f4 f3-ns f2-l fw4 lh-title mv0 black baskerville">
          {title}
        </h2>
        <div className="mt2 mb3 f7 f6-ns fw4 mb0 black-60">
          {time_ago} {user && <span>by {user} ({points} points)</span>}
        </div>
      </a>
      {user &&
        <Link prefetch route="comments" params={{ id }}>
          <a className="dtc center link grow v-mid pr1 pr3-ns w-10">
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
