var express = require('express');
var router = express.Router();

const usersControllers = require ("../controllers/usersControllers");

router.get("/", usersControllers.usuario);
router.get("/registro", usersControllers.registro);
router.get("/registrar", usersControllers.registrar);
router.get("/login", usersControllers.login);
router.get("/loguear", usersControllers.loguear);
router.get("/editar", usersControllers.editarUser);

module.exports = router;
