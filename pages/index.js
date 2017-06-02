import React from "react";
import { get } from "../app/fetch";
import Head from "../components/head";
import ItemMeta from "../components/item-meta";
import Navigation from "../components/navigation";

export default class extends React.Component {
  static async getInitialProps({ query: { type } }) {
    const allowed = ["news", "new", "show", "ask", "jobs"];

    if (!type || !allowed.includes(type)) {
      type = "news";
    }

    if (type === "new") {
      type = "newest";
    }

    const json = await get({ type });
    return { data: json };
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
    return (
      <main className="sans-serif">
        <Head />
        <section className="center bg-dark-blue mh4">
          <Navigation />
        </section>
        <section className="w-100 center mw7 mh4">
          {this.props.data.map((item, index) => (
            <ItemMeta key={item.id} {...item} />
          ))}
        </section>
      </main>
    );
  }
}
