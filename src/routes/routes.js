// carganos el modulo express
const express = require('express');
// carganos el modulo de rutas
const router = express.Router();

// colocamos las rutas para cada link
// index
router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Calidad Cat Groupe',
        name: 'Pagina de inicio'
    });
});
// Auditoria Calidad
router.get('/auditQuality', (req, res) => {
    res.render('auditQuality.html', {
        title: 'Auditoria Calidad',
        name: 'Auditoria Calidad'
    });
});
// Auditoria Media
router.get('/auditHalf', (req, res) => {
    res.render('auditHalf.html', {
        title: 'Auditoria Medio',
        name: 'Auditoria Medio'
    });
});
// aboutUs
router.get('/aboutUs', (req, res) => {
    res.render('aboutUs.html', {
        title: 'Quienes somos',
        name: 'Quienes somos'
    });
});
// indicadores
router.get('/indicadores', (req, res) => {
    res.render('indicadores.html', {
        title: 'Indicadores',
        name: 'Indicadores'
    });
});
// Buscar choferes
router.get('/seekDriver', (req, res) => {
    res.render('seekDriver.html', {
        title: 'Buscar Chofer',
        name: 'Buscar Chofer'
    });
});
// Buscar Fleteros
router.get('/seekOwner', (req, res) => {
    res.render('seekOwner.html', {
        title: 'Buscar Fletero',
        name: 'Buscar Fletero'
    });
});
// Buscar Unidades
router.get('/seekUnit', (req, res) => {
    res.render('seekUnit.html', {
        title: 'Buscar Unidad',
        name: 'Buscar Unidad'
    });
});

// exportamos el modulo
module.exports = router;