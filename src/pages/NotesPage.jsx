import { useMemo, useState } from "react";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import { downloadTextFile, toneForValue } from "../utils";

export default function NotesPage({ navigate, showToast }) {
  const [supplierFilter, setSupplierFilter] = useState("");

  const filteredNotes = useMemo(() => {
    const normalizedSupplier = supplierFilter.trim().toLowerCase();
    return portalData.notes.filter((note) =>
      !normalizedSupplier || note.supplier.toLowerCase().includes(normalizedSupplier)
    );
  }, [supplierFilter]);

  const importFilter = () => {
    setSupplierFilter("AcoBrasil");
    showToast("Filtro importado e aplicado para o fornecedor AcoBrasil.");
  };

  const openExample = () => {
    showToast("Abrindo o detalhe da nota de exemplo.");
    navigate("nota-detalhe");
  };

  const exportCurrentFilter = () => {
    const content = filteredNotes.map((note) => `${note.key} | ${note.supplier} | ${note.total}`).join("\n");
    downloadTextFile("notas-filtradas.txt", content || "Nenhum resultado.");
    showToast("Relacao de notas exportada.");
  };

  return (
    <>
      <Topbar
        kicker="Notas, status e filtros"
        title="Notas fiscais"
        copy="A listagem central separa documento recebido, situacao fiscal e status operacional para evitar confusao no uso do sistema."
        actions={
          <>
            <button className="btn btn-secondary" onClick={importFilter}>Importar filtro</button>
            <button className="btn btn-secondary" onClick={exportCurrentFilter}>Exportar lista</button>
            <button className="btn btn-primary" onClick={openExample}>Abrir exemplo</button>
          </>
        }
      />

      <Card>
        <div className="filters">
          <div className="field"><label>Data</label><input className="input" defaultValue="25/04/2026" /></div>
          <div className="field"><label>Fornecedor</label><input className="input" placeholder="Buscar fornecedor" value={supplierFilter} onChange={(event) => setSupplierFilter(event.target.value)} /></div>
          <div className="field"><label>Cliente</label><select className="select"><option>Todos os clientes</option></select></div>
          <div className="field"><label>Status operacional</label><select className="select"><option>Todos</option></select></div>
          <div className="field"><label>Situacao SEFAZ</label><select className="select"><option>Todas</option></select></div>
          <div className="field"><label>Tipo de documento</label><select className="select"><option>Todos</option></select></div>
        </div>

        <div className="mini filter-info">{filteredNotes.length} resultado(s) encontrado(s).</div>

        <Table
          columns={["Chave", "Fornecedor", "Cliente", "Emissao", "Valor", "Documento", "Situacao SEFAZ", "Status interno", "Acao"]}
          rows={filteredNotes.map((note) => (
            <tr key={note.key}>
              <td>{note.key}</td>
              <td>{note.supplier}</td>
              <td>{note.client}</td>
              <td>{note.issueDate}</td>
              <td>{note.total}</td>
              <td><Badge tone="primary">{note.documentType}</Badge></td>
              <td><Badge tone={toneForValue(note.sefazStatus)}>{note.sefazStatus}</Badge></td>
              <td><Badge tone={toneForValue(note.internalStatus)}>{note.internalStatus}</Badge></td>
              <td><button className="btn btn-secondary" onClick={openExample}>Abrir</button></td>
            </tr>
          ))}
        />
      </Card>
    </>
  );
}
