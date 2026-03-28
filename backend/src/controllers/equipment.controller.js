import { Equipment } from './../models/equipment.model.js';

export const addEquipment = async (req, res) => {
    try {
        const {
            name,
            type,
            pricePerDay,
            location,
            manufacuturingYear,
            aiRewiew,
            aiScore,
        } = req.body;


        const equipment = await Equipment.create({
            name,
            type,
            pricePerDay,
            location,
            manufacuturingYear,
            aiRewiew,
            aiScore,
            owner: req.user?._id,
        });

        res.status(201).json({
            message: "Equipment added successfully",
            equipment,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error adding equipment",
        });
    }
}