import React from "react";
import Link from "next/link";
import { get } from "../app/fetch";
import Head from "../components/head";
import Navigation from "../components/navigation";

const User = ({ data: { about, created, id, karma } }) => (
  <main className="sans-serif">
    <Head />
    <Navigation />
    <section className="center mw7 mh4 pa3 lh-title">
      <div className="dt w-100 pv1">
        <span className="dtc w-20 black-60">Username: </span>
        <span className="dtc w-80">{id}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-20 black-60">Created: </span>
        <span className="dtc w-80">{created}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-20 black-60">Karma: </span>
        <span className="dtc w-80">{karma}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-20 black-60">About: </span>
        <span
          className="dtc w-80"
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </section>
  </main>
);

User.getInitialProps = async ({ query: { name } }) => {
  const json = await get({ name });
  return { data: json };
};

export default User;
