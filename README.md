Claro! Aqui está o README sem a formatação de bloco de código (caixas de texto), pronto para ser copiado diretamente.

---

# 🕹️ RETRO BATTLE CHAMPIONSHIP 2026 – React + TypeScript

> Landing page interativa para um campeonato de e-sports com tema retrowave / pixel art, construída com React, TypeScript e Styled Components.

![Status](https://img.shields.io/badge/status-finalizado-brightgreen) ![Front-end](https://img.shields.io/badge/front--end-React%2FTypeScript%2FStyledComponents-blue)

---

## 📋 Visão Geral

Landing page completa do **Retro Battle Championship 2026**, com design retrô, animações neon e um formulário funcional de inscrição. Todo o layout e interações são componentizados com React, fortemente tipados com TypeScript e estilizados de forma encapsulada com Styled Components. O projeto inclui navegação entre a página principal e uma página de confirmação após o envio do formulário.

---

## 🧱 Estrutura do Projeto

```
src/
├── components/
│   ├── Countdown.tsx
│   ├── Footer.tsx
│   ├── GamesGrid.tsx
│   ├── Hero.tsx
│   ├── PixelDivider.tsx
│   ├── Podium.tsx
│   ├── RegistrationForm.tsx
│   ├── StarParticle.tsx
│   └── Toast.tsx
├── pages/
│   ├── ConfirmationPage.tsx
│   └── HomePage.tsx
├── styles/
│   ├── globalStyles.ts
│   └── theme.ts
├── types/
│   └── index.ts
├── App.tsx
└── index.tsx
```

---

## 🚀 Funcionalidades

- **Seção Hero** com título neon e data do evento.
- **Contagem regressiva** em tempo real até 15 de agosto de 2026.
- **Grade de jogos** (CS2, Valorant, Overwatch 2, Mortal Kombat 1) com imagens e efeitos hover.
- **Pódio de premiação** estilizado, com medalhas flutuantes.
- **Formulário de inscrição controlado** com validação completa e feedback via toast.
- **Página de confirmação** exibindo os dados fornecidos após o envio.
- **Partículas animadas** ao confirmar a inscrição.
- **Design responsivo** (mobile, tablet, desktop).
- **Estética retrô** com scanlines, cores neon e fontes pixel.

---

## ⚙️ Tecnologias e Conceitos Aplicados

### React + TypeScript
Todo o projeto é construído com componentes funcionais e tipagem estática.

| Conceito                | Onde é aplicado                                                                                         |
|-------------------------|---------------------------------------------------------------------------------------------------------|
| **Interfaces e tipos**  | Definição de `Jogador`, `JogoId`, `ToastState` em `types/index.ts` e props de todos os componentes.     |
| **Union types**         | Campo `jogo` do formulário (`'cs2' \| 'valorant' \| 'overwatch2' \| 'mk'`).                            |
| **useState**            | Estados do formulário, toast, partículas, contagem regressiva.                                          |
| **useEffect**           | Intervalo da contagem regressiva (com cleanup) e criação única das partículas.                          |
| **useRef**              | Foco automático no campo inválido do formulário.                                                        |
| **useCallback**         | Memorização das funções `showToast` e `handleInscricaoConfirmada`.                                      |
| **useNavigate / useLocation** | Navegação para a página de confirmação passando dados via estado da rota.                         |
| **Eventos React**       | `onSubmit`, `onChange`, `onClick` com tipagem `React.FormEvent`, `React.ChangeEvent`, etc.               |
| **Formulário controlado** | Cada input tem `value` e `onChange` vinculados a um estado local.                                     |
| **Validação customizada** | Verificação de comprimento, formato de e‑mail, campo obrigatório antes do envio.                       |

### Styled Components
Toda a estilização é feita dentro dos componentes, usando `styled` e `createGlobalStyle`.

| Conceito                   | Exemplo                                                                                                           |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Estilos baseados em props** | `ToastContainer` muda de cor conforme `$isError`; `Card` dos jogos muda cor de borda no hover via `$accent`.   |
| **Tema global**            | Cores, fontes e espaçamentos definidos em `theme.ts` e acessados via `${({ theme }) => ...}`.                      |
| **Animações**              | `keyframes` para pulsar, flutuar e piscar elementos.                                                              |
| **Estilos globais**        | Reset CSS e efeito de scanlines aplicados no body com `createGlobalStyle`.                                        |

---

## 📄 Páginas e Navegação

| Rota              | Componente          | Descrição                                                |
|-------------------|---------------------|----------------------------------------------------------|
| `/`               | `HomePage`          | Landing page completa com todas as seções.               |
| `/confirmacao`    | `ConfirmationPage`  | Exibe os dados da inscrição e mensagem de sucesso.       |

A navegação é feita com `react-router-dom` (BrowserRouter, Routes, Route). Após o `submit` bem‑sucedido do formulário, o usuário é redirecionado para `/confirmacao` com os dados no `state` da navegação.

---

## 🧪 Como Executar

1. **Criar o projeto base:**
   ```bash
   npx create-react-app retro-battle --template typescript
   cd retro-battle
   ```

2. **Instalar dependências adicionais:**
   ```bash
   npm install styled-components react-router-dom
   npm install --save-dev @types/styled-components
   ```

3. **Substituir/criar os arquivos** conforme a estrutura acima (todos os códigos fornecidos no guia).

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

5. Acesse `http://localhost:3000`.

> 📡 **Observação**: As imagens dos jogos são carregadas de URLs externas. Caso alguma não seja exibida, basta substituir os links em `GamesGrid.tsx`.

---

## ❌ O que o projeto NÃO faz

- Não envia dados para um backend (a inscrição é apenas simulada).
- Não persiste dados em `localStorage` ou banco.
- Não realiza autenticação real de usuário.
- Não possui lógica de torneio (brackets, sorteios).

Trata‑se de uma **demonstração front‑end completa**, aplicando boas práticas de componentização, tipagem e estilização moderna com React.

---

## 🎓 Conceitos de React, TypeScript e Styled Components Abordados

- **Componentes** – Divisão em pequenas partes reutilizáveis (Hero, Countdown, Form, etc.)
- **Propriedades (props)** – Tipagem com interfaces, incluindo props transient para styled-components (`$accent`, `$visivel`)
- **Estado (state)** – `useState` em formulários, contador, toast, partículas
- **Ciclo de vida** – `useEffect` com dependências e limpeza (clearInterval)
- **Hooks** – `useRef` para foco, `useCallback` para performance, `useNavigate`/`useLocation` para roteamento
- **Eventos** – `onSubmit`, `onChange`, `onClick` tipados
- **Formulários** – Controlados, validação manual com feedback
- **Styled Components** – Estilos dinâmicos, tema global, animações keyframes, estilos globais