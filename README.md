<div align="center">

# 💻 DAPL_2k26_WEB

### Exercícios da disciplina de Desenvolvimento de Aplicativos — ETE FMC

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20andamento-yellow?style=for-the-badge)

</div>

---

## 👨‍💻 Sobre o repositório

Este repositório reúne os exercícios práticos da disciplina de **Desenvolvimento de Aplicativos (DAPL)**, na sua trilha de **desenvolvimento Web**. O conteúdo é dividido em duas frentes que se complementam:

- **FrontEnd** — páginas estáticas em HTML/CSS e animações/jogos interativos com `<canvas>` e JavaScript puro.
- **BackEnd** — servidores HTTP em Node.js, evoluindo do módulo nativo `http` até o framework **Express**, cobrindo rotas, códigos de status, query strings, formulários e JSON.

|                    |                                                                   |
| ------------------ | ----------------------------------------------------------------- |
| 🏫 **Instituição** | Escola Técnica de Eletrônica Francisco Moreira da Costa (ETE FMC) |
| 🎓 **Curso**       | Técnico em Desenvolvimento de Sistemas (DS)                       |
| 📘 **Disciplina**  | Desenvolvimento de Aplicativos (DAPL) — módulo Web                |
| 👨‍🏫 **Professor**   | Daniel Albino Mosca Rodrigues                                     |
| 🙋 **Aluno**       | Iury Gonçalves de Souza                                           |
| 📅 **Ano letivo**  | 2026                                                              |

---

## 🗃️ Estrutura do repositório

```text
DAPL_2k26_WEB/
├── FrontEnd/
│   ├── pagina-circuito.html
│   ├── wikipedia-etefmc.html
│   ├── img/
│   └── canvas/
│       ├── parte-1/                    # formas e movimento aleatório
│       ├── parte-2/                    # pausa, retomada e controle de velocidade
│       ├── jogo-cobrinha/              # jogo da cobrinha
│       ├── chuva-particulas/           # partículas seguindo o mouse
│       └── arena-gravitacional/        # arena com gravidade, 1 ou 2 jogadores
│
├── BackEnd/
│   ├── 1-introducao-nodejs/
│   │   ├── hello-world/                # módulo http nativo
│   │   └── html-server/
│   ├── 2-endpoints/
│   │   ├── autenticacao/               # 401 vs 403
│   │   ├── cardapio/
│   │   ├── http-status/                # 1xx a 5xx
│   │   └── mini-blog/
│   ├── 3-requisicoes/
│   │   ├── cor-pagina/                 # query string
│   │   ├── jogo-guess/
│   │   └── query-basico/
│   └── 4-framework-express/
│       ├── simulacao-estoque/          # POST/GET com Express + JSON
│       └── simulacao-login/
│
├── package.json
└── README.md
```

---

## 🎨 FrontEnd

### Páginas estáticas

| Arquivo                 | Descrição                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `pagina-circuito.html`  | Página explicativa sobre o circuito "Quem foi o primeiro?", com lista de componentes, imagem e link de referência. |
| `wikipedia-etefmc.html` | Página no estilo de artigo da Wikipedia sobre a ETE FMC, construída com HTML puro.                                 |

### Exercícios em Canvas

| Pasta                         | Descrição                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| `canvas/parte-1/`             | Animação com quadrados, retas e círculos com posição, velocidade e cor aleatórias. |
| `canvas/parte-2/`             | Dois quadrados animados, com botão de pausa/retomar e controle de velocidade.      |
| `canvas/jogo-cobrinha/`       | Jogo clássico da cobrinha, com pontuação e reinício.                               |
| `canvas/chuva-particulas/`    | Efeito visual de partículas seguindo o cursor do mouse.                            |
| `canvas/arena-gravitacional/` | Jogo de arena com gravidade, bombas e modos para 1 ou 2 jogadores.                 |

---

## 🌐 BackEnd

