import fetch from "isomorphic-fetch";
import React from "react";
import Head from "../components/head";
import ItemMeta from "../components/item-meta";
import Navigation from "../components/navigation";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      dataLoaded: false
    };
  }
  static async getInitialProps({ query: { type } }) {
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
  }

  async componentDidMount() {
    this.setState({ dataLoaded: true });
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          // Successful registration
          console.log("success");
        })
        .catch(err => {
          // Failed registration, service worker won’t be installed
          console.log("fail");
        });
    }
  }

  render() {
    return (
      <main className="mw7 center sans-serif">
        <Head />
        <Navigation />
        <section className="fl w-100 pa2">
          {this.props.data.map((item, index) => <ItemMeta {...item} />)}
        </section>
      </main>
    );
  }
}
