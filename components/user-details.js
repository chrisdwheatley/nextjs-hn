import Link from "next/link";

export default ({ about, created, id, karma }) => (
  <section className="center mw7 mh4 pa2 pa3-ns lh-solid">
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
);
