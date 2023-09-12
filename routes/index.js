var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros');
});

router.get('/catalogo', function(req, res, next) {
  res.render('catalogo-clientes');
});

router.get('/contactenos', function(req, res, next) {
  res.render('contactenos');
});

router.get('/servicios', function(req, res, next) {
  res.render('nuestros-servicios');
});

router.get('/footer', function(req, res, next) {
  res.render('footer');
});

router.get('/success', function(req, res, next) {
  res.render('success');
});

router.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  res.render('/success');
});

module.exports = router;
