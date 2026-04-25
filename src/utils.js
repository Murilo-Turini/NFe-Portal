export function toneForValue(value) {
  const map = {
    Autorizada: "success",
    Cancelada: "danger",
    "Pendente de XML integral": "warning",
    Novo: "primary",
    Conferido: "info",
    Liberado: "success",
    Ativa: "success",
    Atencao: "warning",
    Administrativo: "primary",
    Estoque: "info",
    Financeiro: "success"
  };

  return map[value] || "primary";
}

export function downloadTextFile(filename, content, mimeType = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function toCsv(headers, rows) {
  const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const head = headers.map(escape).join(",");
  const body = rows.map((row) => row.map(escape).join(",")).join("\n");
  return `${head}\n${body}`;
}
