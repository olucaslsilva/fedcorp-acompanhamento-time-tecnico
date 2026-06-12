// ============================================================
// GOOGLE APPS SCRIPT — CHECK-IN SEMANAL
// ============================================================
//
// COMO CONFIGURAR:
// 1. Crie uma NOVA planilha no Google Sheets (ou uma nova aba na existente)
// 2. Vá em Extensões > Apps Script
// 3. Apague o conteúdo padrão e cole TODO este código
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: "App da Web"
// 6. Executar como: "Eu" (sua conta)
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Clique em "Implantar" e copie a URL gerada
// 9. Cole a URL no checkin-semanal.html na variável GOOGLE_SHEETS_URL
//
// ============================================================

const CHECKIN_HEADERS = [
  'Timestamp',
  'Nome',
  'Semana',
  'Fundamento',
  'Exemplo Guiado',
  'Exercício Solo',
  'Decisões.md',
  'Link Repositório',
  'Entendimento (1-5)',
  'Consegue Explicar',
  'Onde Travou',
  'Impedimentos',
  'Necessidades',
  'Horas Dedicadas',
  'Ritmo do Plano',
  'Mensagem Livre'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(CHECKIN_HEADERS);
      sheet.getRange(1, 1, 1, CHECKIN_HEADERS.length)
        .setFontWeight('bold')
        .setBackground('#1a365d')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    var impedimentos = Array.isArray(data.impedimentos) ? data.impedimentos.join(', ') : (data.impedimentos || '');

    var row = [
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.nome || '',
      data.semana || '',
      data.fundamento || '',
      data.exemplo || '',
      data.exercicio || '',
      data.decisoes_md || '',
      data.repo_link || '',
      data.entendimento || '',
      data.consegue_explicar || '',
      data.onde_travou || '',
      impedimentos,
      data.necessidades || '',
      data.horas || '',
      data.ritmo || '',
      data.mensagem_livre || ''
    ];

    sheet.appendRow(row);

    // Colorir linhas por dev para facilitar leitura
    var lastRow = sheet.getLastRow();
    var nome = data.nome || '';
    var bgColor = '#ffffff';
    if (nome === 'Leonan') bgColor = '#ebf8ff';
    else if (nome === 'Ingryd') bgColor = '#faf5ff';
    else if (nome === 'Daniel') bgColor = '#f0fff4';
    sheet.getRange(lastRow, 1, 1, CHECKIN_HEADERS.length).setBackground(bgColor);

    // Colorir célula de status conforme completude
    var statusCols = [4, 5, 6, 7]; // Fundamento, Exemplo, Exercício, Decisões
    statusCols.forEach(function(col) {
      var val = sheet.getRange(lastRow, col).getValue();
      if (val === 'completo' || val === 'sim') {
        sheet.getRange(lastRow, col).setBackground('#c6f6d5');
      } else if (val === 'parcial') {
        sheet.getRange(lastRow, col).setBackground('#fefcbf');
      } else if (val === 'nao-fiz' || val === 'nao') {
        sheet.getRange(lastRow, col).setBackground('#fed7d7');
      }
    });

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'Check-in Semanal API ativa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
