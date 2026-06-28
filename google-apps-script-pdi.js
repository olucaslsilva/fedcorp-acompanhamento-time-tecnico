// ============================================================
// GOOGLE APPS SCRIPT — PDI (Plano de Desenvolvimento Individual)
// ============================================================
//
// COMO CONFIGURAR:
// 1. Na MESMA planilha do Assessment, crie uma nova aba chamada "PDI"
// 2. Vá em Extensões > Apps Script
// 3. ADICIONE este código ao script existente (NÃO substitua)
// 4. Reimplante: "Implantar" > "Gerenciar implantações" > Editar > Nova versão
// 5. Copie a URL (é a mesma do assessment — o roteamento é por tipo)
//
// OU, se preferir script separado:
// 1. Crie nova planilha > Extensões > Apps Script
// 2. Cole TODO este código
// 3. Implante como App da Web
// 4. Cole a URL no pdi.html
//
// ============================================================

var PDI_HEADERS = [
  'Timestamp',
  'Nome',
  'Email',
  'Cargo',
  'Tempo na FedCorp',
  'Experiência Total',
  // 8 competências Dreyfus (1-5)
  'Fundamentos de Programação',
  'Qualidade de Código',
  'Controle de Versão (Git)',
  'Segurança',
  'Debugging e Resolução',
  'Comunicação Técnica',
  'Autonomia e Iniciativa',
  'Colaboração',
  // Média calculada
  'Média Geral',
  // Carreira
  'O que mais gosta',
  'Estilo de aprendizado',
  'Meta em 1 ano',
  'Maior dificuldade',
  'Mensagem livre'
];

