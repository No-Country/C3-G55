const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {validationField} = require('../middleware/fielValidation')
const {newWorker, allWorker, loginWorker, allDates } = require('../controllers/workerController')
const {validateJwt} = require('../middleware/tokenValidation')


/* ruta es /api/worker*/

router.post('/newWorker', newWorker)

router.get('/allWorkers', allWorker)

router.post(
    '/login',
   loginWorker
)

router.get('/allDate', validateJwt, allDates)

module.exports = router;