const { Router } = require('express')
const router = Router()

const { ciudades } = require('../controllers/cities.controllers.js')

router.get('/:ciudad', ciudades);

module.exports = router;