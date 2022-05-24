const { Router } = require('express');
const { getCandidateById }  = require('../controllers/candidate');

const router = Router();

router.get('/:id', getCandidateById);

module.exports = router;