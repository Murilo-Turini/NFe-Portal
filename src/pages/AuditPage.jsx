import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import { downloadTextFile, toCsv } from "../utils";

export default function AuditPage({ showToast }) {
  const exportAudit = () => {
    const csv = toCsv(
      ["Data", "Usuario", "Modulo", "Acao", "Referencia"],
      portalData.audit.map((item) => [item.time, item.user, item.module, item.action, item.reference])
    );
    downloadTextFile("auditoria.csv", csv, "text/csv;charset=utf-8");
    showToast("Log de auditoria exportado.");
  };

  return (
    <>
      <Topbar
        kicker="Historico do sistema"
        title="Auditoria"
        copy="Mudancas por usuario, modulo, data e referencia para garantir rastreabilidade sem poluir as telas operacionais."
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => showToast("Filtro rapido de auditoria aplicado.")}>Filtrar</button>
            <button className="btn btn-primary" onClick={exportAudit}>Exportar log</button>
          </>
        }
      />

      <section className="split">
        <Card>
          <Table
            columns={["Data", "Usuario", "Modulo", "Acao", "Referencia"]}
            rows={portalData.audit.map((item) => (
              <tr key={item.time + item.user}>
                <td>{item.time}</td>
                <td>{item.user}</td>
                <td>{item.module}</td>
                <td>{item.action}</td>
                <td>{item.reference}</td>
              </tr>
            ))}
          />
        </Card>

        <Card title="Timeline de auditoria" copy="Visual complementar para leitura de eventos recentes.">
          <div className="timeline">
            {portalData.audit.map((item) => (
              <div className="timeline-item" key={item.time + item.action}>
                <div className="timeline-time">{item.time}</div>
                <strong>{item.user}</strong>
                <div className="mini">{item.module} - {item.action} - {item.reference}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
