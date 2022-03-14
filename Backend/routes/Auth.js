const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {validationField} = require('../middleware/fielValidation')
const {validateJwt} = require('../middleware/tokenValidation')
const {newUser, login, token  } = require('../controllers/authController')


/* ruta es /api/auth */

router.post('/register',newUser)

router.post(
    '/login',
    [
        check('email', 'el Email es Obligatorio').isEmail(),
        check('password', 'el Password debe ser mayor a 6 caracteres').isLength({min:6}),
        validationField
    ],login
)

router.get('/renew',validateJwt, token)

module.exports = router;