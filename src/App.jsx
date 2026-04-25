import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NotesPage from "./pages/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import EventsPage from "./pages/EventsPage";
import StockPage from "./pages/StockPage";
import FinancePage from "./pages/FinancePage";
import AdminPage from "./pages/AdminPage";
import SettingsPage from "./pages/SettingsPage";
import AuditPage from "./pages/AuditPage";
import { portalData } from "./data/portalData";

const pageMap = {
  home: HomePage,
  dashboard: DashboardPage,
  notas: NotesPage,
  "nota-detalhe": NoteDetailPage,
  eventos: EventsPage,
  estoque: StockPage,
  financeiro: FinancePage,
  administrativo: AdminPage,
  configuracoes: SettingsPage,
  auditoria: AuditPage
};

function getPageFromHash() {
  const hash = window.location.hash.replace(/^#\//, "");
  return pageMap[hash] ? hash : "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash());
  const [toast, setToast] = useState(null);
  const [theme, setTheme] = useState("light");
  const [currentUser] = useState(portalData.users[1]);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navigate = (page) => {
    window.location.hash = page === "home" ? "/" : `/${page}`;
    setCurrentPage(page);
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    showToast(`Tema ${theme === "light" ? "escuro" : "claro"} ativado.`);
  };

  const Page = pageMap[currentPage];

  if (currentPage === "home") {
    return <HomePage navigate={navigate} showToast={showToast} />;
  }

  return (
    <Layout currentPage={currentPage} navigate={navigate} toast={toast}>
      <Page
        navigate={navigate}
        showToast={showToast}
        theme={theme}
        toggleTheme={toggleTheme}
        currentUser={currentUser}
      />
    </Layout>
  );
}
