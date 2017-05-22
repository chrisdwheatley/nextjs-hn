import fetch from "isomorphic-fetch";
import React from "react";
import { Link } from "../routes";
import Navigation from "../components/navigation";
import ItemMeta from "../components/item-meta";

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
    let items;

    if (!this.state.dataLoaded) {
      items = Array(30).fill().map((item, index) => {
        return (
          <li key={index + 1}>
            <span className="placeholder" />
            <div className="placeholder-2" />
            <style jsx>
              {
                `
          .placeholder {
            float: left;
            width: 100%;
            height: 1em;
            background: #efefef;
          }
          .placeholder-2 {
            width: 60%;
            margin-bottom: 2px;
            height: 1em;
            background: #efefef;
          }
        `
              }
            </style>
          </li>
        );
      });
    } else {
      items = this.props.data.map((item, index) => (
        <li key={item.id}><ItemMeta {...item} /></li>
      ));
    }

    return (
      <div>
        <Navigation />
        <ol>
          {items}
        </ol>
      </div>
    );
  }
}
