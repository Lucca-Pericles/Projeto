const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Aqui você pode processar os dados do formulário como desejar
    console.log(`Nome: ${name}, E-mail: ${email}, Mensagem: ${message}`);

    // Exemplo de resposta simples
    res.send('Formulário recebido com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});