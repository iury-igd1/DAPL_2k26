/*
Exercício:
    
    Crie um servidor que controla o estoque de uma padaria. O servidor deve conter um endpoint do tipo POST no 
    qual novos produtos podem ser cadastrados no estoque, contendo:

    {
        “id” = 12,
        “nome” = “Pão de sal”,
        “preço” = 0.50,
        “quantidade” = 55
    }

    O servidor também deve possuir um endpoint do tipo GET que lê o id de um produto via query URL e exibe toda 
    sua estrutura como resposta html. Utilize o padrão JSON para trafegar os dados e o software POSTMAN para testes.
*/

const express = require('express')
const app = express()

app.use(express.json())

var estoque = [] // Todo o conteúdo é perdido quando o servidor é reiniciado

app.post('/estoque', (req, res) => {
    const produto = {
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
    }

    estoque.push(produto)
    res.status(201).json({
        msg: 'Produto cadastrado!',
        produtoAdicionado: produto,
        totalItensEstoque: estoque.length,
    })
})
app.get('/estoque', (req, res) => {
    const idBusca = parseInt(req.query.id)
    const produtoEncontrado = estoque.find((produto) => produto.id === idBusca)

    if (produtoEncontrado) {
        res.send(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Detalhes do Produto</title>
            </head>
            <body>
                <h1>${produtoEncontrado.nome}</h1>
                <ul>
                    <li><strong>ID:</strong> ${produtoEncontrado.id}</li>
                    <li><strong>Preço:</strong> R$ ${produtoEncontrado.preco.toFixed(2)}</li>
                    <li><strong>Quantidade:</strong> ${produtoEncontrado.quantidade}</li>
                </ul>
            </body>
            </html>
        `)
    } else {
        res.status(404).send('<h1>Erro: Produto não encontrado no estoque!</h1>')
    }
})

const port = 3010
app.listen(port, () => console.log(`Servidor da Padaria rodando em http://localhost:${port}`))
