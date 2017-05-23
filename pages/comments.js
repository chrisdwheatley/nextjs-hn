import React from "react";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Navigation from "../components/navigation";
import ItemMeta from "../components/item-meta";
import GlobalStyles from "../components/global-styles";

function commentThread(comments) {
  const thread = [];

  comments.map(item => {
    thread.push(
      <div key={item.id} style={{ marginLeft: `${item.level}0px` }}>
        <li>
          {item.user} {item.time_ago}
          <span dangerouslySetInnerHTML={{ __html: item.content }} />
        </li>
      </div>
    );

    if (item.comments && item.comments.length) {
      thread.push(commentThread(item.comments));
    }
  });

  return thread;
}

const Comments = ({ data }) => {
  return (
    <div>
      <Navigation />
      <div>
        <ItemMeta {...data} />
        <ul>{commentThread(data.comments)}</ul>
      </div>
      <GlobalStyles />
    </div>
  );
};

Comments.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
  const json = await res.json();
  return { data: json };
};

export default Comments;
