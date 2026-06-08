# Guia de Acompanhamento Técnico — FedCorp

## Para Lucas (consultor técnico, uso interno)

---

## 1. Framework de Acompanhamento Semanal

### Cadência fixa (não pular)

| Dia | Ação | Duração | Formato |
|-----|------|---------|---------|
| **Segunda** | Devs abrem o tema da semana sozinhos | 0 (eles fazem) | Assíncrono |
| **Terça–Quinta** | Check-in 1:1 com cada dev | 30min cada | Síncrono (call/presencial) |
| **Sexta** | Retrospectiva individual ou em grupo | 30–45min | Síncrono |
| **Sexta (após retro)** | Dev preenche o formulário de check-in | 5min | Assíncrono |

### Estrutura do check-in 1:1 (30 min)

Use essa estrutura toda vez — cria previsibilidade:

1. **"O que você fez desde a última vez?"** (5 min)
   - Deixar o dev falar primeiro, sem interromper
   - Observar: ele explica com clareza ou fica vago?

2. **"Me mostra o código"** (10 min)
   - Pedir para compartilhar tela e navegar pelo exercício
   - NÃO corrigir imediatamente — perguntar: "por que você fez assim?"
   - Se tiver erro, guiar com perguntas: "o que acontece se essa entrada for nula?"

3. **"Onde travou?"** (5 min)
   - Se travou: o que tentou antes de travar?
   - Se não travou: "qual parte foi mais difícil?"
   - Se não fez: sem julgamento, entender o impedimento real

4. **"Explica pra mim"** (5 min)
   - Pedir para explicar o conceito da semana com palavras próprias
   - Esse é o termômetro real de aprendizado — não é o código, é a explicação

5. **"Próximo passo"** (5 min)
   - O que falta fazer até sexta?
   - Tem alguma dúvida específica para resolver agora?

### Estrutura da retrospectiva de sexta (30–45 min)

Pode ser individual ou em grupo (grupo é melhor — cria accountability entre eles):

1. **Cada dev apresenta** (10 min cada):
   - O que aprendeu nesta semana (conceito, não código)
   - O que foi mais difícil
   - O que faria diferente

2. **Feedback do Lucas** (5 min):
   - 1 ponto positivo concreto
   - 1 ponto de melhoria concreto
   - NÃO: "bom trabalho" (vago). SIM: "a forma como você separou o service do repository mostra que entendeu a separação de responsabilidades" (específico)

3. **Devs preenchem o check-in semanal** (5 min):
   - Formulário no navegador, leva 5 minutos
   - Fazer na frente deles garante que é preenchido

---

## 2. Metodologias Ágeis para 3 Pessoas

### Kanban simplificado (recomendado para esse cenário)

Scrum é pesado demais para 3 devs em programa de aprendizado. Use Kanban:

| Coluna | Significado |
|--------|-------------|
| **Backlog** | Atividades das próximas semanas (já estão nos planos) |
| **Fazendo** | O que cada dev está trabalhando agora (máximo 1 por dev) |
| **Review** | Pronto para Lucas revisar no check-in |
| **Feito** | Revisado e aprovado |

**Ferramenta:** Notion (eles já usam) ou GitHub Projects (se quiser integrar com os repos de exercício).

**WIP Limit:** Cada dev só pode ter 1 item em "Fazendo". Isso impede que comecem 3 coisas e não terminem nenhuma.

### Cerimônias que fazem sentido nesse contexto

| Cerimônia | Sim/Não | Motivo |
|-----------|---------|--------|
| Daily standup | **Não** | Com 3 devs e 2h/dia, não compensa. O check-in Ter–Qui já cobre |
| Sprint planning | **Não** | As atividades já estão planejadas no plano individual |
| Retrospectiva | **Sim** | Sexta-feira — essencial para feedback e ajuste |
| Demo/showcase | **Sim** | Na retro de sexta — dev mostra o exercício e explica o conceito |
| Code review | **Sim** | A partir do mês 2 — devs revisam código uns dos outros |

### Quando introduzir cada prática (não tudo de uma vez)

| Mês | Introduzir | Por quê |
|-----|-----------|---------|
| **Mês 1** | Kanban board + check-ins + retro | Base mínima |
| **Mês 2** | Code review entre devs | Eles já aprenderam o conceito (semana 4 de cada plano) |
| **Mês 3** | Pair programming (30min/semana) | Aprenderem uns com os outros |

---

## 3. Métricas que Importam

### Métricas semanais (extraídas do formulário de check-in)

| Métrica | Bom | Atenção | Ação |
|---------|-----|---------|------|
| Atividades completas | 3/3 (Fundamento + Exemplo + Exercício) | 2/3 | Entender impedimento no 1:1 |
| Entendimento (1-5) | 4-5 | 1-3 | Rever se o material está claro ou se precisa reforço |
| "Consegue explicar" | "Sim, tranquilo" | "Não ainda" | Dedicar mais tempo ao Fundamento na próxima semana |
| Horas dedicadas | 4-6h | 0-2h | Ajustar expectativas ou formato das atividades |
| Ritmo | "Adequado" | "Muito rápido" | Reduzir escopo ou dividir a semana em 2 |

