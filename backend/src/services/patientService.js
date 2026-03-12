import * as patientRepository from "../repositories/patientRepository.js";

export const getAllPatients = () => {
    return patientRepository.findAll();
};

export const getPatientById = (id) => {
    return patientRepository.findById(id);
}

export const getPatientByName = (name) => {
    return patientRepository.findByName(name);
};

export const createPatient = (data) => {
    return patientRepository.create(data);
};

export const updatePatient =(id, data) => {
    return patientRepository.update(id, data);
};

export const deletePatient = (id) => {
    return patientRepository.remove(id);
};