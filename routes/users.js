var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { text: 'ESta pagina es la por default' });
});

router.get('/cool', function(req, res, next) {
  res.render('users', { text: 'Eres Genial' });
});


module.exports = router;
