import Driver from "../../../models/v1/driver.model.js";
import httpStatus from "http-status";

const createDriver = async (driver) => {
    try {
        //check if a driver with the email exist
        const existingDriver = await Driver.findOne({
            email: driver.email
        });

        if (existingDriver) {
            return {success: false, message: 'Driver with email already exist', code: httpStatus.CONFLICT}
        }
        const createdDriver = await Driver.create({...driver});
        return {success: true, message: 'Driver registered successfully', code: httpStatus.CREATED, data: createdDriver}
    } catch (e) {
        return {success: false, message: e.message, code: httpStatus.INTERNAL_SERVER_ERROR, data: null}
    }
}

export const DRIVER_DAO = {createDriver}