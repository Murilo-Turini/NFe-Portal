export default function Topbar({ kicker, title, copy, actions }) {
  return (
    <header className="topbar">
      <div>
        {kicker ? <div className="pill">{kicker}</div> : null}
        <h1 className="page-title">{title}</h1>
        <p className="page-copy">{copy}</p>
      </div>
      {actions ? <div className="topbar-actions">{actions}</div> : null}
    </header>
  );
}
