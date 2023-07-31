const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const { verificarJWT } = require('../utils/jwt');

const router = express.Router();

// Ruta para el registro de usuarios
router.post(
  '/register',
  [
    check('firstName', 'El nombre es requerido').not().isEmpty(),
    check('lastName', 'El apellido es requerido').not().isEmpty(),
    check('user', 'El usuario es requerido').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('email', 'El email no es válido').isEmail(),
    check('phone', 'El número de teléfono es requerido').not().isEmpty(),
    check('role', 'El rol es requerido').not().isEmpty(),
  ],
  userController.register
);

// Ruta para el inicio de sesión de usuarios
router.post(
  '/login',
  [
    check('user', 'El usuario es requerido').not().isEmpty(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
  ],
  userController.login
);
// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Ruta protegida que requiere autenticación
/*
router.get('/protected', verificarJWT, (req, res) => {
  res.json({ msg: 'Ruta protegida, tienes acceso' });
});
*/
module.exports = router;
