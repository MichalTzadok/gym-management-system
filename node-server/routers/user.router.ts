import express from 'express';
import {  get_user, get_users } from '../controllers/user.controller';
import { adminOnly } from '../middleware/auth.middleware';
const app = express();


const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # Requires authentication with JWT token
 *       - adminAuth: []   # Requires admin privileges
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         description: An error occurred while fetching users
 */
router.get('/', get_users);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       '200':
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: An error occurred while fetching the user
 */
router.get('/:id', get_user);

export default router;
