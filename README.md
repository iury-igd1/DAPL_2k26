<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1E1035,100:7C3AED&height=180&section=header&text=DAPL%20%7C%202026&fontSize=44&fontColor=FFFFFF&fontAlignY=36" alt="DAPL — Desenvolvimento de Aplicativos — 2026" width="100%">

<h3>Exercícios de Desenvolvimento de Aplicativos</h3>

<p>
Repositório desenvolvido durante o curso Técnico em Desenvolvimento de Sistemas da <strong>ETE FMC</strong>.
</p>

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>

<p>
<img src="https://img.shields.io/badge/Atividades-18-7C3AED?style=flat-square" alt="18 atividades">
<img src="https://img.shields.io/badge/Front--end-7-2563EB?style=flat-square" alt="7 atividades de front-end">
<img src="https://img.shields.io/badge/Back--end-11-16A34A?style=flat-square" alt="11 atividades de back-end">
<img src="https://img.shields.io/badge/Ano-2026-475569?style=flat-square" alt="Ano 2026">
</p>

<p>
<a href="#sobre">📘 Sobre</a> &nbsp;·&nbsp;
<a href="#atividades">📚 Atividades</a> &nbsp;·&nbsp;
<a href="#estrutura">📂 Estrutura</a> &nbsp;·&nbsp;
<a href="#execucao">▶️ Execução</a> &nbsp;·&nbsp;
<a href="#autor">👤 Autor</a>
</p>

</div>

---

<a id="sobre"></a>

## 📘 Sobre o repositório

**DAPL_2k26** reúne os projetos, exemplos e exercícios desenvolvidos na disciplina de **Desenvolvimento de Aplicativos**, durante o curso Técnico em Desenvolvimento de Sistemas da **ETE FMC**, em 2026.

### 🎓 Contexto acadêmico

| Informação      | Descrição                                                           |
| :-------------- | :------------------------------------------------------------------ |
| **Instituição** | Escola Técnica de Eletrônica "Francisco Moreira da Costa" (ETE FMC) |
| **Curso**       | Técnico em Desenvolvimento de Sistemas                              |
| **Disciplina**  | Desenvolvimento de Aplicativos (2026)                               |
| **Professor**   | Daniel Albino Mosca Rodrigues                                       |
| **Aluno**       | Iury Gonçalves de Souza                                             |

As atividades abordam a construção de páginas, animações e jogos no navegador, além de servidores HTTP e aplicações com Express.

| Etapa         | Abordagem                                                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------- |
| **Front-end** | HTML e CSS para estruturar e apresentar as páginas, com JavaScript e Canvas para animações, interação e jogos.                   |
| **Back-end**  | Node.js para criar servidores, interpretar requisições e enviar respostas, com Express para trabalhar com rotas e dados em JSON. |

Cada atividade pode ser explorada individualmente. Alguns exemplos do back-end reaproveitam o jogo Canvas desenvolvido no front-end para demonstrar o envio de páginas pelo servidor.

---

<a id="atividades"></a>

## 📚 Conteúdo das atividades

### 🌐 Front-end

| Atividade                   | Conteúdo principal                                      |                      Código                      |
| :-------------------------- | :------------------------------------------------------ | :----------------------------------------------: |
| **Página de circuito**      | Estrutura HTML, listas, imagens e links                 |    [Abrir](01-FrontEnd/pagina-circuito.html)     |
| **Página estilo Wikipedia** | Organização de conteúdo e tabelas sobre a ETE FMC       |    [Abrir](01-FrontEnd/wikipedia-etefmc.html)    |
| **Canvas — parte 1**        | Formas geométricas, movimento e colisões nas bordas     |       [Abrir](01-FrontEnd/canvas/parte-1/)       |
| **Canvas — parte 2**        | Controle de velocidade e pausa da animação              |       [Abrir](01-FrontEnd/canvas/parte-2/)       |
| **Chuva de partículas**     | Eventos do mouse, gravidade e transparência             |  [Abrir](01-FrontEnd/canvas/chuva-particulas/)   |
| **Jogo da cobrinha**        | Teclado, movimentação, pontuação e colisões             |    [Abrir](01-FrontEnd/canvas/jogo-cobrinha/)    |
| **Arena Gravitacional**     | Modos para um ou dois jogadores, obstáculos e gravidade | [Abrir](01-FrontEnd/canvas/arena-gravitacional/) |

