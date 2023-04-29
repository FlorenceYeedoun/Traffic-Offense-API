/**
 * 
 * vehicle
number_plate
driver
color
model
year
make
 */

import { Schema, model } from "mongoose"
const vehicleSchema = new Schema({
    number_plate: {

    },
    driver: {
        type: String,
        required: [true, 'Number plate required'],
        trim: true

    },

    color: {
        type: String,
        required: [true, 'Color required'],
        trim: true

    },

    model: {
        type: String,
        required: [true, 'Model required'],
        trim: true

    },

    year: {
        type: String,
        required: [true, 'Year required'],
        trim: true,
        min: [2000, "Year must be after 2000"],
        max: [9999, "Year must be before 9999"]
    },

    make: {
        type: String,
        required: [true, 'Make required'],
        trim: true
    },

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });


const Vehicle = model('Vehicle', vehicleSchema);
export default Vehicle;