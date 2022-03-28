var express = require('express');
var controllers = require ('.././Controllers');
var router = express.Router();

router.get('/',controllers.UserController.getIndex);
router.get('/data', controllers.UserController.getPrueba);
router.get('/vistaprueba2', controllers.UserController.getPrueba2);
router.get('/nuevorequisito', controllers.UserController.getNuevorequisito);
router.post('/nuevorequisito', controllers.UserController.postNuevorequisito);
router.get('/probando', controllers.UserController.probando);
router.get('/Vistageneral', controllers.UserController.vistageneral);





module.exports = router;