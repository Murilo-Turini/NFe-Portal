export const portalData = {
  dashboard: {
    metrics: [
      { label: "Notas novas", value: "128", badge: "Hoje", tone: "primary" },
      { label: "Conferidas", value: "73", badge: "Estoque", tone: "success" },
      { label: "Liberadas", value: "54", badge: "Financeiro", tone: "info" },
      { label: "Notas nao reconhecidas", value: "7", badge: "Atencao", tone: "warning" }
    ],
    alerts: [
      { title: "7 notas nao reconhecidas aguardando analise", tone: "warning" },
      { title: "12 eventos fiscais exigem revisao", tone: "warning" },
      { title: "14 notas conferidas prontas para financeiro", tone: "success" }
    ]
  },
  notes: [
    {
      key: "35260412345678000123550010000010231000010231",
      supplier: "AcoBrasil Distribuidora",
      client: "MaxSteel LTDA",
      issueDate: "25/04/2026",
      total: "R$ 18.420,00",
      documentType: "procNFe",
      sefazStatus: "Autorizada",
      internalStatus: "Novo"
    },
    {
      key: "35260498765432000101550010000045821000045821",
      supplier: "Papelaria Prime",
      client: "Nova Linha Industrial",
      issueDate: "25/04/2026",
      total: "R$ 2.184,50",
      documentType: "resNFe",
      sefazStatus: "Pendente de XML integral",
      internalStatus: "Novo"
    },
    {
      key: "35260411223344000188550010000021231000021234",
      supplier: "Embalagens Sul",
      client: "Grupo Norte",
      issueDate: "24/04/2026",
      total: "R$ 5.944,90",
      documentType: "procEventoNFe",
      sefazStatus: "Cancelada",
      internalStatus: "Conferido"
    },
    {
      key: "35260411223344000188550010000021231000029999",
      supplier: "Quimica Forte",
      client: "Grupo Norte",
      issueDate: "24/04/2026",
      total: "R$ 11.730,00",
      documentType: "procNFe",
      sefazStatus: "Autorizada",
      internalStatus: "Liberado"
    }
  ],
  events: [
    {
      time: "25/04/2026 09:41",
      type: "Cancelamento",
      code: "110111",
      key: "35260411223344000188550010000021231000021234",
      client: "Grupo Norte",
      impact: "Situacao SEFAZ alterada para cancelada"
    },
    {
      time: "25/04/2026 08:55",
      type: "Ciencia da operacao",
      code: "210210",
      key: "35260498765432000101550010000045821000045821",
      client: "Nova Linha Industrial",
      impact: "Resumo mantido e aguardando XML completo"
    },
    {
      time: "24/04/2026 17:20",
      type: "Confirmacao da operacao",
      code: "210200",
      key: "35260412345678000123550010000010231000010231",
      client: "MaxSteel LTDA",
      impact: "Documento integral disponivel"
    }
  ],
  users: [
    { name: "Ana Ribeiro", role: "Administrativo", scope: "Global", lastAccess: "25/04/2026 09:18" },
    { name: "Paulo Mendes", role: "Estoque", scope: "MaxSteel LTDA", lastAccess: "25/04/2026 09:37" },
    { name: "Fernanda Luz", role: "Financeiro", scope: "Grupo Norte", lastAccess: "25/04/2026 08:50" }
  ],
  audit: [
    { time: "25/04/2026 09:28", user: "Paulo Mendes", module: "Estoque", action: "Confirmou recebimento", reference: "35260412345678000123550010000010231000010231" },
    { time: "25/04/2026 09:05", user: "Ana Ribeiro", module: "Administrativo", action: "Atualizou regra de aprovacao interna", reference: "Fluxo financeiro" },
    { time: "25/04/2026 08:15", user: "Fernanda Luz", module: "Financeiro", action: "Liberou pagamento", reference: "35260411223344000188550010000021231000029999" }
  ]
};

export const navGroups = [
  {
    label: "Operacao",
    items: [
      { key: "dashboard", label: "Dashboard", icon: "DB" },
      { key: "notas", label: "Notas fiscais", icon: "NF" },
      { key: "eventos", label: "Eventos fiscais", icon: "EV" },
      { key: "estoque", label: "Estoque", icon: "ES" },
      { key: "financeiro", label: "Financeiro", icon: "FI" }
    ]
  },
  {
    label: "Administracao",
    items: [
      { key: "administrativo", label: "Administrativo", icon: "AD" },
      { key: "configuracoes", label: "Configuracoes", icon: "CF" },
      { key: "auditoria", label: "Auditoria", icon: "AU" }
    ]
  }
];
