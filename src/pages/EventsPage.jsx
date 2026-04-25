import { useMemo, useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import { downloadTextFile, toCsv } from "../utils";

export default function EventsPage({ showToast }) {
  const [keyFilter, setKeyFilter] = useState("");
  const [codeFilter, setCodeFilter] = useState("");

  const filteredEvents = useMemo(() => {
    const normalizedKey = keyFilter.trim().toLowerCase();
    const normalizedCode = codeFilter.trim();

    return portalData.events.filter((item) => {
      const matchesKey = !normalizedKey || item.key.toLowerCase().includes(normalizedKey);
      const matchesCode = !normalizedCode || item.code.includes(normalizedCode);
      return matchesKey && matchesCode;
    });
  }, [keyFilter, codeFilter]);

  const filterCancelCode = () => {
    setCodeFilter("110111");
    showToast("Filtro por codigo 110111 aplicado.");
  };

  const exportEvents = () => {
    const csv = toCsv(
      ["Data", "Evento", "Codigo", "Cliente", "Chave", "Impacto"],
      filteredEvents.map((item) => [item.time, item.type, item.code, item.client, item.key, item.impact])
    );
    downloadTextFile("eventos-fiscais.csv", csv, "text/csv;charset=utf-8");
    showToast("Eventos exportados com sucesso.");
  };

  return (
    <>
      <Topbar
        kicker="Timeline fiscal"
        title="Eventos fiscais"
        copy="Aqui ficam apenas os eventos fiscais da SEFAZ, sem misturar com as acoes internas do portal."
        actions={
          <>
            <button className="btn btn-secondary" onClick={filterCancelCode}>Filtrar codigo</button>
            <button className="btn btn-primary" onClick={exportEvents}>Exportar eventos</button>
          </>
        }
      />

      <section className="split">
        <Card>
          <div className="filters">
            <div className="field"><label>Tipo de evento</label><select className="select"><option>Todos</option></select></div>
            <div className="field"><label>Cliente</label><select className="select"><option>Todos</option></select></div>
            <div className="field"><label>Codigo</label><input className="input" placeholder="Ex.: 110111" value={codeFilter} onChange={(event) => setCodeFilter(event.target.value)} /></div>
            <div className="field"><label>Chave</label><input className="input" placeholder="Buscar chave" value={keyFilter} onChange={(event) => setKeyFilter(event.target.value)} /></div>
          </div>

          <div className="mini filter-info">{filteredEvents.length} evento(s) encontrado(s).</div>

          <Table
            columns={["Data", "Evento", "Codigo", "Cliente", "Chave", "Impacto"]}
            rows={filteredEvents.map((item) => (
              <tr key={item.time + item.code}>
                <td>{item.time}</td>
                <td>{item.type}</td>
                <td>{item.code}</td>
                <td>{item.client}</td>
                <td>{item.key}</td>
                <td>{item.impact}</td>
              </tr>
            ))}
          />
        </Card>

        <Card title="Linha do tempo" copy="Leitura vertical dos eventos mais recentes.">
          <div className="timeline">
            {filteredEvents.map((item) => (
              <div className="timeline-item" key={item.time + item.type}>
                <div className="timeline-time">{item.time}</div>
                <strong>{item.type} ({item.code})</strong>
                <div className="mini">{item.client} - {item.impact}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
