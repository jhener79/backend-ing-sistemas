const { response } = require('express');

const getPositionById = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Get posicion por Id',
    });
}

module.exports = {
    getPositionById
}