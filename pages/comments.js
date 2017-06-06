import React from "react";
import { get } from "../app/fetch";
import Navigation from "../components/navigation";
import ItemMeta from "../components/item-meta";
import CommentThread from "../components/comment-thread";

const Comments = ({ data }) => (
  <main>
    <Navigation />
    <section className="w-100 center mw7 mh4">
      <ItemMeta {...data} />
      <CommentThread comments={data.comments} />
    </section>
  </main>
);

Comments.getInitialProps = async ({ query: { id } }) => {
  const json = await get({ id });
  return { data: json };
};

export default Comments;
