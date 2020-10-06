const express = require('express');
const routes = express.Router();
const CultoController = require('../controllers/CultoController')


// Rotas referente aos cultos...
routes.get('/cultos',CultoController.lista);
routes.get('/cultos/ref/:id',CultoController.listaRef)
routes.post('/cultos',CultoController.novo);
routes.put('/cultos/:id',CultoController.atualiza);
routes.delete('/cultos/:id',CultoController.deleta);

module.exports = routes;