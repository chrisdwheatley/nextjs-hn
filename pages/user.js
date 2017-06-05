import dynamic from "next/dynamic";
import React from "react";
import { get } from "../app/fetch";
import Navigation from "../components/navigation";
const UserDetails = dynamic(import("../components/user-details"));

const User = ({ data }) => (
  <main>
    <Navigation />
    <UserDetails {...data} />
  </main>
);

User.getInitialProps = async ({ query: { name } }) => {
  const json = await get({ name });
  return { data: json };
};

export default User;