### ⚙️ Back-end

| Etapa                     | Atividade                                                                  | Conteúdo principal                                         | Porta  |
| :------------------------ | :------------------------------------------------------------------------- | :--------------------------------------------------------- | :----: |
| **Introdução ao Node.js** | [Hello World](02-BackEnd/01-introducao-nodejs/hello-world/)                | Servidor HTTP com resposta em texto                        | `3001` |
| **Introdução ao Node.js** | [Servidor HTML](02-BackEnd/01-introducao-nodejs/html-server/)              | Leitura e envio da página do jogo Canvas                   | `3002` |
| **Endpoints**             | [Autenticação](02-BackEnd/02-endpoints/autenticacao/)                      | Demonstração de autenticação e permissão com códigos HTTP  | `3003` |
| **Endpoints**             | [Cardápio](02-BackEnd/02-endpoints/cardapio/)                              | Rotas para os dias da semana                               | `3004` |
| **Endpoints**             | [Status HTTP](02-BackEnd/02-endpoints/http-status/)                        | Categorias de respostas, redirecionamento e página de erro | `3005` |
| **Endpoints**             | [Mini-blog](02-BackEnd/02-endpoints/mini-blog/)                            | Envio de páginas HTML e imagens                            | `3006` |
| **Requisições**           | [Query string básica](02-BackEnd/03-requisicoes/basico-query/)             | Leitura de nome, idade e e-mail pela URL                   | `3007` |
| **Requisições**           | [Cor da página](02-BackEnd/03-requisicoes/cor-pagina/)                     | Seleção de uma página pelo parâmetro de cor                | `3008` |
| **Requisições**           | [Jogo de adivinhação](02-BackEnd/03-requisicoes/jogo-guess/)               | Palpites, dicas e controle de tentativas                   | `3009` |
| **Express**               | [Simulação de estoque](02-BackEnd/04-framework-express/simulacao-estoque/) | Cadastro de produtos com POST e consulta com GET           | `3010` |
| **Express**               | [Simulação de login](02-BackEnd/04-framework-express/simulacao-login/)     | Recebimento de JSON, acesso à home e cálculo de idade      | `3011` |

### 📊 O repositório em números

| Páginas introdutórias | Atividades Canvas | Servidores Node.js nativos | Servidores Express |
| :-------------------: | :---------------: | :------------------------: | :----------------: |
|         **2**         |       **5**       |           **9**            |       **2**        |

São **18 atividades independentes**: sete de front-end e onze de back-end. Páginas auxiliares, imagens e arquivos JSON fazem parte dessas atividades e não são contados como projetos separados.

---

<a id="estrutura"></a>

## 📂 Organização dos arquivos

Os conteúdos estão separados em duas áreas, com subpastas para cada atividade:

```text
DAPL_2k26/
├── 01-FrontEnd/
│   ├── pagina-circuito.html
│   ├── wikipedia-etefmc.html
│   ├── img/
│   └── canvas/
│       ├── parte-1/
│       ├── parte-2/
│       ├── chuva-particulas/
│       ├── jogo-cobrinha/
│       └── arena-gravitacional/
│
├── 02-BackEnd/
│   ├── 01-introducao-nodejs/
│   │   ├── hello-world/
│   │   └── html-server/
│   ├── 02-endpoints/
│   │   ├── autenticacao/
│   │   ├── cardapio/
│   │   ├── http-status/
│   │   └── mini-blog/
│   ├── 03-requisicoes/
│   │   ├── basico-query/
│   │   ├── cor-pagina/
│   │   └── jogo-guess/
│   └── 04-framework-express/
│       ├── package.json
│       ├── simulacao-estoque/
│       └── simulacao-login/
│
├── .gitignore
├── package.json
└── README.md
```

O CSS está incluído nas próprias páginas HTML. Algumas páginas servidas pelo back-end também contêm o JavaScript do jogo dentro do HTML.

