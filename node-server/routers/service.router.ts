import express from 'express';
import { delete_service, get_service, get_services, post_service, put_service } from '../controllers/service.controller';
import { adminOnly } from '../middleware/auth.middleware';

const router = express.Router();


router.post('/', adminOnly, post_service);
router.get('/', get_services);
router.get('/:serviceId', get_service);
router.put('/:serviceId',adminOnly, put_service);
router.delete('/:serviceId',adminOnly, delete_service)
// export default router;



// import express from 'express';
// import { delete_service, get_service, get_services, post_service, put_service } from '../controllers/service.controller';
// import { adminOnly } from '../middleware/auth.middleware';

// const router = express.Router();

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Create a new service
 *     description: Endpoint for creating a new service
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       '201':
 *         description: Successfully created
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 */
router.post('/', adminOnly, post_service);

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Get all services
 *     description: Retrieve a list of all services
 *     tags: [Services]
 *     responses:
 *       '200':
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *       '500':
 *         description: An error occurred while fetching services
 */
router.get('/', get_services);

/**
 * @swagger
 * /services/{serviceId}:
 *   get:
 *     summary: Get service by ID
 *     description: Retrieve a service by its ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       '200':
 *         description: A service object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: An error occurred while fetching the service
 */
router.get('/:serviceId', get_service);

/**
 * @swagger
 * /services:
 *   put:
 *     summary: Update a service
 *     description: Update a service by its ID
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       '200':
 *         description: Successfully updated
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Service not found
 */
router.put('/:serviceId', adminOnly, put_service);

/**
 * @swagger
 * /services/{serviceId}:
 *   delete:
 *     summary: Delete a service
 *     description: Delete a service by its ID
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       '200':
 *         description: Successfully deleted
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: An error occurred while deleting the service
 */
router.delete('/:serviceId', adminOnly, delete_service);

export default router;
