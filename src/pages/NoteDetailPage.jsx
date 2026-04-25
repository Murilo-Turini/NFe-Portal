import Card from "../components/Card";
import Topbar from "../components/Topbar";

export default function NoteDetailPage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Chave 35260412345678000123550010000010231000010231"
        title="AcoBrasil Distribuidora"
        copy="Nota autorizada, com documento integral recebido e pronta para seguir o fluxo interno do portal."
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => showToast("XML baixado com sucesso.")}>Baixar XML</button>
            <button className="btn btn-secondary" onClick={() => showToast("Recebimento confirmado com sucesso.")}>Confirmar recebimento</button>
            <button className="btn btn-primary" onClick={() => showToast("Pagamento liberado com sucesso.")}>Liberar pagamento</button>
          </>
        }
      />

      <section className="grid grid-4">
        <article className="card"><span className="badge badge-success">Autorizada</span><div className="metric">R$ 18.420,00</div><div className="metric-label">Valor total</div></article>
        <article className="card"><span className="badge badge-primary">procNFe</span><div className="metric">25/04</div><div className="metric-label">Emissao</div></article>
        <article className="card"><span className="badge badge-info">Conferido</span><div className="metric">Estoque</div><div className="metric-label">Ultima area</div></article>
        <article className="card"><span className="badge badge-success">Cliente</span><div className="metric metric-small">MaxSteel</div><div className="metric-label">Empresa vinculada</div></article>
      </section>

      <section className="split section-gap">
        <Card title="Resumo" copy="Dados principais da nota e separacao clara entre fiscal e operacional.">
          <div className="stack">
            <div><strong>Fornecedor:</strong> AcoBrasil Distribuidora</div>
            <div><strong>Cliente:</strong> MaxSteel LTDA</div>
            <div><strong>Chave:</strong> 35260412345678000123550010000010231000010231</div>
            <div><strong>Tipo de documento:</strong> procNFe</div>
            <div><strong>Situacao SEFAZ:</strong> autorizada</div>
            <div><strong>Status operacional:</strong> conferido</div>
          </div>
        </Card>

        <Card title="Documentos e eventos" copy="Arquivos associados sem colidir nomes ou significados.">
          <div className="stack">
            <div className="pill">3526...-procNFe.xml</div>
            <div className="pill">3526...-procEvento-210200-seq01.xml</div>
            <div className="pill">3526...-procEvento-110111-seq01.xml</div>
          </div>
        </Card>
      </section>

      <section className="grid grid-2 section-gap">
        <Card title="Timeline fiscal" copy="Eventos SEFAZ relacionados a mesma chave.">
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-time">24/04/2026 17:20</div><strong>Confirmacao da operacao</strong><div className="mini">Evento 210200 liberou o XML integral.</div></div>
            <div className="timeline-item"><div className="timeline-time">25/04/2026 09:41</div><strong>Cancelamento</strong><div className="mini">Exemplo de evento fiscal vinculado a chave.</div></div>
          </div>
        </Card>

        <Card title="Historico operacional" copy="Mudancas internas que nao alteram o documento fiscal original.">
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-time">25/04/2026 09:10</div><strong>Entrada no portal</strong><div className="mini">Status inicial: novo.</div></div>
            <div className="timeline-item"><div className="timeline-time">25/04/2026 09:28</div><strong>Recebimento confirmado</strong><div className="mini">Movido para conferido pelo estoque.</div></div>
            <div className="timeline-item"><div className="timeline-time">25/04/2026 10:02</div><strong>Aguardando financeiro</strong><div className="mini">Pronta para liberacao.</div></div>
          </div>
        </Card>
      </section>
    </>
  );
}
