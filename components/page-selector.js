import { Link } from "../routes";
import ChevronLeft from "../static/chevron-l.svg";
import ChevronRight from "../static/chevron-r.svg";

function getRouteOptions(prev, secondPage, type) {
  if (secondPage && type !== "top") {
    return {
      type: "first",
      params: {
        type
      }
    };
  }

  if (secondPage && type === "top") {
    return {
      type: "top",
      params: {}
    };
  }

  return {
    type: "index",
    params: {
      type,
      page: prev
    }
  };
}

export default ({ current, type }) => {
  const prev = parseInt(current, 10) - 1;
  const next = parseInt(current, 10) + 1;

  const firstPage = next === 2;
  const secondPage = next === 3;
  const routeOptions = getRouteOptions(prev, secondPage, type);

  return (
    <section className="center bg-near-white mh4">
      <div className="flex items-center justify-center">
        {(!firstPage &&
          <Link route={routeOptions.type} params={routeOptions.params}>
            <a
              className="f7 f6-ns no-underline black inline-flex items-center pa2 pa3-ns link grow"
            >
              <ChevronLeft />
              <span className="pl1">Previous</span>
            </a>
          </Link>) ||
          <div
            className="f7 f6-ns no-underline dark-gray inline-flex items-center pa2 pa3-ns"
          >
            <ChevronLeft />
            <span className="pl1">Previous</span>
          </div>}
        <span className="f7 f6-ns mh2 fw4">Page {current}</span>
        <Link prefetch route="index" params={{ type, page: next }}>
          <a
            className="f7 f6-ns no-underline black inline-flex items-center pa2 pa3-ns link grow"
          >
            <span className="pr1">Next</span>
            <ChevronRight />
          </a>
        </Link>
      </div>
    </section>
  );
};
