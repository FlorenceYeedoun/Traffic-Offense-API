import httpStatus from "http-status"

const registerVehicles = async (req,res) =>{
    try{
        res.status(httpStatus.CREATED).json({data:null, message: "Vehicles registrered successfully"});
    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR),json({message: e.message});

    }
}


const getVehicless = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Vehicless retrieved successfully"});
    } catch (e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message});

    }
}

const getVehicles = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Vehicles retrieved successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const deleteVehicles = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Vehicles deleted successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const updateVehicles = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Vehicles updated successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

export {registerVehicles, getVehicless, getVehicles, updateVehicles, deleteVehicles};