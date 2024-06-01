
require("dotenv").config();

var express = require("express");
var router = express.Router();
var db = require('./src/database/config')
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);

router.post('/quiz/saveResult', function (req, res) {
    var userId = req.body.userId;
    var winningHouse = req.body.winningHouse;

    // Exemplo de query para salvar o resultado
    var query = `INSERT INTO resultados (userId, winningHouse) VALUES (${userId}, '${winningHouse}')`;

    db.executar(query).then(function (resultado) {
        res.json({ success: true, message: 'Resultado salvo com sucesso!' });
    }).catch(function (erro) {
        console.error('Erro ao salvar resultado:', erro);
        res.status(500).json({ success: false, message: 'Erro ao salvar resultado.' });
    });
});

// Salvar mensagem
router.post('/messages/save', function (req, res) {
    var userId = req.body.userId;
    var message = req.body.message;

    // Exemplo de query para salvar a mensagem
    var query = `INSERT INTO mensagens (userId, message) VALUES (${userId}, '${message}')`;

    db.executar(query).then(function (resultado) {
        res.json({ success: true, message: 'Mensagem salva com sucesso!' });
    }).catch(function (erro) {
        console.error('Erro ao salvar mensagem:', erro);
        res.status(500).json({ success: false, message: 'Erro ao salvar mensagem.' });
    });
});

module.exports = router;

var db = require('./src/database/config');
db.executar('select * from usuario limit 1');

app.listen(PORTA_APP, HOST_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
