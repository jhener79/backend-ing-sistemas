const { Router } = require('express');
const { getCompanies,
  getCompanyById,
  getCompanyPipeline,
  getCompanyQuestionnaires,
  getCompanyPipelines,
  getCompanyQuestionnaire
} = require('../controllers/company');

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Compañias
 *  description: API administracion de compañias
 */

/**
 * @swagger
 * /api/company:
 *  get:
 *    summary: Retorna el listado de compañias
 *    tags: [Compañias]
 *    responses:
 *      200:
 *        description: Listado de compañias
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/', getCompanies);

/**
 * @swagger
 * /api/company/{id}:
 *  get:
 *    summary: Obtener Compañia por id
 *    tags: [Compañias]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la compañia
 *    responses:
 *      200:
 *        description: Datos de la compañia por id
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      404:
 *        description: Compañia no encontrada
 *      
 */
router.get('/:id', getCompanyById);

/**
 * @swagger
 * /api/company/{id}/pipeline/{pipeId}:
 *  get:
 *    summary: Recuperar etapas de un Pipeline por ID 
 *    tags: [Compañias]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la compañia
 *      - in: path
 *        name: pipeId
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del pipeline
 *    responses:
 *      200:
 *        description: Descripción del Pipeline
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      404:
 *        description: Pipeline no encontrada
 *      
 */
router.get('/:id/pipeline/:pipeId', getCompanyPipeline);

/**
 * @swagger
 * /api/company/{id}/pipelines:
 *  get:
 *    summary: Recuperar todas las Pipeline de la compañia
 *    tags: [Compañias]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la compañia
 *    responses:
 *      200:
 *        description: Listado de Pipelines de la compañia
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      404:
 *        description: Compañia no encontrada
 *      
 */
router.get('/:id/pipelines', getCompanyPipelines);

/**
 * @swagger
 * /api/company/{id}/questionnaire/{questionnaireId}:
 *  get:
 *    summary: Recuperar Cuestionario por ID
 *    tags: [Compañias]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la compañia
 *      - in: path
 *        name: questionnaireId
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del cuestionario
 *    responses:
 *      200:
 *        description: Detalle del cuestionario
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      404:
 *        description: Pipeline no encontrada
 *      
 */
router.get('/:id/questionnaire/:questionnaireId', getCompanyQuestionnaire)

/**
 * @swagger
 * /api/company/{id}/questionnaires:
 *  get:
 *    summary: Recuperar todas los cuestionarios de la compañia
 *    tags: [Compañias]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la compañia
 *    responses:
 *      200:
 *        description: Listado de cuestionarios de la compañia
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      404:
 *        description: Compañia no encontrada
 *      
 */
router.get('/:id/questionnaires', getCompanyQuestionnaires)

module.exports = router;