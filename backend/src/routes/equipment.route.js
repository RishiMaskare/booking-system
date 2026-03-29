import express from 'express';
import { addEquipment } from '../controllers/equipment.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/add", protect, addEquipment);

export default router;

