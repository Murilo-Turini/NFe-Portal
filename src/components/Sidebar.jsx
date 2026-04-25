import { navGroups } from "../data/portalData";

export default function Sidebar({ currentPage, navigate, expanded, setExpanded }) {
  return (
    <aside
      className={`sidebar ${expanded ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="brand">
        {expanded ? (
          <>
            <div className="brand-kicker">Portal NF-e</div>
            <div className="brand-title">Operacao Fiscal</div>
            <div className="brand-copy">
              Dashboard, notas, administrativo e auditoria em uma estrutura simples de manter.
            </div>
          </>
        ) : (
          <div className="brand-mini">NF</div>
        )}
      </div>

      {navGroups.map((group) => (
        <div className="nav-group" key={group.label}>
          {expanded ? <div className="nav-label">{group.label}</div> : null}
          {group.items.map((item) => (
            <a
              key={item.key}
              className={`nav-link ${currentPage === item.key ? "active" : ""}`}
              href={`#/${item.key}`}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.key);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {expanded ? <span className="nav-text">{item.label}</span> : null}
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}
