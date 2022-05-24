const { response } = require('express');

const getCandidateById = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Get candidato por Id',
    });
}

module.exports = {
    getCandidateById
}