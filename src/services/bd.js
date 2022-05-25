const mysql = require('mysql');
const config = require('../Config/db');

const connect = async() => {

  const connection = mysql.createConnection(config);
  
  connection.connect(function(error) {
    if (error) {
      throw error;
    }else {
      console.log("BD Connectada!");
    }
  });

  return connection;

}

const getAllCompanies = (userId)=>{

  const query = `SELECT e.Nombre FROM empresa_asignada_usuario as eu 
  INNER JOIN empresas as e 
  ON eu.idEmpresa = e.idEmpresa 
  where eu.idUsuario = ${userId}`

  return query;

}

const getPipelinesbyCompany = ( companyID, idPipeline ) => {
   
  const query = '';

  return query

}

/** 3.	Endpoints Candidatos */

/*	Recuperar candidato por id para el puesto dado */
const getCandidato = (idCandidato) => {

  const query = `SELECT * FROM Solicitud where IdSolicitud = ${idCandidato}`;

  return query;

}

/*Actualiza a un candidato en un puesto*/
const postCandidato = (idCandidato, nombreCompleto, eMail, telefono, resumenExperiencia, cvUrl, cartaPresentacion) => {

  const query = `UPDATE Solicitud SET NombreCompleto=${nombreCompleto}, Email=${eMail}, Telefono=${telefono}, ResumenExperiencia =${resumenExperiencia}, CV_Url=${cvUrl}, CartaPresentacion=${cartaPresentacion} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}

/*	•	Recuperar documentos de candidatos por identificación para un puesto determinado */
const getDocumentosCanditato = (idCandidato) => {

  const query = `SELECT urlDocumento from Documento WHERE IdSolicitud = ${idCandidato}`;

  return query;

}

/*Agrega un nuevo documento para el candidato*/
const putDocumentoCandidato = ( idDocumento, urlDocumento, idCandidato, posicion ) => {

  const query = `INSERT INTO Documento values ((${idDocumento},(${urlDocumento},(${idCandidato},(${posicion});`;

  return query;

}
/*Agrega una entrada de educación a un candidato*/
const putEducacionCandidato = ( idCandidato, Escuela, gradoAlcanzado, campoEstudio, fechaInicio, fechaFin ) => {

  const query = `INSERT INTO Educacion values (${idCandidato}, ${Escuela}, ${gradoAlcanzado}, ${campoEstudio}, ${fechaInicio}, ${fechaFin});`;

  return query;

}
/*Mueve a un candidato de un puesto a otro*/
const postCambiarPuestoCandidato = ( idCandidato, idPosicion ) => {

  const query = `UPDATE Posicion SET IdPosicion=${idPosicion} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/*Guardar las respuestas de los candidatos a un cuestionario*/
const putRespuestasCandidato = ( idRespuesta, idPregunta, respuesta, idSolicitud ) => {

  const query = `INSERT INTO Respuesta values (${idRespuesta},${idPregunta},${respuesta},${idSolicitud});`;

  return query;

}
/*	•	 Recuperar cuestionarios de candidato */
const getCuestionariosCanditato = (idCandidato) => {

  const query = `SELECT P.IdCuestionario, P.Pregunta, R.Respuesta from Respuesta R INNER JOIN Pregunta P ON R.IdPregunta=P.IdPregunta WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/*Mover candidato a la etapa especificada*/
const postCambiarEtapaCandidato = ( idCandidato, idEtapa ) => {

  const query = `UPDATE Posicion SET IdEtapa=${idEtapa} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/*Añadir un nuevo candidato a un puesto*/
const putAgregarCandidato = ( idCandidato, idPosicion, idEtapa, nombreCompleto, eMail, telefono, resumenExperiencia, cvUrl, cartaPresentacion ) => {

  const query = `INSERT INTO Solicitud VALUES(IdSolicitud=${idCandidato}, IdPosicion=${idPosicion}, IdEtapa=${idEtapa}, NombreCompleto=${nombreCompleto}, Email=${eMail}, Telefono=${telefono}, ResumenExperiencia=${resumenExperiencia}, Cv_Url=${cvUrl}, CartaPresentacion=${cartaPresentacion});`;

  return query;

}

module.exports = {
  connect,
  getAllCompanies,
  getPipelinesbyCompany,
  getCandidato,
  putDocumentoCandidato,
  putEducacionCandidato,
  postCandidato,
  getDocumentosCanditato,
  postCambiarPuestoCandidato,
  putRespuestasCandidato,
  getCuestionariosCanditato,
  postCambiarEtapaCandidato,
  putAgregarCandidato
}