import fetch from "isomorphic-fetch";
import { Link } from "../routes";
import Navigation from "../components/navigation";
import ItemMeta from "../components/item-meta";

const Listing = ({ data }) => (
  <div>
    <Navigation />
    <ul>
      {data.map((item, index) => (
        <li key={item.id}>
          {index + 1}
          {" "}
          <ItemMeta {...item} />
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
