const { Router } = require('express');
const { getPositionById, actualizarPuesto, actualizarEstadoPuesto, getTodosPuestosPorEstado, crearPuesto }  = require('../controllers/position');

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Posiciones
 *  description: API administracion de puestos
 */

/**
 * @swagger
 * /api/position/{id}:
 *  get:
 *    summary: Retorna una posicion por ID
 *    tags: [Posiciones]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la posicion
 *    responses:
 *      200:
 *        description: Detalles de la posicion
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id', getPositionById);

/**
 * @swagger
 * /api/position/{id}:
 *   put:
 *     summary: Actualizar puesto.
 *     tags: [Posiciones]
 *     parameters:
 *      - in: path
 *        name: idPuesto
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del puesto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              Nombre:
 *                 type: string
 *                 description: Nombre del puesto
 *                 example: 1
 *              Descripcion:
 *                 type: string
 *                 description: Descripcion del puesto
 *                 example: 1
 *              Ubicacion:
 *                 type: string
 *                 description: Ubicacion
 *                 example: 1
 *              Departamento:
 *                 type: string
 *                 description: Departamento
 *                 example: 1
 *              Otro_atributo:
 *                 type: string
 *                 description: Otros atributos
 *                 example: 1
 *              Etiquetas:
 *                 type: string
 *                 description: Etiquetas del puesto
 *                 example: 1
 *              Identificador_solicitud:
 *                 type: string
 *                 description: Identificador de solicitud
 *                 example: 1
 *              IdCategoria:
 *                 type: string
 *                 description: Id de la categoria del puesto
 *                 example: 1
 *              IdExperiencia:
 *                 type: string
 *                 description: Id de la experiencia requerida del puesto
 *                 example: 1
 *              IdEducacion:
 *                 type: string
 *                 description: Id del nivel de educacion minimo
 *                 example: 1
 *              IdCuestionario:
 *                 type: string
 *                 description: Id del cuestionario
 *                 example: 1
 *              IdPipeline:
 *                 type: string
 *                 description: Id del proceso de seleccion
 *                 example: 1
 *              IdTipoPosicion:
 *                 type: string
 *                 description: Id del tipo de posicion
 *                 example: 1
 *              IdEmpresa:
 *                 type: string
 *                 description: Id de la empresa
 *                 example: 1
 *     responses:
 *      200:
 *        description: Puesto Actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id', actualizarPuesto);

/**
 * @swagger
 * /api/position/{id}/state:
 *   put:
 *     summary: Actualizar Estado de Puesto.
 *     tags: [Posiciones]
 *     parameters:
 *      - in: path
 *        name: idPuesto
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del puesto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              Estado:
 *                 type: string
 *                 description: Nombre del puesto
 *                 example: 1
 *     responses:
 *      200:
 *        description: Puesto Actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: array  
*/
router.put('/:id/state', actualizarEstadoPuesto);

/**
 * @swagger
 * /api/position/{id}/{idEstado}:
 *  get:
 *    summary: Retorna todos los puestos de una empresa por estado
 *    tags: [Posiciones]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la empresa
 *      - in: path
 *        name: idEstado
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del estado
 *    responses:
 *      200:
 *        description: Listado de los puestos de una empresa por estado
 *        content:
 *          application/json:
 *            schema:
 *              type: array            
 *
 */
router.get('/:id/:idEstado', getTodosPuestosPorEstado);

router.post('/', crearPuesto);

module.exports = router;