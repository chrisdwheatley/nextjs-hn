import React from "react";
import { Link } from "../routes";
import { get } from "../app/fetch";
import Head from "../components/head";
import ItemMeta from "../components/item-meta";
import Navigation from "../components/navigation";

function commentThread(comments) {
  const thread = [];

  comments.map(({ id, level, user, time_ago, content, comments }) => {
    thread.push(
      <div key={id} style={{ marginLeft: `${level * 2}0px` }}>
        <li>
          <span className="mt3 f6 fw4 mb0 black-60">
            <Link route="user" params={{ name: user || "pg" }}>
              <a className="link dim pv1 pr1 black-60">{user}</a>
            </Link>
            {" "}
            {time_ago}
          </span>
          <div
            className="f5 lh-copy black mb4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </li>
        <style global jsx>
          {
            `
          p {
            margin-top: 0;
          }
          p a, p a:visited {
            opacity: 1;
            padding: .4em .2em .4em .2em;
            text-decoration: none;
            transition: color .15s ease-in;
          }
          p a:focus {
            outline: 1px dotted currentColor;
          }
          p a:hover, p a:focus {
            opacity: .5;
            transition: opacity .15s ease-in;
          }
        `
          }
        </style>
      </div>
    );

    if (comments && comments.length) {
      thread.push(commentThread(comments));
    }
  });

  return thread;
}

const Comments = ({ data }) => {
  return (
    <main className="sans-serif">
      <Head />
      <section className="center bg-dark-blue mh4">
        <Navigation />
      </section>
      <section className="w-100 center mw7 mh4">
        <ItemMeta {...data} />
        <ul className="list pl3 mr3">{commentThread(data.comments)}</ul>
      </section>
    </main>
  );
};

Comments.getInitialProps = async ({ query: { id } }) => {
  const json = await get({ id });
  return { data: json };
};

export default Comments;
