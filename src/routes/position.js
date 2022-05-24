const { Router } = require('express');
const { getPositionById }  = require('../controllers/position');

const router = Router();

router.get('/:id', getPositionById);

module.exports = router;