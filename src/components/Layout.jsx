import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ currentPage, navigate, children, toast }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    setSidebarExpanded(false);
  }, [currentPage]);

  return (
    <div className={`shell ${sidebarExpanded ? "shell-expanded" : "shell-collapsed"}`}>
      <Sidebar
        currentPage={currentPage}
        navigate={navigate}
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
      />
      <main className="main">
        <div className="mobile-bar">
          <strong>Portal NF-e</strong>
          <button className="btn btn-primary" onClick={() => navigate("notas")}>
            Notas
          </button>
        </div>
        {children}
        {toast ? <div className={`toast toast-${toast.type || "success"}`}>{toast.message}</div> : null}
      </main>
    </div>
  );
}