var COMPETENCY_ORDER = [
  'fundamentos', 'qualidade', 'git', 'seguranca',
  'debugging', 'comunicacao', 'autonomia', 'colaboracao'
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Roteamento por tipo de formulário
    if (data.tipo === 'pdi-documento') {
      return handlePDIDocumento(ss, data);
    } else if (data.competencias) {
      return handlePDI(ss, data);
    } else {
      return handleAssessment(ss, data);
    }

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handlePDI(ss, data) {
  var sheet = ss.getSheetByName('PDI');
  if (!sheet) {
    sheet = ss.insertSheet('PDI');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(PDI_HEADERS);
    sheet.getRange(1, 1, 1, PDI_HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#312e81')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  var competencias = data.competencias || {};
  var compValues = COMPETENCY_ORDER.map(function(c) {
    return competencias[c] || 0;
  });

  var soma = compValues.reduce(function(a, b) { return a + b; }, 0);
  var media = (soma / COMPETENCY_ORDER.length).toFixed(1);

  var gosta = Array.isArray(data.gosta) ? data.gosta.join(', ') : (data.gosta || '');
  var aprendizado = Array.isArray(data.aprendizado) ? data.aprendizado.join(', ') : (data.aprendizado || '');

  var row = [
    new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    data.nome || '',
    data.email || '',
    data.cargo || '',
    data.tempo_empresa || '',
    data.experiencia_total || ''
  ];

  row = row.concat(compValues);
  row.push(parseFloat(media));
  row = row.concat([
    gosta,
    aprendizado,
    data.meta_1ano || '',
    data.maior_dificuldade || '',
    data.mensagem_livre || ''
  ]);

  sheet.appendRow(row);

  // Formatação condicional nas colunas de competência (colunas 7-14)
  var lastRow = sheet.getLastRow();
  for (var i = 0; i < COMPETENCY_ORDER.length; i++) {
    var col = 7 + i;
    var cell = sheet.getRange(lastRow, col);
    var val = compValues[i];
    if (val <= 1) {
      cell.setBackground('#fee2e2').setFontColor('#991b1b');
    } else if (val <= 2) {
      cell.setBackground('#fef3c7').setFontColor('#92400e');
    } else if (val <= 3) {
      cell.setBackground('#e0e7ff').setFontColor('#3730a3');
    } else {
      cell.setBackground('#dcfce7').setFontColor('#166534');
    }
  }

  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'PDI salvo com sucesso',
    type: 'pdi'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// HANDLER: PDI Documento (preenchido pelo mentor no 1:1)
// Salva na aba "PDI-Docs" — 1 linha por salvamento
// ============================================================

var PDI_DOC_HEADERS = [
  'Timestamp',
  'Desenvolvedor',
  'Cargo/Contexto',
  // Scores
  'Fundamentos', 'Qualidade', 'Git', 'Segurança',
  'Debugging', 'Comunicação', 'Autonomia', 'Colaboração', 'Média',
  // Observações
  'Pontos Fortes', 'Pontos de Atenção', 'Contexto Relevante',
  // Meta 1
  'Meta 1 - Título', 'Meta 1 - Estado Atual', 'Meta 1 - Estado Desejado',
  'Meta 1 - Critério', 'Meta 1 - Prazo',
  'Meta 1 - Ação 70%', 'Meta 1 - Ação 20%', 'Meta 1 - Ação 10%',
  // Meta 2
  'Meta 2 - Título', 'Meta 2 - Estado Atual', 'Meta 2 - Estado Desejado',
  'Meta 2 - Critério', 'Meta 2 - Prazo',
  'Meta 2 - Ação 70%', 'Meta 2 - Ação 20%', 'Meta 2 - Ação 10%',
  // Meta 3
  'Meta 3 - Título', 'Meta 3 - Estado Atual', 'Meta 3 - Estado Desejado',
  'Meta 3 - Critério', 'Meta 3 - Prazo',
  'Meta 3 - Ação 70%', 'Meta 3 - Ação 20%', 'Meta 3 - Ação 10%',
  // Extra
  'Compromissos Extras', 'Resumo do Check-in'
];

function handlePDIDocumento(ss, data) {
  var sheet = ss.getSheetByName('PDI-Docs');
  if (!sheet) {
    sheet = ss.insertSheet('PDI-Docs');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(PDI_DOC_HEADERS);
    sheet.getRange(1, 1, 1, PDI_DOC_HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#1A365D')
      .setFontColor('#ffffff')
      .setFontSize(9);
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 140);
    sheet.setColumnWidth(2, 160);
  }

  var comp = data.competencias || {};
  var scores = COMPETENCY_ORDER.map(function(c) { return comp[c] || 0; });
  var soma = scores.reduce(function(a, b) { return a + b; }, 0);
  var media = (soma / COMPETENCY_ORDER.length).toFixed(1);

  var metas = data.metas || [];

  function metaFields(idx) {
    var m = metas[idx] || {};
    return [
      m.titulo || '',
      m.estado_atual || '',
      m.estado_desejado || '',
      m.criterio_sucesso || '',
      m.prazo || '',
      m.acao_70 || '',
      m.acao_20 || '',
      m.acao_10 || ''
    ];
  }

  var row = [
    data.data_salvamento || new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    data.dev_nome || '',
    (data.cargo || '') + ' | ' + (data.contexto || '')
  ];

  row = row.concat(scores);
  row.push(parseFloat(media));
  row = row.concat([
    data.pontos_fortes || '',
    data.pontos_atencao || '',
    data.contexto_relevante || ''
  ]);
  row = row.concat(metaFields(0));
  row = row.concat(metaFields(1));
  row = row.concat(metaFields(2));
  row = row.concat([
    data.compromissos_extra || '',
    data.review_resumo || ''
  ]);

  sheet.appendRow(row);

  // Formatação dos scores (colunas 4-11)
  var lastRow = sheet.getLastRow();
  for (var i = 0; i < COMPETENCY_ORDER.length; i++) {
    var col = 4 + i;
    var cell = sheet.getRange(lastRow, col);
    var val = scores[i];
    if (val <= 1) {
      cell.setBackground('#fee2e2').setFontColor('#991b1b');
    } else if (val <= 2) {
      cell.setBackground('#fef3c7').setFontColor('#92400e');
    } else if (val <= 3) {
      cell.setBackground('#e0e7ff').setFontColor('#3730a3');
    } else {
      cell.setBackground('#dcfce7').setFontColor('#166534');
    }
  }

  // Destacar nome do dev
  sheet.getRange(lastRow, 2).setFontWeight('bold');

  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'PDI documento salvo com sucesso',
    type: 'pdi-documento',
    dev: data.dev_nome
  })).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// HANDLER: Autoavaliação Dreyfus (preenchido pelo dev)
// Mantém compatibilidade com pdi.html (formulário)
// ============================================================

// Se estiver adicionando ao script existente, RENOMEIE a função
// doPost original para handleAssessment e use o roteador acima.
// Se estiver em script separado, descomente a função abaixo:

/*
function handleAssessment(ss, data) {
  // Cole aqui o conteúdo da função doPost do google-apps-script.js original
  // (sem o try/catch externo — isso já está no roteador)
}
*/

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'PDI API ativa'
  })).setMimeType(ContentService.MimeType.JSON);
}
