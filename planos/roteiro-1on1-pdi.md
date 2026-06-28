# Roteiro — 1:1s de PDI (18/06/2026)

**Formato:** 3 reuniões individuais a partir das 15h
**Duração sugerida:** 30-40 min cada
**Ordem sugerida:** Daniel → Ingryd → Leonan (do mais crítico ao mais autônomo)

---

## Preparação (antes de começar)

- [ ] Abrir o PDI do dev no browser (`planos/pdi-daniel.html`, etc.)
- [ ] Ter o relatório de análise de código aberto para referência
- [ ] Confirmar se os devs já preencheram o formulário de autoavaliação (`pdi.html`)
  - **Se não preencheram:** pedir que preencham DURANTE o início do 1:1 (5 min) — abre o link e espera
  - **Se preencheram:** comparar autoavaliação com seus scores antes de iniciar

---

## Estrutura de cada 1:1 (modelo GROW)

### 1. Abertura (3 min)
> "Essa conversa é sobre o SEU desenvolvimento. Não é avaliação de desempenho — é para montar um plano juntos. Vou mostrar um snapshot de como eu te enxergo tecnicamente, e quero ouvir como VOCÊ se enxerga. A partir daí, a gente define 3 metas práticas para os próximos 2 meses."

**Postura:** Radical Candor — cuidar genuinamente + ser direto. Nada de "vocês são melhores que sêniors" (feedback do Thiago). Ser honesto com respeito.

### 2. GOAL — Alinhamento de expectativa (5 min)
Perguntas:
- "O que você espera dessa conversa?"
- "Onde você quer estar como dev daqui a 2 meses?"
- "Tem alguma área que você sente que precisa melhorar?"

**Anotar** as respostas no campo "Observações do Mentor" do PDI.

### 3. REALITY — Snapshot + Autoavaliação (10 min)

Mostrar o documento PDI na tela com os scores do mentor pré-preenchidos.

> "Esses são os scores que eu mapeei baseado na análise de código e nas observações. Escala de 1 a 5 — Dreyfus: 1 é novato, 3 é competente, 5 é expert."

**Para cada competência:**
- Mostrar o score do mentor
- Perguntar: "Você se enxerga nesse nível? Mais alto, mais baixo?"
- Se divergência > 1 ponto: "Me conta por quê — pode ser que eu esteja vendo algo diferente, ou talvez tenha algo que eu não vi."
- **Ajustar o score** no PDI ao vivo se fizer sentido

**Usar SBI para feedbacks específicos:**
- **Situation:** "No commit X do projeto Y..."
- **Behavior:** "...vi que a SECRET_KEY estava hardcoded no settings.py..."
- **Impact:** "...isso significa que qualquer pessoa com acesso ao repo pode forjar tokens."

**NÃO FAZER:** usar o relatório de código como arma. É insumo silencioso — você sabe os dados, não precisa jogar na cara.

### 4. OPTIONS — Definir as 3 metas (10 min)

Com base nos gaps maiores, propor 3 metas. O dev valida e ajusta.

> "Baseado no que conversamos, eu sugiro focar nessas 3 áreas. Me diz se faz sentido para você."

Para cada meta, preencher juntos no PDI:
- **Título** (uma frase)
- **Estado atual** → **Estado desejado**
- **Critério de sucesso** (como saber que atingiu — SMART)
- **Prazo** (dentro das 8 semanas do ciclo)
- **Ações 70-20-10:**
  - 70% prática no trabalho (ex: corrigir credenciais no projeto real)
  - 20% mentoria (ex: pair programming semanal com Lucas)
  - 10% estudo (ex: ler artigo sobre .env, assistir vídeo sobre Git flow)

### 5. WILL — Compromisso mútuo (5 min)

> "Eu me comprometo com: 1:1 quinzenal de 30 min, code review semanal focado nas suas metas, responder dúvidas em 24h úteis. E você, o que se compromete a fazer até o próximo 1:1?"

- Dev diz o que vai fazer (anotar)
- Definir dia/horário fixo do 1:1 quinzenal
- Revisar a seção "Compromissos do Mentor"

### 6. Fechamento (2 min)

> "Vou finalizar o documento, salvar na planilha, e te mandar uma cópia. Se precisar ajustar alguma coisa depois, me fala."

- Clicar "Salvar na Planilha" no PDI
- Imprimir/PDF se quiser

---

## Dados específicos por dev

