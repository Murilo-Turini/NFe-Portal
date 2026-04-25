import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import Badge from "../components/Badge";
import { toneForValue } from "../utils";

export default function FinancePage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Fila do financeiro"
        title="Financeiro"
        copy="Aqui entram apenas notas conferidas, com contexto suficiente para liberacao rapida e sem mistura com eventos fiscais."
        actions={<button className="btn btn-primary" onClick={() => showToast("Lote liberado para pagamento.")}>Liberar lote</button>}
      />

      <section className="grid grid-3">
        <article className="card"><span className="badge badge-info">Conferido</span><div className="metric">14</div><div className="metric-label">Prontas para liberar</div></article>
        <article className="card"><span className="badge badge-danger">Bloqueios</span><div className="metric">2</div><div className="metric-label">Com cancelamento ou alerta</div></article>
        <article className="card"><span className="badge badge-success">Hoje</span><div className="metric">9</div><div className="metric-label">Pagamentos liberados</div></article>
      </section>

      <section className="section-gap">
        <Card>
          <Table
            columns={["Chave", "Fornecedor", "Cliente", "Valor", "Status interno", "Acao"]}
            rows={portalData.notes.map((note) => (
              <tr key={note.key}>
                <td>{note.key}</td>
                <td>{note.supplier}</td>
                <td>{note.client}</td>
                <td>{note.total}</td>
                <td><Badge tone={toneForValue(note.internalStatus)}>{note.internalStatus}</Badge></td>
                <td><button className="btn btn-secondary" onClick={() => showToast(`Pagamento da nota ${note.key.slice(-6)} liberado.`)}>Liberar pagamento</button></td>
              </tr>
            ))}
          />
        </Card>
      </section>
    </>
  );
}
