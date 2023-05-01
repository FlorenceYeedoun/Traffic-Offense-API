import httpStatus from "http-status"
import {DRIVER_DAO} from "../../../dao/v1/drivers/drivers.dao.js";

const registerDriver = async (req, res) => {
    try {
        const {first_name, last_name, email, license_id, address} = req.body;
        //validate
        if (!first_name || !last_name || !email || !license_id || !address) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: "Missing required fields"
            });
        }
        // send data to database
        const {code, data, message, success} = await DRIVER_DAO.createDriver({
            first_name,
            last_name,
            email,
            license_id,
            address
        });
        if (!success) {
            return res.status(code).json({message});
        }
        res.status(code).json({data, message});
    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message});

    }
}


const getDrivers = async (req, res) => {
    try {
        res.status(httpStatus.OK).json({data: null, message: "Drivers retrieved successfully"});
    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message});

    }
}

const getDriver = async (req, res) => {
    try {
        res.status(httpStatus.OK).json({data: null, message: "Driver retrieved successfully"});

    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const deleteDriver = async (req, res) => {
    try {
        res.status(httpStatus.OK).json({data: null, message: "Driver deleted successfully"});

    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const updateDriver = async (req, res) => {
    try {
        res.status(httpStatus.OK).json({data: null, message: "Driver updated successfully"});

    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

export {registerDriver, getDrivers, getDriver, updateDriver, deleteDriver};