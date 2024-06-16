// import express from 'express';
// import { addService, updateService, deleteService, getAllServices, getServiceById } from '../controllers/service.controller';

// const router = express.Router();

// /**
//  * @swagger
//  * /services:
//  *   post:
//  *     summary: Add a new service
//  *     description: Endpoint for adding a new service
//  *     tags: [Services]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Service'
//  *     responses:
//  *       '201':
//  *         description: Successfully added
//  *       '400':
//  *         description: Bad request
//  */
// router.post('/', addService);

// /**
//  * @swagger
//  * /services/{id}:
//  *   put:
//  *     summary: Update an existing service
//  *     description: Endpoint for updating an existing service
//  *     tags: [Services]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The service ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Service'
//  *     responses:
//  *       '200':
//  *         description: Successfully updated
//  *       '404':
//  *         description: Service not found
//  */
// router.put('/:id', updateService);

// /**
//  * @swagger
//  * /services/{id}:
//  *   delete:
//  *     summary: Delete a service
//  *     description: Endpoint for deleting a service
//  *     tags: [Services]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The service ID
//  *     responses:
//  *       '200':
//  *         description: Successfully deleted
//  *       '404':
//  *         description: Service not found
//  */
// router.delete('/:id', deleteService);

// /**
//  * @swagger
//  * /services:
//  *   get:
//  *     summary: Get all services
//  *     description: Endpoint for getting all services
//  *     tags: [Services]
//  *     responses:
//  *       '200':
//  *         description: Successfully retrieved
//  *       '500':
//  *         description: Failed to fetch services
//  */
// router.get('/', getAllServices);

// /**
//  * @swagger
//  * /services/{id}:
//  *   get:
//  *     summary: Get a service by ID
//  *     description: Endpoint for getting a service by ID
//  *     tags: [Services]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The service ID
//  *     responses:
//  *       '200':
//  *         description: Successfully retrieved
//  *       '404':
//  *         description: Service not found
//  */
// router.get('/:id', getServiceById);

// export default router;
