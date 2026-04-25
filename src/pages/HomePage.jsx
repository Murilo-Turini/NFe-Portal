import { useEffect, useRef } from "react";

function RevealSection({ children, className = "", delay = 0, duration = 760, distance = 26 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`.trim()}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        "--reveal-distance": `${distance}px`
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage({ navigate }) {
  return (
    <>
      <main className="hero hero-home">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-orb hero-orb-a"></div>
          <div className="hero-orb hero-orb-b"></div>
          <div className="hero-orb hero-orb-c"></div>
          <div className="hero-grid-texture"></div>
        </div>

        <div className="hero-wrap">
          <RevealSection delay={0} duration={620} distance={18}>
            <header className="site-header">
              <div>
                <div className="brand-kicker">Portal fiscal</div>
                <div className="brand-title brand-dark">Portal NF-e</div>
              </div>
              <nav className="site-nav">
                <a href="#produto">Produto</a>
                <a href="#modulos">Modulos</a>
                <a href="#seguranca">Seguranca</a>
                <button className="btn btn-primary btn-hero" onClick={() => navigate("dashboard")}>
                  Entrar no portal
                </button>
              </nav>
            </header>
          </RevealSection>

          <section className="hero-grid">
            <RevealSection delay={90} duration={940} distance={34} className="hero-panel-wrap">
              <div className="hero-panel">
                <RevealSection delay={140} duration={620} distance={14} className="hero-layer hero-layer-soft">
                  <div className="brand-kicker">SEFAZ - API - Portal</div>
                </RevealSection>

                <RevealSection delay={220} duration={860} distance={42} className="hero-layer">
                  <h1>Controle fiscal e operacional em uma interface clara.</h1>
                </RevealSection>

                <RevealSection delay={320} duration={860} distance={34} className="hero-layer hero-copy-wrap">
                  <p>
                    O portal concentra documentos recebidos, eventos fiscais, fluxo do estoque, liberacao
                    financeira e governanca administrativa em uma experiencia simples de operar e facil de manter.
                  </p>
                </RevealSection>

                <RevealSection delay={430} duration={760} distance={24} className="hero-layer">
                  <div className="topbar-actions hero-actions">
                    <button className="btn btn-primary btn-hero" onClick={() => navigate("dashboard")}>
                      Abrir demonstracao
                    </button>
                    <a href="#modulos" className="btn btn-secondary btn-hero">
                      Ver modulos
                    </a>
                  </div>
                </RevealSection>

                <RevealSection delay={540} duration={880} distance={30} className="hero-layer">
                  <div className="hero-kpis">
                    <article className="card home-card">
                      <span className="badge badge-primary">Fonte oficial</span>
                      <div className="metric">100%</div>
                      <div className="metric-label">Dados organizados a partir da SEFAZ</div>
                    </article>
                    <article className="card home-card">
                      <span className="badge badge-success">Fluxo limpo</span>
                      <div className="metric">3</div>
                      <div className="metric-label">Estados operacionais objetivos</div>
                    </article>
                  </div>
                </RevealSection>
              </div>
            </RevealSection>

            <RevealSection delay={180} duration={900} distance={26} className="hero-side-wrap">
              <div className="hero-side">
                <RevealSection delay={260} duration={720} distance={20} className="hero-layer">
                  <article className="card home-card home-card-feature">
                    <div className="card-header">
                      <div>
                        <h3 className="card-title">Estrutura pronta para o cliente</h3>
                        <p className="card-copy">
                          Notas, eventos, estoque, financeiro e administrativo em um mesmo portal.
                        </p>
                      </div>
                      <span className="badge badge-info">Bento</span>
                    </div>
                    <div className="stack">
                      <div className="pill">Notas fiscais com filtros claros</div>
                      <div className="pill">Eventos fiscais em timeline</div>
                      <div className="pill">Dashboard com prioridade visual</div>
                    </div>
                  </article>
                </RevealSection>

                <RevealSection delay={360} duration={820} distance={24} className="hero-layer">
                  <article className="card home-card home-card-feature">
                    <div className="card-header">
                      <div>
                        <h3 className="card-title">Separacoes obrigatorias</h3>
                        <p className="card-copy">
                          O portal nao mistura documento fiscal com situacao SEFAZ e muito menos com status operacional interno.
                        </p>
                      </div>
                    </div>
                    <div className="stack">
                      <div><strong>Documento:</strong> resNFe, procNFe, procEventoNFe</div>
                      <div><strong>Situacao SEFAZ:</strong> autorizada, cancelada, pendente</div>
                      <div><strong>Status interno:</strong> novo, conferido, liberado</div>
                    </div>
                  </article>
                </RevealSection>
              </div>
            </RevealSection>
          </section>
        </div>
      </main>

      <section className="section" id="produto">
        <RevealSection delay={0} duration={640} distance={18}>
          <h2 className="section-title">Como o portal se organiza</h2>
          <p className="section-copy">
            A estrutura foi pensada para facilitar operacao do cliente e manutencao do time de desenvolvimento. Cada area tem uma funcao clara e padroes visuais consistentes.
          </p>
        </RevealSection>
        <div className="flow-line">
          {[
            ["1", "Recebimento", "Documentos chegam pela API e entram organizados por cliente e chave."],
            ["2", "Leitura fiscal", "Eventos e situacao SEFAZ ficam separados do fluxo interno."],
            ["3", "Estoque", "Notas novas seguem para confirmacao de recebimento."],
            ["4", "Financeiro", "Somente notas conferidas ficam prontas para liberacao."],
            ["5", "Governanca", "Administrativo, configuracoes e auditoria garantem controle."]
          ].map(([step, title, copy], index) => (
            <RevealSection
              key={step}
              delay={120 + index * 85}
              duration={680 + index * 55}
              distance={18 + index * 5}
            >
              <article className="card flow-step home-card">
                <span className="badge badge-primary">{step}</span>
                <h3 className="card-title">{title}</h3>
                <p className="card-copy">{copy}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="section" id="modulos">
        <RevealSection delay={0} duration={640} distance={18}>
          <h2 className="section-title">Modulos principais</h2>
          <p className="section-copy">
            A interface usa Bento Grid para hierarquia, referencia operacional em Flowbite, sobriedade visual institucional e transicoes discretas.
          </p>
        </RevealSection>
        <div className="grid grid-3">
          {[
            ["Dashboard", "KPIs, alertas, ultimas movimentacoes e clientes com atencao."],
            ["Notas fiscais", "Listagem principal com filtros por cliente, fornecedor, status e tipo de documento."],
            ["Eventos fiscais", "Timeline com cancelamentos, ciencia e confirmacao da operacao."],
            ["Estoque", "Fila enxuta para confirmar recebimento com rapidez."],
            ["Financeiro", "Liberacao de pagamento baseada em notas ja conferidas."],
            ["Administrativo", "Usuarios, permissoes, parametros e auditoria em uma area separada."]
          ].map(([title, copy], index) => (
            <RevealSection
              key={title}
              delay={100 + index * 70}
              duration={700 + (index % 3) * 80}
              distance={20 + (index % 3) * 6}
            >
              <article className="card home-card">
                <h3 className="card-title">{title}</h3>
                <p className="card-copy">{copy}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  );
}
