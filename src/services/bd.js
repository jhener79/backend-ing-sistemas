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

const getCompany = (companyID) => {

  const query = `SELECT * FROM empresa where IdEmpresa = ${companyID}`;

  return query;

}

const getEtapasPipelineEmpresa = (companyID, pipelineID) => {
  
  const query = `Select Descripcion from pipeline where IdEmpresa = ${companyID} and IdPipeline = ${pipelineID}`;

  return query;

}

const getPipelinesbyCompany = (companyID) => {

  const query = `Select Descripcion from pipeline where IdEmpresa = ${companyID}`;

  return query

}

const getCuestionarioEmpresa = (companyID, cuestionarioID) =>{

  const query = `select c.Descripcion from posicion p
  INNER JOIN cuestionario c ON c.IdCuestionario = p.IdCuestionario
  where p.IdCuestionario = ${cuestionarioID} and p.IdEmpresa = ${companyID}`;

  return query

}

const getCuestionariosEmpresa = (companyID) => {

  const query = `select c.Descripcion from posicion p
  INNER JOIN cuestionario c ON c.IdCuestionario = p.IdCuestionario
  where  p.IdEmpresa = ${companyID}`;

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

/*	???	Recuperar documentos de candidatos por identificaci??n para un puesto determinado */
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
/** Agrega una entrada de educaci??n a un candidato
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
/*	???	 Recuperar cuestionarios de candidato */
const getCuestionariosCanditato = (idCandidato) => {

  const query = `SELECT c.Descripcion FROM posicion p 
  INNER JOIN solicitud s ON s.IdPosicion = p.IdPosicion
  INNER JOIN cuestionario c ON c.IdCuestionario = p.IdCuestionario
  WHERE s.IdSolicitud = ${idCandidato}`;

  return query;

}
/*Mover candidato a la etapa especificada*/
const putCambiarEtapaCandidato = (idCandidato, idEtapa) => {

  const query = `UPDATE solicitud SET IdEtapa=${idEtapa} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}
/** Recuperar candidatos por posicion */
const getCandidatoPosicion = (IdCandidato, IdPosicion) => {

  const query = `select * from solicitud where IdSolicitud = ${IdCandidato} and IdPosicion = ${IdPosicion}`;

  return query

}
/*A??adir un nuevo candidato a un puesto*/
const postAgregarCandidato = (idPosicion, idEtapa, nombreCompleto, eMail, telefono, resumenExperiencia, cartaPresentacion) => {

  const query = `INSERT INTO solicitud (IdPosicion, IdEtapa, NombreCompleto, Email, Telefono, ResumenExperiencia, CartaPresentacion) VALUES (${idPosicion}, ${idEtapa}, "${nombreCompleto}", "${eMail}", "${telefono}", "${resumenExperiencia}", "${cartaPresentacion}")`;

  return query; 

}

const getPosicionPorID = (idPosicion) => {

  const query = `select * from posicion where IdPosicion = ${idPosicion}`;

  return query;

}

const putPosicion = (id, body) => {

  const query = `UPDATE posicion 
    SET Nombre ="${body.Nombre}", Descripcion ="${body.Descripcion}", 
    Ubicacion ="${body.Ubicacion}", Departamento ="${body.Departamento}", 
    Otro_atributo ="${body.Otro_atributo}", Etiquetas ="${body.Etiquetas}", 
    Identificador_solicitud ="${body.Identificador_solicitud}", 
    IdCategoria = ${body.IdCtegoria}, IdExperiencia = ${body.IdExperiencia}, 
    IdEducacion = ${body.IdEducacion}, IdCuestionario = ${body.IdCuestionario}, 
    IdPipeline = ${body.IdPipeline}, IdTipoPosicion = ${body.IdTipoPosicion}, 
    IdEmpresa = ${body.IdEmpresa}, Estado = "${body.Estado}" where IdPosicion = ${id}`;

  return query;

}

const putEstadoPosicion = (id, Estado) => {

  const query = `UPDATE posicion SET Estado = "${Estado}" where IdPosicion = ${id}`

  return query;

}

const getPosicionEstado = (id, idEstado) => {

  const query = `select * from posicion where Estado = ${idEstado} and IdEmpresa = ${id}`

  return query;

}

const postPosicion = (body) => {

  const query = `INSERT INTO posicion
    (Nombre, Descripcion, Ubicacion, Departamento, Otro_atributo, Etiquetas, 
    Identificador_solicitud, IdCategoria, IdExperiencia, IdEducacion, IdCuestionario,
    IdPipeline, IdTipoPosicion, IdEmpresa, Estado)
    values ("${body.Nombre}", "${body.Descripcion}", 
    "${body.Ubicacion}", "${body.Departamento}", 
    "${body.Otro_atributo}", "${body.Etiquetas}", 
    "${body.Identificador_solicitud}", 
    ${body.IdCtegoria}, ${body.IdExperiencia}, 
    ${body.IdEducacion}, ${body.IdCuestionario}, 
    ${body.IdPipeline}, ${body.IdTipoPosicion}, 
    ${body.IdEmpresa}, "${body.Estado})"`;

  return query;

}

module.exports = {
  connect,
  getAllCompanies,
  getCompany,
  getEtapasPipelineEmpresa,
  getPipelinesbyCompany,
  getCuestionarioEmpresa,
  getCuestionariosEmpresa,
  getCandidato,
  postDocumentoCandidato,
  postEducacionCandidato,
  putCandidato,
  getDocumentosCanditato,
  putCambiarPuestoCandidato,
  postRespuestasCandidato,
  getCuestionariosCanditato,
  putCambiarEtapaCandidato,
  getCandidatoPosicion,
  postAgregarCandidato,
  getPosicionPorID,
  putPosicion,
  putEstadoPosicion,
  getPosicionEstado,
  postPosicion
}