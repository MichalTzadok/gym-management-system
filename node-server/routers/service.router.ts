import express from 'express';
import { delete_service, get_service, get_services, post_service, put_service } from '../controllers/service.controller';
import { adminOnly } from '../middleware/auth.middleware';

const router = express.Router();


router.post('/', adminOnly, post_service);
router.get('/', get_services);
router.get('/:serviceId', get_service);
router.put('/',adminOnly, put_service);
router.delete('/:serviceId',adminOnly, delete_service)
export default router;