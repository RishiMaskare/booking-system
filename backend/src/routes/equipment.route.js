import express from 'express';
import { addEquipment } from '../controllers/equipment.controller.js';

const router = express.Router();

router.post("/add", addEquipment);

export default router;

