import ApiError from "../utils/ApiError.js"
import * as patientRepository from "../repositories/patientRepository.js";

export const getAllPatients = async () => {
    return await patientRepository.findAll();
};

export const getPatientById = async (id) => {
    return await patientRepository.findById(id);
}

export const getPatientByName = async (name) => {
    return await patientRepository.findByName(name);
};

export const createPatient = async (data) => {
    if (!data.email){
        throw new ApiError(400, "Email is required");
    }

    if (!data.first_name){
        throw new ApiError(400, "First name is required");
    }
    return await patientRepository.create(data);
};

export const updatePatient = async (id, data) => {
    return await patientRepository.update(id, data);
};

export const deletePatient = async (id) => {
    return await patientRepository.remove(id);
};