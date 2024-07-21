import express from 'express';
import { delete_meeting, get_meeting, get_meetings, get_user_meetings, post_meeting, put_meeting } from '../controllers/meeting.controller';
import { adminOnly } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/', post_meeting);
router.get('/', get_meetings);
router.get('/:meetingId', get_meeting);
router.get('/user/:userId', get_user_meetings);
router.put('/',adminOnly, put_meeting);
router.delete('/:meetingId',adminOnly, delete_meeting);



/**
 * @swagger
 * /meetings:
 *   post:
 *     summary: Create a new meeting
 *     description: Endpoint for creating a new meeting
 *     tags: [Meetings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       '201':
 *         description: Successfully created
 *       '400':
 *         description: Bad request
 */
router.post('/', post_meeting);

/**
 * @swagger
 * /meetings:
 *   get:
 *     summary: Get all meetings
 *     description: Retrieve a list of all meetings
 *     tags: [Meetings]
 *     responses:
 *       '200':
 *         description: A list of meetings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meeting'
 *       '500':
 *         description: An error occurred while fetching meetings
 */
router.get('/', get_meetings);

/**
 * @swagger
 * /meetings/{meetingId}:
 *   get:
 *     summary: Get meeting by ID
 *     description: Retrieve a meeting by its ID
 *     tags: [Meetings]
 *     parameters:
 *       - in: path
 *         name: meetingId
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       '200':
 *         description: A meeting object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meeting'
 *       '404':
 *         description: Meeting not found
 *       '500':
 *         description: An error occurred while fetching the meeting
 */
router.get('/:meetingId', get_meeting);

/**
 * @swagger
 * /meetings:
 *   put:
 *     summary: Update a meeting
 *     description: Update a meeting by its ID
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       '200':
 *         description: Successfully updated
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Meeting not found
 */
router.put('/', adminOnly, put_meeting);

/**
 * @swagger
 * /meetings/{meetingId}:
 *   delete:
 *     summary: Delete a meeting
 *     description: Delete a meeting by its ID
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: meetingId
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       '200':
 *         description: Successfully deleted
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Meeting not found
 *       '500':
 *         description: An error occurred while deleting the meeting
 */
router.delete('/:meetingId', adminOnly, delete_meeting);
/**
 * @swagger
 * /meetings/{meetingId}:
 *   delete:
 *     summary: Delete a meeting
 *     description: Delete a meeting by its ID
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: meetingId
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       '200':
 *         description: Successfully deleted
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Meeting not found
 *       '500':
 *         description: An error occurred while deleting the meeting
 */
router.delete('/:meetingId', adminOnly, delete_meeting);

/**
 * @swagger
 * /meetings/user/{userId}:
 *   get:
 *     summary: Get meetings by user ID
 *     description: Retrieve a list of meetings by user ID
 *     tags: [Meetings]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       '200':
 *         description: A list of meetings for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meeting'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: An error occurred while fetching the meetings
 */
router.get('/user/:userId', get_user_meetings);
export default router;

