const { response } = require('express');

const getCandidateById = async(req, res = response) =>{

    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    //Enviar el id del Usuario como parametro
    const query = getAllCompanies(1)

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Get compañias',
           data: results
       });

   })

   connection.end();
}

const ActualizarCandidateById = async(req, res = response) => {
    console.log(req);
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Evento actualizado',
    });

}

const getDocumentosCandidato = async(req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Documentos del candidato',
    });

}

const crearDocumentoCandidato = async(req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Documentos del candidato creado',
    });

}

const crearEducacionCandidato = async(req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Educacion del candidato creada',
    });

}

const actualizarPosicionCandidato = async(req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Posicion del candidato actualizada',
    });

}

const guardarRespuestaCandidato  = async(req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Respuesta guardada',
    });

}

const getCuestionariosCandidato  = async(req, res = response) => {

    const id = req.params.id;
    const idRespuesta = req.params.idRespuesta;

    res.json({
        ok: true,
        message: 'Cuestionarios del candidato',
    });

}

const actualizarTarjetaPuntuacionCandidato = async(req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Tarjeta de puntuacion actualizada',
    });

}

const moverCandidatoEtapa = async(req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Actualizada la etapa del candidato',
    });

}

const getCandidatosPorPosicion = async(req, res = response) => {

    const idCompany = req.params.idCompany;
    const idPosicion = req.params.idPosicion;

    res.json({
        ok: true,
        message: 'Actualizada la etapa del candidato',
    });

}

const crearCandidato  = async(req, res = response) => {

    res.json({
        ok: true,
        message: 'Actualizada la etapa del candidato',
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