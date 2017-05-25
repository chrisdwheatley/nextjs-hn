import React from "react";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Head from "../components/head";
import Navigation from "../components/navigation";

const User = ({ data: { about, created, id, karma } }) => (
  <main className="mw7 center sans-serif">
    <Head />
    <Navigation />
    <div>user: {id}</div>
    <div>created: {created}</div>
    <div>karma: {karma}</div>
    <div>about: <span dangerouslySetInnerHTML={{ __html: about }} /></div>
  </main>
);

User.getInitialProps = async ({ query: { name } }) => {
  const res = await fetch(`https://node-hnapi.herokuapp.com/user/${name}`);
  const json = await res.json();
  if (json.error) {
    throw new Error(json.error);
  }
  return { data: json };
};

export default User;
