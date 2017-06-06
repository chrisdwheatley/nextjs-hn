import React from "react";
import { get } from "../app/fetch";
import Navigation from "../components/navigation";
import UserDetails from "../components/user-details";

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
