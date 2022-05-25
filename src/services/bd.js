const mysql = require('mysql');
const config = require('../Config/db');

const connect = async () => {

  const connection = mysql.createConnection(config);

  connection.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("BD Connectada!");
    }
  });

  return connection;

}

const getAllCompanies = (userId) => {

  const query = `SELECT e.Nombre FROM empresa_asignada_usuario as eu 
  INNER JOIN empresas as e 
  ON eu.idEmpresa = e.idEmpresa 
  where eu.idUsuario = ${userId}`

  return query;

}

const getPipelinesbyCompany = (companyID, idPipeline) => {

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
const putCandidato = (idCandidato, nombreCompleto, eMail, telefono, resumenExperiencia, cartaPresentacion) => {
  
  const query = `UPDATE Solicitud SET NombreCompleto="${nombreCompleto}", Email="${eMail}", Telefono="${telefono}", ResumenExperiencia ="${resumenExperiencia}", CartaPresentacion="${cartaPresentacion}" WHERE IdSolicitud = ${idCandidato}`;

  return query;

}

/*	•	Recuperar documentos de candidatos por identificación para un puesto determinado */
const getDocumentosCanditato = (idCandidato) => {

  const query = `SELECT urlDocumento from Documento WHERE IdSolicitud = ${idCandidato}`;

  return query;

}

/** Agrega un nuevo documento para el candidato
 * TODO
 * Revisar el query con la tabla de Miguel
*/
const postDocumentoCandidato = (urlDocumento, idCandidato, posicion) => {

  const query = `INSERT INTO Documento (urlDocumento, idSolicitud) values ("${urlDocumento}",${idCandidato});`;

  return query;

}
/** Agrega una entrada de educación a un candidato
 * TODO
 * cambiar primary key a AutoIncrement
 * Cambiar campo fechainico y fechafin a tipo varchar 
*/
const postEducacionCandidato = (idCandidato, Escuela, gradoAlcanzado, campoEstudio, fechaInicio, fechaFin) => {

  const query = `INSERT INTO Educacion (IdSolicitud, Escuela, GradoAlcanzado, CampoEstudio, FechaInicio, FechaFin) values (${idCandidato}, "${Escuela}", "${gradoAlcanzado}", "${campoEstudio}", "${fechaInicio}", "${fechaFin}");`;

  return query;

}
/*Mueve a un candidato de un puesto a otro*/
const putCambiarPuestoCandidato = (idCandidato, idPosicion) => {

  const query = `UPDATE solicitud SET IdPosicion=${idPosicion} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/** Guardar las respuestas de los candidatos a un cuestionario 
 * TODO
 * Resolver conflictos tabla respuestas,  IdCuestionario no es primary key
 * 
*/
const postRespuestasCandidato = ( idPregunta, respuesta, idSolicitud) => {

  const query = `INSERT INTO Respuesta (IdPregunta, Respuesta, idSolicitud) values (${idPregunta},"${respuesta}",${idSolicitud});`;

  return query;

}
/*	•	 Recuperar cuestionarios de candidato */
const getCuestionariosCanditato = (idCandidato) => {

  const query = `SELECT P.IdCuestionario, P.Pregunta, R.Respuesta from Respuesta R INNER JOIN Pregunta P ON R.IdPregunta=P.IdPregunta WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/*Mover candidato a la etapa especificada*/
const putCambiarEtapaCandidato = (idCandidato, idEtapa) => {

  const query = `UPDATE Posicion SET IdEtapa=${idEtapa} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/*Añadir un nuevo candidato a un puesto*/
const postAgregarCandidato = (idCandidato, idPosicion, idEtapa, nombreCompleto, eMail, telefono, resumenExperiencia, cvUrl, cartaPresentacion) => {

  const query = `INSERT INTO Solicitud VALUES(IdSolicitud=${idCandidato}, IdPosicion=${idPosicion}, IdEtapa=${idEtapa}, NombreCompleto=${nombreCompleto}, Email=${eMail}, Telefono=${telefono}, ResumenExperiencia=${resumenExperiencia}, Cv_Url=${cvUrl}, CartaPresentacion=${cartaPresentacion});`;

  return query;

}

module.exports = {
  connect,
  getAllCompanies,
  getPipelinesbyCompany,
  getCandidato,
  postDocumentoCandidato,
  postEducacionCandidato,
  putCandidato,
  getDocumentosCanditato,
  putCambiarPuestoCandidato,
  postRespuestasCandidato,
  getCuestionariosCanditato,
  putCambiarEtapaCandidato,
  postAgregarCandidato
}