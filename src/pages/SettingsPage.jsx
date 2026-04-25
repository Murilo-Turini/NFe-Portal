import Card from "../components/Card";
import Topbar from "../components/Topbar";

export default function SettingsPage({ showToast }) {
  return (
    <>
      <Topbar
        kicker="Ajustes do portal"
        title="Configuracoes"
        copy="Pagina simples para centralizar preferencias e parametros sem poluir outras areas do sistema."
        actions={<button className="btn btn-primary" onClick={() => showToast("Alteracoes salvas com sucesso.")}>Salvar alteracoes</button>}
      />

      <section className="grid grid-2">
        <Card title="Integracoes" copy="Exemplo visual para ligacao futura com API real.">
          <div className="stack">
            <div className="field"><label>URL da API</label><input className="input" defaultValue="https://api.seudominio.com/api/nfe/upload" /></div>
            <div className="field"><label>Ambiente</label><select className="select"><option>Producao</option></select></div>
            <div className="field"><label>Timeout</label><input className="input" defaultValue="30 segundos" /></div>
          </div>
        </Card>

        <Card title="Notificacoes" copy="Parametros de alerta para clientes e time interno.">
          <div className="stack">
            <div className="pill">Avisar cancelamento por email</div>
            <div className="pill">Avisar cliente sem sincronizacao</div>
            <div className="pill">Avisar fila financeira acima do limite</div>
          </div>
        </Card>
      </section>
    </>
  );
}
