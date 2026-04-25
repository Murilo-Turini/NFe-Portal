import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import Badge from "../components/Badge";
import { portalData } from "../data/portalData";
import { toneForValue } from "../utils";

export default function ClientsPage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Area multiempresa"
        title="Clientes"
        copy="Cadastro, leitura operacional, ultima sincronizacao, volume de notas e situacao da integracao de cada empresa."
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => showToast("Base de clientes importada com sucesso.")}>Importar clientes</button>
            <button className="btn btn-primary" onClick={() => showToast("Formulario de novo cliente aberto.")}>Novo cliente</button>
          </>
        }
      />

      <section className="grid grid-4">
        <article className="card"><span className="badge badge-primary">Base</span><div className="metric">24</div><div className="metric-label">Clientes totais</div></article>
        <article className="card"><span className="badge badge-success">Integracao</span><div className="metric">19</div><div className="metric-label">Clientes ativos</div></article>
        <article className="card"><span className="badge badge-warning">Atencao</span><div className="metric">3</div><div className="metric-label">Com falha recente</div></article>
        <article className="card"><span className="badge badge-info">Operacao</span><div className="metric">5</div><div className="metric-label">Com pendencia alta</div></article>
      </section>

      <section className="grid grid-3 section-gap">
        {portalData.clients.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            copy={item.cnpj}
            action={<Badge tone={toneForValue(item.sync)}>{item.sync}</Badge>}
          >
            <div className="stack">
              <div><strong>Ultima sincronizacao:</strong> {item.lastSync}</div>
              <div><strong>Notas no periodo:</strong> {item.notes}</div>
              <div><strong>Contato:</strong> {item.contact}</div>
            </div>
          </Card>
        ))}
      </section>

      <section className="section-gap">
        <Card>
          <Table
            columns={["Cliente", "CNPJ", "Integracao", "Ultimo recebimento", "Notas", "Contato", "Acao"]}
            rows={portalData.clients.map((item) => (
              <tr key={item.cnpj}>
                <td>{item.name}</td>
                <td>{item.cnpj}</td>
                <td><Badge tone={toneForValue(item.sync)}>{item.sync}</Badge></td>
                <td>{item.lastSync}</td>
                <td>{item.notes}</td>
                <td>{item.contact}</td>
                <td><button className="btn btn-secondary" onClick={() => showToast(`Cadastro de ${item.name} aberto para edicao.`)}>Editar</button></td>
              </tr>
            ))}
          />
        </Card>
      </section>
    </>
  );
}
