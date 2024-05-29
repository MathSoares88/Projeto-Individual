const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/usuarioControlles.js');

const app = express();
app.use(bodyParser.json());

app.post('/api/autenticar', usuarioController.autenticar);
app.post('/api/cadastrar', usuarioController.cadastrar);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
