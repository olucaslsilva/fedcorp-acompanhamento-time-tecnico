// ============================================================
// GOOGLE APPS SCRIPT — Cole este código no Apps Script
// ============================================================
//
// COMO CONFIGURAR:
// 1. Crie uma planilha no Google Sheets
// 2. Vá em Extensões > Apps Script
// 3. Apague o conteúdo padrão e cole TODO este código
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: "App da Web"
// 6. Executar como: "Eu" (sua conta)
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Clique em "Implantar" e copie a URL gerada
// 9. Cole a URL no arquivo index.html na variável GOOGLE_SHEETS_URL
//
// ============================================================

const HEADERS = [
  'Timestamp',
  'Nome',
  'Email',
  'Experiência',
  'Formação',
  'Projeto Mais Complexo',
  // Frontend skills (1-5)
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Tailwind CSS',
  // Backend skills (1-5)
  'Node.js', 'Python', 'Java', 'PHP', 'C#/.NET', 'APIs REST',
  // Database skills (1-5)
  'SQL', 'PostgreSQL/MySQL', 'MongoDB', 'Firebase/Supabase',
  // Infra skills (1-5)
  'Git (skill)', 'Docker', 'Linux/Terminal', 'CI/CD', 'Cloud', 'Testes Automatizados',
  // Engineering practices
  'Git Nível', 'Testes Nível', 'Code Review', 'Documentação',
  'Ferramentas',
  // Processes
  'Metodologia Ágil', 'Organização de Tarefas',
  'Resolução de Problemas', 'Tempo Antes de Pedir Ajuda', 'Definição de Pronto',
  // Growth
  'Áreas de Interesse', 'Estilo de Aprendizado', 'Horas de Estudo/Semana',
  'Meta 6 Meses', 'Maior Dificuldade', 'Mensagem Livre'
];

const SKILL_ORDER = [
  'html', 'css', 'javascript', 'typescript', 'react', 'vuejs', 'angular', 'tailwind',
  'nodejs', 'python', 'java', 'php', 'csharp', 'apis-rest',
  'sql', 'postgresql-mysql', 'mongodb', 'firebase-supabase',
  'git', 'docker', 'linux', 'cicd', 'cloud', 'testes'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length)
        .setFontWeight('bold')
        .setBackground('#1e293b')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    var skills = data.skills || {};
    var skillValues = SKILL_ORDER.map(function(s) { return skills[s] || ''; });

    var ferramentas = Array.isArray(data.ferramentas) ? data.ferramentas.join(', ') : (data.ferramentas || '');
    var interesseArea = Array.isArray(data.interesse_area) ? data.interesse_area.join(', ') : (data.interesse_area || '');
    var estiloAprendizado = Array.isArray(data.estilo_aprendizado) ? data.estilo_aprendizado.join(', ') : (data.estilo_aprendizado || '');

    var row = [
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.nome || '',
      data.email || '',
      data.experiencia || '',
      data.formacao || '',
      data.projeto_complexo || ''
    ];

    row = row.concat(skillValues);

    row = row.concat([
      data.git_nivel || '',
      data.testes_nivel || '',
      data.code_review || '',
      data.documentacao || '',
      ferramentas,
      data.agile || '',
      data.organizacao || '',
      data.resolucao_problema || '',
      data.tempo_ajuda || '',
      data.definicao_pronto || '',
      interesseArea,
      estiloAprendizado,
      data.horas_estudo || '',
      data.meta_6_meses || '',
      data.maior_dificuldade || '',
      data.mensagem_livre || ''
    ]);

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Dados salvos com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'Assessment API ativa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
