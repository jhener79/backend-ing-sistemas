const mysql = require('mysql');
const { response } = require('express');
const config = require('../Config/db');
const { getAllCompanies } = require('../services/bd');

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

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Get compañia por Id',
    });

}

const getCompanyPipeline = async( req, res = response) => {
    
    const compandyId = req.params.id;
    const pipelineId = req.params.pipeId
    
    res.json({
        ok: true,
        message: 'Get pipeline de compañia',
    });

}

const getCompanyPipelines = async( req, res = response ) => {

    const pipeId = req.params.pipeId

    res.json({
        ok: true,
        message: 'Get pipelines de compañia',
    });
}

const getCompanyQuestionnaire = async ( req, res = response ) => {

    const compandyId = req.params.id;
    const questionnaireId = req.params.pipeId
    
    res.json({
        ok: true,
        message: 'Get Cuestionario de compañia',
    });

}

const getCompanyQuestionnaires = async ( req, res = response ) => {

    const compandyId = req.params.id;
    
    res.json({
        ok: true,
        message: 'Get Cuestionarios de compañia',
    });

}

module.exports = {
    getCompanies,
    getCompanyById,
    getCompanyPipeline,
    getCompanyPipelines,
    getCompanyQuestionnaire,
    getCompanyQuestionnaires
}