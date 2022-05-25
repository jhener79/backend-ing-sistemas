const { response } = require('express');

const getPositionById = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Get posicion por Id',
    });
}

const actualizarPuesto = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Actualizar puesto por Id',
    });
}

const actualizarEstadoPuesto = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Actualizar estado del puesto por Id',
    });
}

const getTodosPuestosPorEstado = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Listado de todos los puestos',
    });
}

const crearPuesto = async(req, res = response) =>{

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Puesto creado',
    });
}

module.exports = {
    getPositionById,
    actualizarPuesto,
    actualizarEstadoPuesto,
    getTodosPuestosPorEstado,
    crearPuesto
}