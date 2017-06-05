import React from "react";
import Link from "next/link";
import { get } from "../app/fetch";
import Navigation from "../components/navigation";

const User = ({ data: { about, created, id, karma } }) => (
  <main>
    <Navigation />
    <section className="center mw7 mh4 pa2 pa3-ns lh-title">
      <div className="dt w-100 pv1">
        <span className="dtc w-30 w-20-ns black-60">Username: </span>
        <span className="dtc w-70 w-80-ns">{id}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-30 w-20-ns black-60">Created: </span>
        <span className="dtc w-70 w-80-ns">{created}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-30 w-20-ns black-60">Karma: </span>
        <span className="dtc w-70 w-80-ns">{karma}</span>
      </div>
      <div className="dt w-100 pv1">
        <span className="dtc w-30 w-20-ns black-60">About: </span>
        <span
          className="dtc w-70 w-80-ns"
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
