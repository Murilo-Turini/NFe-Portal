# Portal NF-e React

Versao `React + Vite` do portal NF-e.

## Como usar

1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Gere build:

```bash
npm run build
```

## Estrutura

```text
nfe-portal-react/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    styles.css
    data/
      portalData.js
    components/
      Layout.jsx
      Sidebar.jsx
      Topbar.jsx
      Card.jsx
      Table.jsx
      Badge.jsx
    pages/
      HomePage.jsx
      DashboardPage.jsx
      NotesPage.jsx
      NoteDetailPage.jsx
      EventsPage.jsx
      StockPage.jsx
      FinancePage.jsx
      ClientsPage.jsx
      AdminPage.jsx
      SettingsPage.jsx
      AuditPage.jsx
```

## Arquivos principais para troca rapida

- `src/data/portalData.js`
- `src/styles.css`
- `src/pages/*`

## Observacao

O projeto usa roteamento simples por `hash` para evitar dependencias extras. Se quiser trocar depois por `react-router-dom`, a estrutura de paginas ja esta separada para isso.