### Métricas mensais (observação do Lucas)

| Métrica | Como medir |
|---------|-----------|
| Qualidade da explicação | Na retro: o dev explica com clareza e profundidade crescente? |
| Autonomia | O dev traz dúvidas mais específicas ao longo do tempo? (de "não entendi nada" para "não entendi esse trecho específico") |
| Decisões técnicas | O arquivo decisoes.md mostra raciocínio claro, não só "fiz porque achei melhor"? |
| Consistência | O dev entrega toda semana ou é irregular? |

### Métricas trimestrais (assessment formal)

- Reaplicar o mesmo formulário de assessment (já existe)
- Comparar scores ponto a ponto
- Ajustar o plano do próximo trimestre com base nos deltas

---

## 4. Armadilhas Comuns (o que NÃO fazer)

| Armadilha | Consequência | O que fazer em vez disso |
|-----------|-------------|-------------------------|
| **Dar a resposta** quando o dev trava | Ele não aprende a resolver sozinho | Guiar com perguntas: "o que você acha que acontece se...?" |
| **Pular a retrospectiva** quando a semana está corrida | Perde o feedback loop, devs perdem accountability | Encurtar pra 15 min se preciso, mas nunca pular |
| **Não adaptar** quando o dev está claramente perdido | Dev fica frustrado e desiste | Reduzir escopo: "esta semana faz só o Fundamento e o Exemplo, o Exercício fica pra próxima" |
| **Comparar devs** entre si na frente deles | Cria competição tóxica, desmotiva o mais lento | Cada dev vs. a versão anterior dele mesmo — nunca vs. outro dev |
| **Elogiar vago** ("bom trabalho") | Não sabe o que fez de bom, não repete | Elogio específico: "a forma como você tratou o erro nessa função mostra maturidade" |
| **Cobrar demais** quando o dev tem outras funções | Gera culpa e abandono do programa | Ajustar expectativa: "o mínimo é o Fundamento. Se fizer o Exercício, ótimo. Se não, trazemos na próxima semana." |
| **Ignorar sinais emocionais** (especialmente Daniel) | Dev se fecha e para de compartilhar dificuldades | Perguntar diretamente: "como você está se sentindo em relação ao programa?" — e ouvir |

---

## 5. Feedback Construtivo — Framework SBI

Use o framework **SBI** (Situation-Behavior-Impact) para todo feedback:

- **S** (Situação): "No exercício da semana 2..."
- **B** (Comportamento): "...você separou a validação em uma função dedicada..."
- **I** (Impacto): "...isso torna o código mais fácil de testar e reutilizar."

### Exemplos práticos:

**Positivo:** "Na semana 3 (S), quando você criou a interface Produto com campos opcionais usando o ? (B), isso mostra que você entendeu que nem todo dado é obrigatório e que o TypeScript te protege de acessar algo que pode ser undefined (I)."

**Construtivo:** "No exercício da semana 1 (S), a função calcularDesconto não trata o caso de percentual maior que 100 (B). Se alguém passar 150%, o resultado seria um preço negativo, o que geraria um bug silencioso em produção (I). Que tal adicionar uma validação no início da função?"

---

## 6. Roteiro da Reunião com os 3 (1 hora)

### Abertura (10 min)
> "Vocês responderam o assessment, receberam os planos individuais. Agora vou explicar como funciona o acompanhamento semanal e apresentar o formulário de check-in."

- Reforçar: **os planos são de vocês, a responsabilidade é de vocês**
- Lucas está disponível como consultor, não como cobrador

### Como funciona a cadência (10 min)
- Mostrar o Kanban (se já estiver montado)
- Explicar o ciclo: Segunda (ler) → Terça–Quinta (fazer + check-in) → Sexta (retro + check-in form)
- Reforçar: "O check-in de sexta é obrigatório. Leva 5 minutos."

### Apresentar o formulário de check-in (5 min)
- Abrir no navegador e mostrar como preencher
- Enfatizar: "Se vocês não conseguiram fazer a atividade, tudo bem — mas preciso saber o porquê pra adaptar o plano"
- O formulário não é avaliação — é termômetro

### Primeiras atividades — alinhar expectativas (15 min)
- Cada dev confirma: "Sua semana 1 é sobre X. Faz sentido?"
- Confirmar que todos conseguem criar o repositório `fedcorp-exercicios` no GitHub
- Se alguém tiver dúvida sobre setup, resolver agora

### Perguntas e combinados (10 min)
- Abrir para perguntas
- Combinar: horário do check-in Ter–Qui (que funcione para todos)
- Combinar: retro na sexta — horário fixo

### Fechamento (10 min)
> "A partir de agora, cada semana vocês abrem o plano, seguem a atividade, e trazem o resultado. Se travarem, anotem onde e tragam no check-in. O importante não é acertar tudo — é não parar."

- Enviar links: plano individual (PDF) + formulário de check-in
- Próximo passo: semana 1 começa na segunda
