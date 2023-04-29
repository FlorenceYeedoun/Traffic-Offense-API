import httpStatus from "http-status"

const registerOffense = async (req,res) =>{
    try{
        res.status(httpStatus.CREATED).json({data:null, message: "Offense registrered successfully"});
    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR),json({message: e.message});

    }
}


const getOffenses = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Offenses retrieved successfully"});
    } catch (e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message});

    }
}

const getOffense = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Offense retrieved successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const deleteOffense = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Offense deleted successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

const updateOffense = async(req,res) =>{
    try{
        res.status(httpStatus.OK).json({data:null, message: "Offense updated successfully"});

    }catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})

    }
}

export {registerOffense, getOffenses, getOffense, updateOffense, deleteOffense};