### Daniel Mello — Backend · Python/Django
**Scores do mentor (análise de código):**
| Dimensão | Score Relatório (0-10) | Dreyfus (1-5) |
|---|---|---|
| Organização | 4.0 | 2.0 |
| Segurança | 3.0 | 2.0 |
| Boas práticas | 3.5 | 2.0 |
| Testes | 0.5 | 1.0 |
| Git workflow | 2.0 | 1.0 |
| **Geral** | **2.5/10** | **~1.8** |

**Contexto:** Menor volume de commits (~84), backend focus, nota mais baixa do time. Provável primeiro emprego em dev.

**Gaps prioritários sugeridos:**
1. **Git workflow** (score 1.0) — não usa branches, commits direto na main
2. **Segurança** (score 2.0) — credenciais hardcoded, sem validação
3. **Qualidade de código** (score 2.0) — funções longas, naming genérico

**Quick win para Meta 1:** Fazer pair programming para criar um .gitignore e mover para branches + PRs no próximo projeto.

**Cuidado:** Daniel sugeriu nivelamento via code review na reunião de 09/06 — validar e usar isso como gancho.

---

### Ingryd Aylana — Frontend · React/JavaScript
**Scores do mentor (análise de código):**
| Dimensão | Score Relatório (0-10) | Dreyfus (1-5) |
|---|---|---|
| Organização | 7.0 | 3.0 |
| Segurança | 4.5 | 2.0 |
| Boas práticas | 6.0 | 3.0 |
| Testes | 0.5 | 1.0 |
| Git workflow | 7.5 | 4.0 |
| **Geral** | **5.5/10** | **~2.6** |

**Contexto:** Melhor Git workflow do time (7.5/10!), código mais organizado. Firebase config hardcoded encontrado.

**Gaps prioritários sugeridos:**
1. **Segurança** (score 2.0) — Firebase keys hardcoded, sem .env no frontend
2. **Comunicação técnica** (score 2.0) — pouca documentação, READMEs ausentes
3. **Autonomia** (score 2.0) — potencial para crescer como referência frontend

**Quick win para Meta 1:** Mover Firebase config para variáveis de ambiente + criar .env.example no repo.

**Ponto forte a reconhecer:** melhor workflow de Git do time — usar como exemplo positivo.

---

### Leonan Thomaz — Full-Stack · Python/Django + React
**Scores do mentor (análise de código):**
| Dimensão | Score Relatório (0-10) | Dreyfus (1-5) |
|---|---|---|
| Organização | 6.5 | 3.0 |
| Segurança | 3.5 | 2.0 |
| Boas práticas | 5.0 | 3.0 |
| Testes | 0.5 | 1.0 |
| Git workflow | 3.0 | 2.0 |
| **Geral** | **4.5/10** | **~2.2** |

**Contexto:** Maior volume de commits (~299, 10+ repos). Contribuidor mais ativo. Potencial de liderança técnica.

**Gaps prioritários sugeridos:**
1. **Git workflow** (score 2.0) — commits sem semântica, pouco uso de branches
2. **Segurança** (score 2.0) — SECRET_KEY hardcoded no Django settings
3. **Qualidade de código** (score 3.0 mas com débitos) — arquivos _old/backup no repo, mistura de responsabilidades

**Quick win para Meta 1:** Configurar commit semântico (feat/fix/chore) + hook de pre-commit para impedir secrets.

**Ponto forte a reconhecer:** Volume de contribuição impressionante — 299 commits mostra que ele produz. Foco agora é qualidade, não quantidade.

---

## Frases úteis durante o 1:1

| Situação | O que dizer |
|---|---|
| Dev se subestima | "Eu vi no seu código que [evidência positiva]. Isso já é nível [X] — se dê crédito." |
| Dev se superestima | "Entendo que você se sente confortável nisso. Me mostra um exemplo de quando usou [competência]?" |
| Dev fica na defensiva | "Não estou criticando o que foi feito — estou mapeando onde podemos crescer. Todo mundo está nesse nível no começo." |
| Dev não sabe responder | "Tudo bem não saber agora. Vamos descobrir juntos." |
| Dev desanimado | "O plano é para 2 meses, não para amanhã. Uma coisa de cada vez." |
| Precisa dar feedback duro | "[Situação] eu observei que [Comportamento]. O impacto disso é [Impacto]. Como podemos resolver?" |

---

## Depois dos 1:1s

- [ ] Salvar cada PDI na planilha (botão no documento)
- [ ] Gerar PDF de cada um (botão Imprimir no documento)
- [ ] Enviar cópia por e-mail/chat para cada dev
- [ ] Agendar 1:1s quinzenais no calendário (próximo: semana de 30/06)
- [ ] Atualizar log de horas com o tempo gasto
- [ ] Preparar resumo para Thiago/Alberto (próxima semana)
