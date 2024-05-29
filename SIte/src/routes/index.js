var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
