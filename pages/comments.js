import dynamic from "next/dynamic";
import React from "react";
import { get } from "../app/fetch";
import Navigation from "../components/navigation";
const ItemMeta = dynamic(import("../components/item-meta"));
const CommentThread = dynamic(import("../components/comment-thread"));

const Comments = ({ data }) => {
  return (
    <main>
      <Navigation />
      <section className="w-100 center mw7 mh4">
        <ItemMeta {...data} />
        <CommentThread comments={data.comments} />
      </section>
    </main>
  );
};

Comments.getInitialProps = async ({ query: { id } }) => {
  const json = await get({ id });
  return { data: json };
};

export default Comments;
