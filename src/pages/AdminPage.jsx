import Card from "../components/Card";
import Table from "../components/Table";
import Topbar from "../components/Topbar";
import { portalData } from "../data/portalData";
import Badge from "../components/Badge";
import { toneForValue } from "../utils";

export default function AdminPage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Controle interno"
        title="Administrativo"
        copy="Area separada da operacao para administrar usuarios, acessos, parametros e regras de uso do portal."
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => showToast("Tela de perfis carregada.")}>Perfis</button>
            <button className="btn btn-primary" onClick={() => showToast("Formulario de novo usuario aberto.")}>Novo usuario</button>
          </>
        }
      />

      <section className="grid grid-3">
        <article className="card"><h3 className="card-title">Usuarios</h3><p className="card-copy">Cadastro de usuarios por cliente ou escopo global.</p></article>
        <article className="card"><h3 className="card-title">Permissoes</h3><p className="card-copy">Perfis por area: estoque, financeiro, gestor e administrativo.</p></article>
        <article className="card"><h3 className="card-title">Fluxos</h3><p className="card-copy">Regras internas para transicao de status e validacoes.</p></article>
      </section>

      <section className="split section-gap">
        <Card title="Usuarios ativos" copy="Visao de acesso por funcao e escopo.">
          <Table
            columns={["Nome", "Perfil", "Escopo", "Ultimo acesso", "Acao"]}
            rows={portalData.users.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td><Badge tone={toneForValue(item.role)}>{item.role}</Badge></td>
                <td>{item.scope}</td>
                <td>{item.lastAccess}</td>
                <td><button className="btn btn-secondary" onClick={() => showToast(`Permissoes de ${item.name} carregadas.`)}>Permissoes</button></td>
              </tr>
            ))}
          />
        </Card>

        <Card title="Parametros globais" copy="Pontos que o admin ajusta sem quebrar a navegacao.">
          <div className="stack">
            <div className="pill">Aprovacao em lote habilitada</div>
            <div className="pill">Alertas por cancelamento ativos</div>
            <div className="pill">Historico de auditoria retido por 180 dias</div>
            <div className="pill">Clientes com filtros personalizados</div>
          </div>
        </Card>
      </section>
    </>
  );
}
