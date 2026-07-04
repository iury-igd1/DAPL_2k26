/*
Exercício:

    Monte um exemplo de JSON para trafegar os dados de login de um usuário, junto com a opção de tornar o login 
    persistente (opção lembrar de mim).
    Após isso, crie um servidor com Express que possua as rota de home, de login e de idade. Na rota de login, 
    simplesmente responda os dados enviados na requisição para usuario e senha. (envie o que receber de volta 
    na response). Na rota de idade, o servidor deve receber com método POST um ano no formato AAAA e informar a 
    idade da pessoa nascida neste ano.

    Tudo deve ser inclído em um servidor completo, com um endpoint para login e um endpoint que retorna uma 
    página “home” html. Importante: a página html só pode ser retornada se o login for bem sucedido.    
*/

const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

const usuario_correto = 'iurynho'
const senha_correta = 'iury1234'
var logado = false

app.get('/', (req, res) => {
    if (logado == true) {
        res.sendFile(path.join(__dirname, 'home.html'))
    } else {
        res.send('<h1>Acesso Negado: Faça login com sucesso via POST /login primeiro.</h1>')
    }
})
app.post('/login', (req, res) => {
    if (req.body.usuario == usuario_correto && req.body.senha == senha_correta) {
        logado = true
        res.json({
            msg: 'Login correto! Acesso liberado para a Home.',
            dados: req.body,
        })
    } else {
        logado = false
        res.json({
            msg: 'Usuário ou senha incorretos.',
        })
    }
})
app.post('/idade', (req, res) => {
    res.json({
        msg: 'Ano de nascimento recebido.',
        idade: 2026 - req.body.ano_nascimento,
    })
})

/*
É possível considerar a transmissão a senha via JSON "segura", já que faz isso de forma privada? Explique.
    Não, a transmissão não é segura apenas por utilizar JSON. Embora isso evite que a senha apareça na URL, os 
    dados não são criptografados.
*/

const port = 3010
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`))
