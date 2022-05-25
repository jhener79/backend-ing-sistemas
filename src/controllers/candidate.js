const { response } = require('express');
const config = require('../Config/db');

// obtener candidato por id
const getCandidateById = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;

    //Enviar el id del candidato como parametro al query
    const query = getAllCompanies(id)

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Datos del candidato obtenidos correctamente',
            data: results
        });

    })

    // cierre de conexion a base de datos
    connection.end();
}


//put
const ActualizarCandidateById = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Actualizacion del candidato obtenidos',
            data: results
        })

    });

}

//get
const getDocumentosCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;

    //Enviar el id del candidato como parametro al query
    const query = getAllCompanies(id)

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Documentos del candidato obtenidos',
            data: results
        })

    });

}

//post
const crearDocumentoCandidato = async(req, res = response) => {

        const connection = mysql.createConnection(config);

        connection.connect(function(error) {
            if (error) throw error;
        });

        //obtiene el id del candidato
        const id = req.params.id;
        const body = req.body;

        const query = actualizarCandidato(id, body);


        //se ejecuta el query 
        connection.query(query, (error, results) => {
            if (error) throw error;

            //respuesta del query
            res.json({
                ok: true,
                message: 'Documento del candidato creado',
                data: results
            })

        });

    }
    //post
const crearEducacionCandidato = async(req, res = response) => {

        const connection = mysql.createConnection(config);

        connection.connect(function(error) {
            if (error) throw error;
        });

        //obtiene el id del candidato
        const id = req.params.id;
        const body = req.body;

        const query = actualizarCandidato(id, body);


        //se ejecuta el query 
        connection.query(query, (error, results) => {
            if (error) throw error;

            //respuesta del query
            res.json({
                ok: true,
                message: 'Educacion del candidato creada',
                data: results
            })

        });

    }
    //put
const actualizarPosicionCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Posicion del candidato obtenida',
            data: results
        })

    });

}

//post
const guardarRespuestaCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Respuesta del candidato guaradada',
            data: results
        })

    });

}

//get
const getCuestionariosCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;

    //Enviar el id del candidato como parametro al query
    const query = getAllCompanies(id)

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Cuestionarios del candidato obtenidos correctamente',
            data: results
        });

    })
}

//put
const actualizarTarjetaPuntuacionCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Tarjeta de puntuacion actualizada',
            data: results
        })

    });

}

//put
const moverCandidatoEtapa = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Etapa del candidato actualizada',
            data: results
        })

    });

}

//get
const getCandidatosPorPosicion = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;

    //Enviar el id del candidato como parametro al query
    const query = getAllCompanies(id)

    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Posicion por candidatos obtenidos correctamente',
            data: results
        });

    })
}

//post
const crearCandidato = async(req, res = response) => {

    const connection = mysql.createConnection(config);

    connection.connect(function(error) {
        if (error) throw error;
    });

    //obtiene el id del candidato
    const id = req.params.id;
    const body = req.body;

    const query = actualizarCandidato(id, body);


    //se ejecuta el query 
    connection.query(query, (error, results) => {
        if (error) throw error;

        //respuesta del query
        res.json({
            ok: true,
            message: 'Actualizada la etapa del candidato',
            data: results
        })

    });

}

module.exports = {
    getCandidateById,
    ActualizarCandidateById,
    getDocumentosCandidato,
    crearDocumentoCandidato,
    crearEducacionCandidato,
    actualizarPosicionCandidato,
    guardarRespuestaCandidato,
    getCuestionariosCandidato,
    actualizarTarjetaPuntuacionCandidato,
    moverCandidatoEtapa,
    getCandidatosPorPosicion,
    crearCandidato
}