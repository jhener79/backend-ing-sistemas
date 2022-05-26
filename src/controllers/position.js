const mysql = require('mysql');
const { response } = require('express');
const config = require('../Config/db');
const { getPosicionPorID, putPosicion, getPosicionEstado, putEstadoPosicion, postPosicion } = require('../services/bd');

const getPositionById = async(req, res = response) =>{

    const connection = mysql.createConnection(config);

    connection.connect(function (error) {
        if (error) {
            throw error
        }else {
            console.log("BD Connectada!");
          }
    });

    //obtiene el id del candidato
    const id = req.params.id;

    //Enviar el id del candidato como parametro al query
    const query = getPosicionPorID(id)

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Datos de la posicion',
            data: results
        });

    })

    // cierre de conexion a base de datos
    connection.end();
}

const actualizarPuesto = async(req, res = response) =>{

    const connection = mysql.createConnection(config);

    connection.connect(function (error) {
        if (error) throw error;
    });


    const id = req.params.id
    const body = req.body;

    const query = putPosicion(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Posicion Actualizada',
        })

    });

    // cierre de conexion a base de datos
    connection.end();
}

const actualizarEstadoPuesto = async(req, res = response) =>{

    const connection = mysql.createConnection(config);

    connection.connect(function (error) {
        if (error) throw error;
    });


    const id = req.params.id;
    const body = req.body;

    const query = putEstadoPosicion(id, body.Estado);

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Estado Posicion Actualizada',
        })

    });

    // cierre de conexion a base de datos
    connection.end();
}

const getTodosPuestosPorEstado = async(req, res = response) =>{

    const connection = mysql.createConnection(config);

    connection.connect(function (error) {
        if (error) throw error;
    });


    const id = req.params.id;
    const idEstado = req.params.idEstado

    const query = getPosicionEstado(id, idEstado);

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Posiciones por Estado',
            data: results
        })

    });

    // cierre de conexion a base de datos
    connection.end();
}

const crearPuesto = async(req, res = response) =>{

    const connection = mysql.createConnection(config);

    connection.connect(function (error) {
        if (error) throw error;
    });


    const body = req.body;

    const query = postPosicion(body);

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Posicion Creada',
        })

    });

    // cierre de conexion a base de datos
    connection.end();
}

module.exports = {
    getPositionById,
    actualizarPuesto,
    actualizarEstadoPuesto,
    getTodosPuestosPorEstado,
    crearPuesto
}