import mongoose from "mongoose";

const { Schema, model } = mongoose;

const equipmentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        type: {
            type: String,
            trim: true,
        },

        pricePerDay: {
            type: Number,
            required: true,
        },

        location: {
            type: String,
            trim: true,
        },

        manufacturingYear: {  
            type: Number,      
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        aiReview: {           
            type: String,
        },

        aiScore: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Equipment = model("Equipment", equipmentSchema);