---

<a id="execucao"></a>

## ▶️ Como executar

Os exemplos de terminal utilizam **PowerShell no Windows**. Cada atividade possui sua própria forma de execução.

### 🧰 Prepare o ambiente

| Atividade                               | Ferramenta necessária                           |
| :-------------------------------------- | :---------------------------------------------- |
| Páginas, jogos e animações do front-end | Navegador atualizado                            |
| Servidores do back-end                  | Node.js com npm                                 |
| Requisições POST com JSON               | Postman ou outra ferramenta de requisições HTTP |
| Edição e visualização local             | Editor de código. Live Server é opcional        |

Utilize uma versão LTS do Node.js com suporte. O módulo Express utiliza a versão 5, cujo requisito mínimo é Node.js 18. Consulte a [documentação de instalação do Express](https://expressjs.com/en/starter/installing/).

### 📥 Obtenha o repositório

```powershell
git clone https://github.com/iury-igd1/DAPL_2k26.git
cd DAPL_2k26
```

### 💻 Escolha uma atividade

Os blocos abaixo consideram um terminal inicialmente aberto na **raiz do repositório**. Para experimentar outra atividade, retorne à raiz ou abra um novo terminal nessa pasta.

<details open>
<summary><strong>🌐 Front-end — abrir no navegador</strong></summary>

<br>

Abra a página HTML da atividade no navegador ou utilize a extensão **Live Server** do VS Code.

Exemplo para a Arena Gravitacional:

```text
01-FrontEnd/canvas/arena-gravitacional/index.html
```

Mantenha o arquivo `canvas.js` na mesma pasta do HTML, conforme a estrutura do repositório.

| Atividade               | Interação                                                               |
| :---------------------- | :---------------------------------------------------------------------- |
| **Canvas — parte 1**    | A animação começa ao abrir a página                                     |
| **Canvas — parte 2**    | Botão para pausar ou retomar e controle deslizante de velocidade        |
| **Chuva de partículas** | Mova o mouse sobre a página                                             |
| **Jogo da cobrinha**    | Utilize as setas do teclado                                             |
| **Arena Gravitacional** | Escolha o modo. Jogador 1 utiliza W/S e A/D, jogador 2 utiliza as setas |

Essas atividades não precisam de instalação de dependências com npm.

</details>

<br>

<details>
<summary><strong>🟢 Node.js — executar os servidores nativos</strong></summary>

<br>

As atividades das pastas `01-introducao-nodejs`, `02-endpoints` e `03-requisicoes` utilizam módulos nativos do Node.js.

Exemplo com o mini-blog:

```powershell
cd ".\02-BackEnd\02-endpoints\mini-blog"
node app.js
```

Com o servidor em execução, abra:

```text
http://localhost:3006/
```

Para executar outra atividade, entre na pasta correspondente, execute `node app.js` e utilize a porta indicada na tabela de back-end.

Não é necessário instalar Express para esses nove servidores.

> [!NOTE]
> Inicie o servidor de dentro da pasta da atividade. Alguns exemplos utilizam caminhos relativos para encontrar os arquivos HTML e as imagens.

</details>

<br>

<details>
<summary><strong>🚀 Express — executar as simulações</strong></summary>

<br>

**1. Instale as dependências do módulo**

Partindo da raiz do repositório:

```powershell
cd ".\02-BackEnd\04-framework-express"
npm install
```

As duas simulações utilizam as dependências instaladas nessa pasta.

**2. Inicie a simulação de estoque**

Continuando no mesmo terminal:

```powershell
cd ".\simulacao-estoque"
node app.js
```

O servidor utiliza a porta **3010**. Para cadastrar e consultar produtos, utilize a rota `/estoque`.

**3. Para executar a simulação de login**

Em outro terminal, inicialmente na raiz do repositório:

```powershell
cd ".\02-BackEnd\04-framework-express\simulacao-login"
node app.js
```

O servidor utiliza a porta **3011**. A página inicial é liberada após o envio de um login válido para `/login`.

O repositório já possui os arquivos `package.json`. A instalação é feita com `npm install`, sem precisar criar um novo projeto.

</details>

<br>

Para encerrar um servidor, pressione **Ctrl+C** no terminal em que ele está rodando.

### 📡 Exemplos de requisições

Com o servidor correspondente em execução:

| Atividade                     | Método | Endereço                                                                   |
| :---------------------------- | :----: | :------------------------------------------------------------------------- |
| Cardápio de segunda-feira     |  GET   | `http://localhost:3004/seg`                                                |
| Consulta de nome e idade      |  GET   | `http://localhost:3007/hello?nome=Iury&idade=18&email=admin@etefmc.com.br` |
| Página com fundo azul         |  GET   | `http://localhost:3008/cores?cor=blue`                                     |
| Início do jogo de adivinhação |  GET   | `http://localhost:3009/`                                                   |
| Envio de um palpite           |  GET   | `http://localhost:3009/guess?palpite=50`                                   |
| Cadastro de produto           |  POST  | `http://localhost:3010/estoque`                                            |
| Consulta de produto           |  GET   | `http://localhost:3010/estoque?id=12`                                      |
| Envio dos dados de login      |  POST  | `http://localhost:3011/login`                                              |
| Cálculo da idade              |  POST  | `http://localhost:3011/idade`                                              |

### 📦 Enviando JSON no Postman

Para cadastrar um produto:

1. Selecione o método **POST**.
2. Informe `http://localhost:3010/estoque`.
3. Em **Body**, selecione **raw** e o formato **JSON**.
4. Envie o seguinte conteúdo:

```json
{
  "id": 12,
  "nome": "Pão de sal",
  "preco": 0.5,
  "quantidade": 55
}
```

Depois, consulte o produto com:

```text
http://localhost:3010/estoque?id=12
```

Os arquivos [produto.json](02-BackEnd/04-framework-express/simulacao-estoque/produto.json) e [dados.json](02-BackEnd/04-framework-express/simulacao-login/dados.json) apresentam exemplos dos dados utilizados nas simulações.

> [!NOTE]
> O estoque, o estado do login e a partida de adivinhação são mantidos em memória. Reiniciar os servidores descarta esse estado. Nas implementações didáticas atuais, ele é compartilhado entre os clientes que acessam cada servidor.

---

## 🧩 Conceitos praticados

| Área                 | Aplicação nos exercícios                                               |
| :------------------- | :--------------------------------------------------------------------- |
| 🌐 **HTML**          | Estrutura das páginas, títulos, listas, tabelas, imagens e formulários |
| 🎨 **CSS**           | Cores, fontes, espaçamento e apresentação dos elementos                |
| ⚙️ **JavaScript**    | Funções, objetos, arrays e manipulação da página                       |
| 🖼️ **Canvas**        | Desenho de formas, animação e transparência                            |
| 🎮 **Interação**     | Eventos de teclado e mouse, controles e colisões                       |
| 🟢 **Node.js**       | Criação de servidores e leitura de arquivos                            |
| 📡 **HTTP**          | Rotas, códigos de status, cabeçalhos e redirecionamento                |
| 🔎 **Requisições**   | Query strings, formulários e envio de dados em JSON                    |
| 🚀 **Express**       | Rotas GET e POST, leitura do corpo da requisição e envio de respostas  |
| 🌿 **Versionamento** | Organização do código com Git e GitHub                                 |

As soluções mantêm uma abordagem didática, acompanhando os conteúdos apresentados em aula. Os enunciados e os comentários podem ser consultados diretamente nos arquivos de código.

---

<a id="autor"></a>

## 👤 Autor

**Iury Gonçalves de Souza**  
Curso Técnico em Desenvolvimento de Sistemas · **ETE FMC** · **2026**

<p>
<a href="https://github.com/iury-igd1">
<img src="https://img.shields.io/badge/GitHub-iury--igd1-181717?style=for-the-badge&logo=github&logoColor=white" alt="Perfil de Iury no GitHub">
</a>
</p>

<div align="center">

<sub>Desenvolvimento de Aplicativos · Repositório acadêmico · ETE FMC</sub>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1E1035,100:7C3AED&height=90&section=footer" alt="" width="100%">
