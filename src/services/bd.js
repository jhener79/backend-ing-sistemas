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

/** Consultas de Candidatos */

/*	Recuperar candidato por id para el puesto dado */
const getCandidato = (idCandidato) => {

  const query = `SELECT * FROM Solicitud where IdSolicitud = ${idCandidato}`;

  return query;

}

/*Actualiza a un candidato en un puesto*/
const putCandidato = (idCandidato, nombreCompleto, eMail, telefono, resumenExperiencia, cvUrl, cartaPresentacion) => {

  const query = `UPDATE Solicitud SET NombreCompleto=${nombreCompleto}, Email=${eMail}, Telefono=${telefono}, ResumenExperiencia =${resumenExperiencia}, CV_Url=${cvUrl}, CartaPresentacion=${cartaPresentacion} WHERE IdSolicitud = ${idCandidato}`;

  return query;

}

const agregarEducacionCandidato = ( idCandidato, Escuela, gradoAlcanzado, campoEstudio, fechaInicio, fechaFin ) => {

  const query = `INSERT INTO RRHH.Educacion values (${idCandidato}, ${Escuela}, ${gradoAlcanzado}, ${campoEstudio}, ${fechaInicio}, ${fechaFin}');`;

  return query;

}

module.exports = {
  connect,
  getAllCompanies,
  getPipelinesbyCompany,
  getCandidato,
  agregarEducacionCandidato,
  putCandidato
}