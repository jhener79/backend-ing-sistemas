const mysql = require('mysql');
const { response } = require('express');
const config = require('../Config/db');
const { getAllCompanies, getPipelinesbyCompany, getEtapasPipelineEmpresa, getCompany, getCuestionarioEmpresa, getCuestionariosEmpresa } = require('../services/bd');

const getCompanies = async(req, res = response ) => {

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

const getCompanyById = async(req, res = response) => {

    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    const id = req.params.id;
    //Enviar el id del Usuario como parametro
    const query = getCompany(id)

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Detalle de la compañia',
           data: results
       });

   })

   connection.end();

}

const getCompanyPipeline = async( req, res = response) => {
    
    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    const id = req.params.id;
    const pipeId = req.params.pipeId;

    //Enviar el id de la compania
    const query = getEtapasPipelineEmpresa(id, pipeId);

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Pipeline de la compañia',
           data: results
       });

   })

   connection.end();

}

const getCompanyPipelines = async( req, res = response ) => {

    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    const id = req.params.id;

    //Enviar el id de la compania
    const query = getPipelinesbyCompany(id);

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Pipelines de la compañia',
           data: results
       });

   })

   connection.end();
}

const getCompanyQuestionnaire = async ( req, res = response ) => {

    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    const id = req.params.id;
    const questionnaireId = req.params.questionnaireId;

    //Enviar el id de la compania
    const query = getCuestionarioEmpresa(id, questionnaireId);

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Cuestionario de la empresa',
           data: results
       });

   })

   connection.end();
}



const getCompanyQuestionnaires = async ( req, res = response ) => {

    const connection = mysql.createConnection(config);
  
    connection.connect(function(error) {
        if (error) throw error;
    });

    const id = req.params.id;


    //Enviar el id de la compania
    const query = getCuestionariosEmpresa(id);

   connection.query(query, (error, results) => {
       if(error) throw error;

       res.json({
           ok: true,
           message: 'Cuestionarios de la empresa',
           data: results
       });

   })

   connection.end();

}

module.exports = {
    getCompanies,
    getCompanyById,
    getCompanyPipeline,
    getCompanyPipelines,
    getCompanyQuestionnaire,
    getCompanyQuestionnaires
}