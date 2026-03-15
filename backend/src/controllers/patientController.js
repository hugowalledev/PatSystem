import * as patientService from "../services/patientService.js";
import ApiError from "../utils/ApiError.js";

export const getPatients = async (req, res) => {
    const patients = await patientService.getAllPatients();
    res.json(patients);
};

export const getPatientById = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)){
            throw new ApiError(400, "Invalid patient Id");
        }
        
        const patient = await patientService.getPatientById(id);

        if (!patient) {
            throw new ApiError(404, "Patient not found");
        }
        
        res.json(patient);
    } catch (error) {
        next(error);
    }
};

export const getPatientByName = async (req, res) => {
    const firstname = req.params.name;
    const patient = await patientService.getPatientByName(firstname);


    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    res.json(patient);
};

export const getPatientsQuantity = async (req, res) => {
    const patients = await patientService.getAllPatients();
    res.json(patients.length);
};

export const createPatient = async (req, res) => {
    const patient = await patientService.createPatient(req.body);

    res.status(201).json(patient);
};

export const updatePatient = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const patient = await patientService.updatePatient(id, req.body);

    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }
    res.json(patient);
};

export const deletePatient = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const deleted = await patientService.deletePatient(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    res.status(204).send();
};