| Módulo                | Exercício           | Porta | Descrição                                                                  |
| --------------------- | ------------------- | :---: | -------------------------------------------------------------------------- |
| `1-introducao-nodejs` | `hello-world`       | 3001  | Servidor HTTP mais básico possível, sem dependências.                      |
| `1-introducao-nodejs` | `html-server`       | 3002  | Servidor que lê e entrega uma página HTML completa (o Jogo Canvas).        |
| `2-endpoints`         | `http-status`       | 3003  | Demonstra códigos HTTP de cada categoria (1xx a 5xx) e um 404 customizado. |
| `2-endpoints`         | `cardapio`          | 3004  | Rotas fixas para o cardápio de cada dia da semana.                         |
| `2-endpoints`         | `autenticacao`      | 3005  | Diferença prática entre `401 Unauthorized` e `403 Forbidden`.              |
| `2-endpoints`         | `mini-blog`         | 3006  | Mini blog com menu, posts e imagens servidos como arquivos estáticos.      |
| `3-requisicoes`       | `query-basico`      | 3007  | Leitura de nome, idade e e-mail via query string.                          |
| `3-requisicoes`       | `cor-pagina`        | 3008  | Muda a cor de fundo da página conforme o parâmetro `?cor=`.                |
| `3-requisicoes`       | `jogo-guess`        | 3009  | Jogo de adivinhação de número entre servidor e cliente.                    |
| `4-framework-express` | `simulacao-login`   | 3010  | Simulação de login/logout com Express, recebendo dados via JSON.           |
| `4-framework-express` | `simulacao-estoque` | 3011  | CRUD simples de estoque (POST cadastra, GET consulta por ID).              |

> Os módulos `1-introducao-nodejs`, `2-endpoints` e `3-requisicoes` usam **apenas módulos nativos** do Node.js (`http`, `fs`, `url`). Só o módulo `4-framework-express` depende do pacote **Express**.

---

## ▶️ Como executar

### FrontEnd

Basta abrir o arquivo `.html` desejado diretamente no navegador (não é necessário servidor).

### BackEnd — módulos 1, 2 e 3 (Node.js puro)

Não têm dependências externas, então basta rodar diretamente:

```bash
cd BackEnd/1-introducao-nodejs/hello-world
node app.js
```

> ⚠️ Vários servidores usam caminhos relativos com `fs.readFile()` (ex: `'index.html'`). Por isso, **sempre rode o comando de dentro da pasta do próprio exercício**, e não da raiz do repositório.

### BackEnd — módulo 4 (Express)

Este módulo tem uma dependência externa (`express`), então é necessário instalar antes de rodar:

```bash
cd BackEnd/4-framework-express
npm install
cd simulacao-estoque
node app.js
```

Para testar as rotas `POST`, use um cliente HTTP como **Postman**, **Insomnia** ou a extensão **Thunder Client**, enviando um corpo JSON. Exemplo para `simulacao-estoque`:

```json
{
    "id": 12,
    "nome": "Pão de sal",
    "preco": 0.5,
    "quantidade": 55
}
```

---

## 📌 Competências desenvolvidas

- 🌐 Fundamentos de servidores HTTP e do módulo nativo `http` do Node.js
- 🚦 Códigos de status HTTP e o significado de cada categoria (1xx–5xx)
- 🔗 Rotas, query strings e leitura de corpo de requisição (JSON)
- ⚙️ Framework **Express**: middlewares, `req`/`res`, rotas `GET`/`POST`
- 🎨 Manipulação da API **Canvas** (formas, animação, detecção de colisão, teclado)
- 🗃️ Leitura e escrita de arquivos com o módulo `fs`
- 🐛 Leitura crítica de código: identificação de bugs e limitações de design

---

## 👤 Autor

Projeto acadêmico desenvolvido por **Iury Gonçalves de Souza**, no curso Técnico em Desenvolvimento de Sistemas da **ETE FMC**.

<p>
  <a href="https://github.com/iury-igd1">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>
