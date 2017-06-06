import React from "react";
import { get } from "../app/fetch";
import ItemMeta from "../components/item-meta";
import Navigation from "../components/navigation";
import PageSelector from "../components/page-selector";

export default class extends React.PureComponent {
  static async getInitialProps({ query: { type = "news", page = "1" } }) {
    const json = await get({ type, page });
    if (type === "news") {
      type = "top";
    }
    return { data: json, type, page };
  }

  async componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful");
        })
        .catch(err => {
          console.warn("service worker registration failed");
        });
    }
  }

  render() {
    const { data, page, type } = this.props;
    return (
      <main>
        <Navigation current={type} />
        <PageSelector current={page} type={type} />
        <section className="w-100 center mw7 mh4">
          {data.map((item, index) => <ItemMeta key={item.id} {...item} />)}
        </section>
      </main>
    );
  }
}
