const { Router } = require('express');
const { 
  getCandidateById, 
  ActualizarCandidateById, 
  getDocumentosCandidato, 
  crearEducacionCandidato, 
  crearDocumentoCandidato, 
  actualizarPosicionCandidato, 
  guardarRespuestaCandidato, 
  getCuestionariosCandidato, 
  actualizarTarjetaPuntuacionCandidato, 
  moverCandidatoEtapa, 
  getCandidatosPorPosicion, 
  crearCandidato 
}  = require('../controllers/candidate');

const router = Router();


/**
 * @swagger
 * tags:
 *  name: Candidatos
 *  description: API administracion de candidatos
 */

/**
 * @swagger
 * /api/candidate/{id}:
 *  get:
 *    summary: Devuelve el candidato por el ID dado
 *    tags: [Candidatos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *    responses:
 *      200:
 *        description: Candidato
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id', getCandidateById);


/**
 * @swagger
 * /api/candidate/{id}:
 *   put:
 *     summary: Actualizar la informacion de candidato.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              IdPosicion:
 *                 type: integer
 *                 description: Id de la posicion
 *                 example: 1
 *              NombreCompleto:
 *                 type: string
 *                 description: Nombre completo del candidato
 *                 example: 1
 *              Email:
 *                 type: string
 *                 description: Email del candidato
 *                 example: 1
 *              Telefono:
 *                 type: string
 *                 description: Telefono del candidato
 *                 example: 1
 *              ResumenExperiencia:
 *                 type: string
 *                 description: Resumen de experiencia de candidato
 *                 example: 1
 *              CartaPresentacion:
 *                 type: string
 *                 description: Carta de presentacion de candidato
 *                 example: 1
 *     responses:
 *      200:
 *        description: Candidato Actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id', ActualizarCandidateById);


/**
 * @swagger
 * /api/candidate/{id}/documents:
 *  get:
 *    summary: Retorna un listado de documentos asociados al candidato
 *    tags: [Candidatos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *    responses:
 *      200:
 *        description: Listado de documentos del candidato
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id/documents', getDocumentosCandidato);

/**
 * @swagger
 * /api/candidate/{id}/documents:
 *   post:
 *     summary: Crear un documento para el candidato.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              urlDocumento:
 *                 type: string
 *                 description: URL del documento
 *                 example: 1
 *              posicion:
 *                 type: integer
 *                 description: ID de la posicion
 *                 example: 1
 *     responses:
 *      200:
 *        description: Nuevo documento creado para el candidato
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.post('/:id/documents', crearDocumentoCandidato);

/**
 * @swagger
 * /api/candidate/{id}/education:
 *   post:
 *     summary: Crear una entrada de educacion para el candidato.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              Escuela:
 *                 type: string
 *                 description: Escuela
 *                 example: 1
 *              GradoAlcanzado:
 *                 type: string
 *                 description: Grado alcanzado
 *                 example: 1
 *              CampoEstudio:
 *                 type: string
 *                 description: Campo de estudio
 *                 example: 1
 *              FechaInicio:
 *                 type: string
 *                 description: Fecha Inicio los estudios
 *                 example: 1
 *              FechaFin:
 *                 type: string
 *                 description: Fecha finalizo los estudios
 *                 example: 1
 *     responses:
 *      200:
 *        description: Nueva entrada de Educacion del candidato creada
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.post('/:id/education', crearEducacionCandidato);

/**
 * @swagger
 * /api/candidate/{id}/move:
 *   put:
 *     summary: Mueve a un candidato para aplicar a otra posicion.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              idPosicion:
 *                 type: integer
 *                 description: id de la nueva posicion
 *                 example: 1
 *     responses:
 *      200:
 *        description: Posicion del Candidato Actualizada
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id/move', actualizarPosicionCandidato);

/**
 * @swagger
 * /api/candidate/{id}/questionnaire/{idPregunta}:
 *   post:
 *     summary: Crear una respuesta a las preguntas del candidato.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *      - in: path
 *        name: idPregunta
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id de la pregunta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              respuesta:
 *                 type: string
 *                 description: Escuela
 *                 example: 1
 *     responses:
 *      200:
 *        description: Respuesta agregada
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.post('/:id/questionnaire/:idPregunta', guardarRespuestaCandidato);

/**
 * @swagger
 * /api/candidate/{id}/questionnaires:
 *  get:
 *    summary: Retorna un listado de cuestionarios asociados al candidato
 *    tags: [Candidatos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *    responses:
 *      200:
 *        description: Listado de cuestionarios del candidato
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id/questionnaires', getCuestionariosCandidato);

/**
 * @swagger
 * /api/candidate/{id}/scorecard:
 *   put:
 *     summary: Agrega un puntaje a la tarjeta de calificacion.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              Puntuacion:
 *                 type: string
 *                 description: Puntuacion del candidato
 *                 example: 1
 *     responses:
 *      200:
 *        description: Puntuacion del candidato actualizada
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id/scorecard', actualizarTarjetaPuntuacionCandidato);

/**
 * @swagger
 * /api/candidate/{id}/stage:
 *   put:
 *     summary: Mueve a un candidato por las etapas del proceso del seleccion.
 *     tags: [Candidatos]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              IdEtapa:
 *                 type: integer
 *                 description: Id de la etapa
 *                 example: 1
 *     responses:
 *      200:
 *        description: Se movio al candidato de etapa
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id/stage', moverCandidatoEtapa);
 
/**
 * @swagger
 * /api/candidate/{id}/{idPosicion}:
 *  get:
 *    summary: Retorna un listado de Candidatos por Empresa
 *    tags: [Candidatos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del candidato
 *      - in: path
 *        name: idPosicion
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id de la posicion
 *    responses:
 *      200:
 *        description: Listado de Candidatos por posicion
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id/:idPosicion', getCandidatosPorPosicion);

/**
 * @swagger
 * /api/candidate:
 *   post:
 *     summary: Crear un candidato.
 *     tags: [Candidatos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              IdPosicion:
 *                 type: integer
 *                 description: Id de la posicion
 *                 example: 1
 *              NombreCompleto:
 *                 type: string
 *                 description: Nombre completo del candidato
 *                 example: 1
 *              IdEtapa:
 *                 type: integer
 *                 description: Email del candidato
 *                 example: 1
 *              Email:
 *                 type: string
 *                 description: Email del candidato
 *                 example: 1
 *              Telefono:
 *                 type: string
 *                 description: Telefono del candidato
 *                 example: 1
 *              ResumenExperiencia:
 *                 type: string
 *                 description: Resumen de experiencia de candidato
 *                 example: 1
 *              CartaPresentacion:
 *                 type: string
 *                 description: Carta de presentacion de candidato
 *                 example: 1
 *     responses:
 *      200:
 *        description: Candidato creado
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.post('/', crearCandidato)

module.exports = router;