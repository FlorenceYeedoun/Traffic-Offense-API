/**
 * 
 * Driver
first_name
last_name
address
email
license_id
 */
import { Schema, model } from "mongoose";
import validator from "validator";

const driverSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First name required'],
        trim: true
    },

    last_name: {
        type: String,
        required: [true, 'Last name required'],
        trim: true
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email ${value}`);
            }
        },
    },

    license_id: {
        type: String,
        unique: true,
        required: [true, 'Licence required'],
    },

    address: {
        country: {
            type: String,
            required: [true, 'Country required'],
            trim: true
        },
        city: {
            type: String,
            required: [true, 'City required'],
            trim: true
        },
        addressLine1: {
            type: String,
            required: [true, 'addressLine1 required'],
            trim: true
        },
        addressLine2: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            required: [true, 'State name required'],
            trim: true
        },
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Driver= model("Driver", driverSchema);
export default Driver;