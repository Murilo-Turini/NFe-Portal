import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import Badge from "../components/Badge";
import { toneForValue } from "../utils";

export default function StockPage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Fila do estoque"
        title="Estoque"
        copy="Somente notas com status interno novo aparecem aqui. O objetivo e reduzir ruido e acelerar a confirmacao de recebimento."
        actions={<button className="btn btn-primary" onClick={() => showToast("Lote confirmado com sucesso.")}>Confirmar lote</button>}
      />

      <section className="grid grid-3">
        <article className="card"><span className="badge badge-primary">Novo</span><div className="metric">31</div><div className="metric-label">Pendentes de conferencia</div></article>
        <article className="card"><span className="badge badge-warning">Atencao</span><div className="metric">4</div><div className="metric-label">Com evento fiscal relevante</div></article>
        <article className="card"><span className="badge badge-success">Hoje</span><div className="metric">18</div><div className="metric-label">Ja conferidas pela equipe</div></article>
      </section>

      <section className="section-gap">
        <Card>
          <Table
            columns={["Chave", "Fornecedor", "Cliente", "Valor", "Situacao SEFAZ", "Acao"]}
            rows={portalData.notes.map((note) => (
              <tr key={note.key}>
                <td>{note.key}</td>
                <td>{note.supplier}</td>
                <td>{note.client}</td>
                <td>{note.total}</td>
                <td><Badge tone={toneForValue(note.sefazStatus)}>{note.sefazStatus}</Badge></td>
                <td><button className="btn btn-secondary" onClick={() => showToast(`Recebimento da nota ${note.key.slice(-6)} confirmado.`)}>Confirmar recebimento</button></td>
              </tr>
            ))}
          />
        </Card>
      </section>
    </>
  );
}
