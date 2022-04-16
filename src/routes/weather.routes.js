const { Router } = require('express')
const router = Router()

const { climasCoordenadas, climaPorCiudadId } = require('../controllers/weather.controllers.js')

router.get('/:ciudad/:id', climaPorCiudadId);
router.get('/', climasCoordenadas)

module.exports = router;