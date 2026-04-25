import Card from "../components/Card";
import Topbar from "../components/Topbar";
import Badge from "../components/Badge";
import { portalData } from "../data/portalData";

function getUserMovements(currentUser) {
  if (currentUser?.role === "Estoque") {
    return portalData.notes
      .filter((note) => note.internalStatus === "Novo")
      .map((note, index) => ({
        time: index === 0 ? "09:14" : index === 1 ? "09:22" : "09:31",
        title: `Nova nota para conferencia: ${note.supplier}`,
        copy: `Chave ${note.key.slice(0, 10)}... aguardando recebimento no estoque.`
      }));
  }

  if (currentUser?.role === "Financeiro") {
    return portalData.notes
      .filter((note) => note.internalStatus === "Conferido")
      .map((note, index) => ({
        time: index === 0 ? "09:18" : index === 1 ? "09:33" : "09:46",
        title: `Nota pronta para liberar pagamento: ${note.supplier}`,
        copy: `Valor ${note.total} liberado para analise financeira da chave ${note.key.slice(0, 10)}...`
      }));
  }

  return [
    {
      time: "09:05",
      title: "Visao administrativa do portal",
      copy: "Acompanhe notas nao reconhecidas, eventos fiscais e acoes das equipes."
    },
    {
      time: "09:21",
      title: "Auditoria recente disponivel",
      copy: "Use a area de auditoria para acompanhar mudancas por usuario e modulo."
    }
  ];
}

export default function DashboardPage({ navigate, theme, toggleTheme, currentUser }) {
  const userMovements = getUserMovements(currentUser);

  return (
    <>
      <Topbar
        kicker="Visao executiva e operacional"
        title="Dashboard"
        copy="Leitura rapida do que entrou, do que exige acao e do que depende de estoque, financeiro e administrativo."
        actions={
          <>
            <button className="btn btn-secondary theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "Tema escuro" : "Tema claro"}
            </button>
            <div className="user-chip">
              <span className="user-chip-name">{currentUser?.name}</span>
              <span className="user-chip-role">{currentUser?.role}</span>
            </div>
          </>
        }
      />

      <section className="grid grid-4">
        {portalData.dashboard.metrics.map((item) => (
          <Card key={item.label}>
            <Badge tone={item.tone}>{item.badge}</Badge>
            <div className="metric">{item.value}</div>
            <div className="metric-label">{item.label}</div>
          </Card>
        ))}
      </section>

      <section className="bento section-gap">
        <Card
          className="span-8"
          title="Ultimas movimentacoes"
          copy={`Itens relevantes para o usuario conectado: ${currentUser?.name}.`}
          action={<button className="btn btn-secondary" onClick={() => navigate("auditoria")}>Abrir auditoria</button>}
        >
          <div className="timeline">
            {userMovements.map((item) => (
              <div className="timeline-item" key={item.time + item.title}>
                <div className="timeline-time">{item.time}</div>
                <strong>{item.title}</strong>
                <div className="mini">{item.copy}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="span-4" title="Acesso rapido" copy="Atalhos para as areas que mais mudam no dia a dia.">
          <div className="stack">
            <button className="btn btn-secondary" onClick={() => navigate("notas")}>Ir para notas</button>
            <button className="btn btn-secondary" onClick={() => navigate("financeiro")}>Ir para financeiro</button>
            <button className="btn btn-secondary" onClick={() => navigate("estoque")}>Ir para estoque</button>
          </div>
        </Card>
      </section>

      <section className="grid grid-3 section-gap">
        {portalData.dashboard.alerts.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            copy="Revise este ponto no modulo adequado para manter o fluxo interno limpo."
            action={<Badge tone={item.tone}>Status</Badge>}
          />
        ))}
      </section>
    </>
  );
}
