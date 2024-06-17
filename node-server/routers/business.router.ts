// import express from 'express';
// import { delete_business, get_business, get_businesses, post_business, put_business } from '../controllers/business.controller';
// import { adminOnly } from '../middleware/auth.middleware';

// const router = express.Router();

// router.post('/', adminOnly,post_business);
// router.get('/', get_businesses);
// router.get('/:businessId', get_business);
// router.put('/',adminOnly, put_business);
// router.delete('/:businessId',adminOnly, delete_business);

// export default router;
import express from 'express';
import { delete_business, get_business, get_businesses, post_business, put_business } from '../controllers/business.controller';
import { adminOnly } from '../middleware/auth.middleware';

const router = express.Router();

/**
 * @swagger
 * /businesses:
 *   post:
 *     summary: Create a new business
 *     description: Endpoint for creating a new business
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '201':
 *         description: Successfully created
 *       '400':
 *         description: Bad request
 */
router.post('/', adminOnly, post_business);

/**
 * @swagger
 * /businesses:
 *   get:
 *     summary: Get all businesses
 *     description: Retrieve a list of all businesses
 *     tags: [Businesses]
 *     responses:
 *       '200':
 *         description: A list of businesses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Business'
 *       '500':
 *         description: An error occurred while fetching businesses
 */
router.get('/', get_businesses);

/**
 * @swagger
 * /businesses/{businessId}:
 *   get:
 *     summary: Get business by ID
 *     description: Retrieve a business by its ID
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         schema:
 *           type: string
 *         description: The business ID
 *     responses:
 *       '200':
 *         description: A business object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: An error occurred while fetching the business
 */
router.get('/:businessId', get_business);

/**
 * @swagger
 * /businesses:
 *   put:
 *     summary: Update a business
 *     description: Update a business by its ID
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '200':
 *         description: Successfully updated
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Business not found
 */
router.put('/', adminOnly, put_business);

/**
 * @swagger
 * /businesses/{businessId}:
 *   delete:
 *     summary: Delete a business
 *     description: Delete a business by its ID
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         schema:
 *           type: string
 *         description: The business ID
 *     responses:
 *       '200':
 *         description: Successfully deleted
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: An error occurred while deleting the business
 */
router.delete('/:businessId', adminOnly, delete_business);

export default router;
